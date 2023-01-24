import { Field, InputType, Int, ObjectType, registerEnumType} from "type-graphql";



export enum PossibleRules {
    minSize = "minimal_size",
    minUppercase = "minimal_upper_case",
    minLowercase = "minimal_lower_case",
    minDigit = "minimal_digit",
    minSpecialChars = "minimal_special_characters",
    noRepeted = "no_repeat",
}

registerEnumType(PossibleRules, {
    name: "possibleRules",
    description: "Possible rules for the password"
})

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
    password: string;

    @Field(type => [RulesInput])
    rules: RulesInput[]
}