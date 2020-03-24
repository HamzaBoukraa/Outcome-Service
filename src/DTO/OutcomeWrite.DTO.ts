import { IsNotEmpty, IsDefined, IsString, IsIn, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OutcomeWriteDTO {

    @ApiProperty({
        name: 'bloom',
        description: 'Bloom\'s Taxonomy for the Learning Outcome',
        required: true,
        type: String,
        isArray: true, // Set true for Open API enum dropdown menu
        enum: ['remember & understand', 'apply & analyze', 'evaluate & synthesize'],
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsIn(['remember & understand', 'apply & analyze', 'evaluate & synthesize'])
    bloom: string;




    @ApiProperty({
        name: 'text',
        description: 'Text for the Learning Outcome',
        required: true,
        type: String,
        isArray: false,
        maxLength: 1000,
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @MaxLength(1000)
    text: string;
 



    @ApiProperty({
        name: 'verb',
        description: 'Verb within given Bloom\'s Taxonomy for the Learning Outcome',
        required: true,
        type: String,
        isArray: false,
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    verb: string; // TODO: required, must be a verb within the list for the selected bloom

}