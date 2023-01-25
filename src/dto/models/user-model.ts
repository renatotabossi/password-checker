import { Field, Int, ObjectType, registerEnumType } from "type-graphql";
import { PossibleRules } from "../inputs/create-user-input";

export enum PossibleNoMatch {
    minSize = "minimal_size",
    minUppercase = "minimal_upper_case",
    minLowercase = "minimal_lower_case",
    minDigit = "minimal_digit",
    minSpecialChars = "minimal_special_characters",
    noRepeted = "no_repeat",
}

registerEnumType(PossibleNoMatch, {
    name: "PossibleNoMatch",
    description: "Possible returns for the query"
})


@ObjectType()
export class UserModel{
    @Field()
    verify: boolean

    @Field(() => [PossibleNoMatch])
    noMatch: PossibleNoMatch[]
}