import { Controller, Get, HttpCode, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Param, NotFoundException, ForbiddenException, UseGuards, ConflictException } from '@nestjs/common';
import { ApiNoContentResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiBody, ApiConflictResponse } from '@nestjs/swagger';
import { OutcomeReadDTO } from '../DTO/OutcomeRead.DTO';
import { OutcomeWriteDTO } from '../DTO/OutcomeWrite.DTO';
import { MappingWriteDTO } from '../DTO/MappingWrite.DTO';
import { OutcomesService } from './outcomes.service';

import * as request from 'superagent';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RouteParameterDTO } from 'src/DTO/RouteParameter.DTO';
import { Outcome } from 'src/Models/Outcome.Schema';

@Controller()
export class OutcomesController {

  constructor(private outcomeService: OutcomesService) {}

  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Invalid username' })
  @ApiForbiddenResponse({ description: 'If the object is unreleased and requester is not the author || If the object is waiting, review, or proofing and the requester is not privileged' })
  @ApiNotFoundResponse({ description: 'User is not found || Learning Object is not found' })
  @Get('/users/:username/learning-objects/:learningObjectID/outcomes')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  async getOutcomesForLearningObject(@Param() routeParameterDTO: RouteParameterDTO): Promise<OutcomeReadDTO[]> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    // TODO: add pagination
    const outcomes = await this.outcomeService.findOutcomesForLearningObject(routeParameterDTO.learningObjectID);

    const outcomeResponses = [];

    outcomes.forEach(outcome => {
      const outcomeResponse: OutcomeReadDTO = {
        ID: outcome['_id'],
        bloom: outcome.bloom,
        verb: outcome.verb,
        text: outcome.text,
        lastUpdated: outcome.lastUpdated,
      }

      outcomeResponses.push(outcomeResponse);
    });

    return outcomeResponses;
  }

  @ApiCreatedResponse({ description: 'Created' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid verb || Invalid username'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If the Learning Object is unreleased and the requester is not the author || If the Learning Object is in waiting, review, or proofing and requester is not privileged || If the object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found'})
  @ApiBody({ type: OutcomeWriteDTO })
  @Post('/users/:username/learning-objects/:learningObjectID/outcomes')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  async addOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO, @Param() routeParameterDTO: RouteParameterDTO): Promise<void> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    await this.outcomeService.create(outcomeWriteDTO, routeParameterDTO.learningObjectID);

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid text || Invalid verb || Invalid username'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate' })
  @ApiBody({ type: OutcomeWriteDTO })
  @Patch('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async updateOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO, @Param() routeParameterDTO: RouteParameterDTO): Promise<void> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    const outcome = await this.getOutcome(routeParameterDTO.outcomeID);

    await this.outcomeAlreadyExists(outcomeWriteDTO);

    await this.outcomeService.update(outcomeWriteDTO, routeParameterDTO.outcomeID);

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is released || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found ||  Outcome not found' })
  @Delete('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async deleteOutcome(@Param() routeParameterDTO: RouteParameterDTO): Promise<void> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    const outcome = await this.getOutcome(routeParameterDTO.outcomeID);

    await this.outcomeService.delete(routeParameterDTO.outcomeID);

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released and the requester is not a mapper, editor, or admin' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Guideline not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate' })
  @ApiBody({ type: MappingWriteDTO })
  @Post('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID/mappings')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async addMapping(@Body() mappingWriteDTO: MappingWriteDTO, @Param() routeParameterDTO: RouteParameterDTO): Promise<void> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    const outcome = await this.getOutcome(routeParameterDTO.outcomeID);

    const guideline = await this.getGuideline(mappingWriteDTO.guidelineID);

    this.checkForDuplicateMapping(outcome, mappingWriteDTO.guidelineID);

    await this.outcomeService.addMapping(mappingWriteDTO.guidelineID, routeParameterDTO.outcomeID);

  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username' })
  @ApiUnauthorizedResponse({ description: 'The requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is in waiting, review, proofing and requester is not privileged || If the Learning Object is released and the requester is not a mapper, editor, or admin || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Mapping not found' })
  @Delete('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID/mappings/:guidelineID')
  @UseGuards(JwtAuthGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async deleteMapping(@Param() routeParameterDTO: RouteParameterDTO): Promise<void> {

    const user = await this.getUser(routeParameterDTO.username);

    const learningObject = await this.getLearningObject(routeParameterDTO.username, routeParameterDTO.learningObjectID);

    const outcome = await this.getOutcome(routeParameterDTO.outcomeID);

    const guideline = await this.getGuideline(routeParameterDTO.guidelineID);
    
    await this.outcomeService.deleteMapping(routeParameterDTO.outcomeID, routeParameterDTO.guidelineID);

  }

  async getUser(username: string) {
    try {
      const response = await request
        .get(`${process.env.USER_SERVICE_API}/users/${username}/profile`)
        .set('Accept', 'application/json')

      return response.body;

    } catch (error) {
      throw new NotFoundException('The specified user was not found');
    };
  }

  async getLearningObject(username: string, learningObjectID: string) {
    try {
      const response = await request
        .get(`${process.env.LEARNING_OBJECT_SERVICE_API}/users/${username}/learning-objects/${learningObjectID}/outcomes`)
        .set('Accept', 'application/json')

      return response.body;

    } catch (error) {
      if (error.status === 401) {
        throw new ForbiddenException('You do not have permission to view the reuested Learning Object');
      } else {
        throw new NotFoundException('The specified Learning Object was not found');
      }
    };
  }

  async getOutcome(outcomeID: string) {
    const outcome = await this.outcomeService.findOne(outcomeID);

    if (!outcome) {
      throw new NotFoundException('The specified Outcome was not found');
    }

    return outcome;
  }

  async getGuideline(guidelineID: string) {
    const guideline = await this.outcomeService.getGuideline(guidelineID);

    if (!guideline) {
      throw new NotFoundException('The specified Guideline was not found');
    }

    return guideline;
  }

  async outcomeAlreadyExists(newOutcome) {
    const existingOutcome = await this.outcomeService.findExactOutcomeMatch(newOutcome);

    if (existingOutcome) {
      throw new ConflictException('The specified Outcome already exists');
    }
  }

  checkForDuplicateMapping(outcome: Outcome, newGuidelineID: string) {
    if (outcome.mappings.includes(newGuidelineID)) {
      throw new ConflictException('The specified Guideline is already mapped to the specified Outcomee');
    }
  }
}
