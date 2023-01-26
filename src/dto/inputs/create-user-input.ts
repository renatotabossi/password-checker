import { Field, InputType, Int} from "type-graphql";
import { PossibleRules } from "../shared/rules.model";





@InputType()
export class RulesInput {
    @Field(type => PossibleRules)
    rule: PossibleRules

    @Field(() => Int)
    value: number
}

@InputType()
export class CreateUserInput{
    @Field()
    password: string

    @Field(type => [RulesInput])
    rules: RulesInput[]
}