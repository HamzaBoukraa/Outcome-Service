import { IsNotEmpty, IsDefined, IsMongoId, IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RouteParameterDTO {
    
    @ApiProperty({
        name: 'guidelineID',
        description: 'username of the User who owns the specified Learning Object',
        required: true,
        type: String,
        isArray: false,
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(20)
    username: string




    @ApiProperty({
        name: 'learningObjectID',
        description: 'ID of the specified Learning Object',
        required: true,
        type: String,
        isArray: false,
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    learningObjectID: string



    @ApiProperty({
        name: 'outcomeID',
        description: 'ID of the specified Outcome',
        required: false,
        type: String,
        isArray: false,
    })
    @IsOptional()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    outcomeID: string;



    @ApiProperty({
        name: 'guidelineID',
        description: 'ID of the specified Guideline',
        required: false,
        type: String,
        isArray: false,
    })
    @IsOptional()
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsMongoId()
    guidelineID: string

}