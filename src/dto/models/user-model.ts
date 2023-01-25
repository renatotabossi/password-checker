import { Field, Int, ObjectType, registerEnumType } from "type-graphql";
import { PossibleRules } from "../shared/rules.model";



@ObjectType()
export class UserModel{
    @Field()
    verify: boolean

    @Field(() => [PossibleRules])
    noMatch: PossibleRules[]
}