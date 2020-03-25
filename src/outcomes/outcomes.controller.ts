import { Controller, Get, HttpCode, Post, UsePipes, ValidationPipe, Body, Patch, Delete, Param, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { ApiNoContentResponse, ApiBadRequestResponse, ApiUnauthorizedResponse, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiCreatedResponse, ApiBody, ApiConflictResponse } from '@nestjs/swagger';
import { OutcomeReadDTO } from 'src/DTO/OutcomeRead.DTO';
import { OutcomeWriteDTO } from 'src/DTO/OutcomeWrite.DTO';
import { MappingWriteDTO } from 'src/DTO/MappingWrite.DTO';
import { OutcomesService } from './outcomes.service';

import * as request from 'superagent';

@Controller()
export class OutcomesController {

  constructor(private outcomeService: OutcomesService) {}

  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({ description: 'Invalid username' })
  @ApiForbiddenResponse({ description: 'If the object is unreleased and requester is not the author || If the object is waiting, review, or proofing and the requester is not privileged' })
  @ApiNotFoundResponse({ description: 'User is not found || Learning Object is not found' })
  @Get('/users/:username/learning-objects/:learningObjectID/outcomes')
  @HttpCode(200)
  async getOutcomes(@Param('username') username: string, @Param('learningObjectID') learningObjectID: string): Promise<OutcomeReadDTO[]> {
    if (username.length > 20) {
      throw new BadRequestException('Usernames cannot contain more than 20 characters');
    }

    if (username.length < 3) {
      throw new  BadRequestException('Usernames must be at least 3 characters');
    }

    try {
      const user = await request
      .get(`http://localhost:4000/users/${username}/profile`)
      .set('Accept', 'application/json')

    } catch (error) {
      throw new NotFoundException('The specified user was not found');
    };

    try {
      const learningObject = await request
      .get(`http://localhost:5000/users/${username}/learning-objects/${learningObjectID}/outcomes`)
      .set('Accept', 'application/json')

    } catch (error) {
      if (error.status === 401) {
        throw new ForbiddenException('You do not have permission to view the reuested Learning Object');
      } else {
        throw new NotFoundException('The specified Learning Object was not found');
      }
    };
    
    const outcomes = await this.outcomeService.findAll();
    return outcomes;
  }

  @ApiCreatedResponse({ description: 'Created' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid verb || Invalid username || Invalid username'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If the Learning Object is unreleased and the requester is not the author || If the Learning Object is in waiting, review, or proofing and requester is not privileged || If the object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found'})
  @ApiBody({ type: OutcomeWriteDTO })
  @Post('/users/:username/learning-objects/:learningObjectID/outcomes')
  @UsePipes(ValidationPipe)
  @HttpCode(201)
  async addOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO): Promise<void> {
    await this.outcomeService.create(outcomeWriteDTO);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid bloom || Invalid text || Invalid verb || Invalid username || Invalid Learning Object ID || Invalid outcome ID'})
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate' })
  @ApiBody({ type: OutcomeWriteDTO })
  @Patch('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async updateOutcome(@Body() outcomeWriteDTO: OutcomeWriteDTO, @Param('username') username: string, @Param('learningObjectID') learningObjectID: string, @Param('outcomeID') outcomeID: string): Promise<void> {
    await this.outcomeService.update(outcomeWriteDTO, outcomeID);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is released || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found ||  Outcome not found' })
  @Delete('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID')
  @HttpCode(204)
  async deleteOutcome(@Param('username') username: string, @Param('learningObjectID') learningObjectID: string, @Param('outcomeID') outcomeID: string): Promise<void> {
    await this.outcomeService.delete(outcomeID);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid outcome ID || Invalid guideline ID' })
  @ApiUnauthorizedResponse({ description: 'If the requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is unreleased and requester is not the author || If Learning Object is in waiting, review, proofing and requester is not privileged || If Learning Object is released and the requester is not a mapper, editor, or admin' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Guideline not found' })
  @ApiConflictResponse({ description: 'Update would create a duplicate' })
  @ApiBody({ type: MappingWriteDTO })
  @Post('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID/mappings')
  @UsePipes(ValidationPipe)
  @HttpCode(204)
  async addMapping(@Body() mappingWriteDTO: MappingWriteDTO, @Param('username') username: string, @Param('learningObjectID') learningObjectID: string, @Param('outcomeID') outcomeID: string): Promise<void> {
    await this.outcomeService.addMapping(mappingWriteDTO.guidelineID, outcomeID);
  }

  @ApiNoContentResponse({ description: 'No Content' })
  @ApiBadRequestResponse({ description: 'Invalid username || Invalid Learning Object ID || Invalid Outcome ID || Invalid mapping ID' })
  @ApiUnauthorizedResponse({ description: 'The requester is not signed in' })
  @ApiForbiddenResponse({ description: 'If Learning Object is in waiting, review, proofing and requester is not privileged || If the Learning Object is released and the requester is not a mapper, editor, or admin || If Learning Object is unreleased and requester is not the author' })
  @ApiNotFoundResponse({ description: 'Username not found || Learning Object not found || Outcome not found || Mapping not found' })
  @Delete('/users/:username/learning-objects/:learningObjectID/outcomes/:outcomeID/mappings/:guidelineID')
  @HttpCode(204)
  async deleteMapping(@Param('username') username: string, @Param('learningObjectID') learningObjectID: string, @Param('outcomeID') outcomeID: string, @Param('guidelineID') guidelineID: string): Promise<void> {
    await this.outcomeService.deleteMapping(outcomeID, guidelineID);
  }
}
