import { IsNotEmpty, IsDefined, IsString, IsIn, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { taxonomy } from '@cyber4all/clark-taxonomy';

const verbs = {
    'remember and understand': taxonomy.taxons['remember and understand'].verbs,
    'apply and analyze': taxonomy.taxons['apply and analyze'].verbs,
    'evaluate and synthesize': taxonomy.taxons['evaluate and synthesize'].verbs,
}
export class OutcomeWriteDTO {

    @ApiProperty({
        name: 'bloom',
        description: 'Bloom\'s Taxonomy for the Learning Outcome',
        required: true,
        type: String,
        isArray: true, // Set true for Open API enum dropdown menu
        enum: ['remember and understand', 'apply and analyze', 'evaluate and synthesize'],
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsIn(['remember and understand', 'apply and analyze', 'evaluate and synthesize'])
    bloom: string;




    @ApiProperty({
        name: 'text',
        description: 'Text for the Learning Outcome',
        required: true,
        type: String,
        isArray: false,
        maxLength: 1000,
    })
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
    @IsIn(verbs[this.bloom])
    verb: string;

}