import { IsNotEmpty, IsDefined, IsMongoId, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MappingWriteDTO {
    
    @ApiProperty({
        name: 'guidelineID',
        description: 'ID of the guideline that is being mapped to',
        required: true,
        type: String,
        isArray: false,
    })
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    guidelineID: string

}