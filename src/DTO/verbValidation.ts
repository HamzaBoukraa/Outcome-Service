import {registerDecorator, ValidationOptions, ValidationArguments} from "class-validator";
import { taxonomy } from '@cyber4all/clark-taxonomy';
const verbs = {
    'remember and understand': taxonomy.taxons['remember and understand'].verbs,
    'apply and analyze': taxonomy.taxons['apply and analyze'].verbs,
    'evaluate and synthesize': taxonomy.taxons['evaluate and synthesize'].verbs,
}
/**
 * This decorator will take the bloom and verb and validate the verb exists in the list of verbs
 * for that bloom.
 * Reference class-validator docs: https://github.com/typestack/class-validator
 * @param bloom The bloom of the outcome
 * @param validationOptions 
 */
export function IsVerbInBloom(bloom: string, validationOptions?: ValidationOptions) {
   return function (object: Record<string, any>, verb: string) {
        registerDecorator({
            name: "IsVerbInBloom",
            target: object.constructor,
            propertyName: verb,
            constraints: [bloom],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints;
                    const verb = (args.object as any)[relatedPropertyName];
                    const valid = verbs[value].includes(verb);
                    return valid;
                }
            }
        });
   };
}