import { GuidelineDTO } from "./GuidelineReadDTO";

export class OutcomeReadDTO {
    _id: string;
    bloom: string;
    verb: string;
    text: string;
    lastUpdated: Date;
    mappings: GuidelineDTO[];
}