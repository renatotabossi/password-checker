import { registerEnumType } from "type-graphql";

export enum PossibleRules {
    minSize = "minSize",
    minUppercase = "minUppercase",
    minLowercase = "minLowercase",
    minDigit = "minDigit",
    minSpecialChars = "minSpecialChars",
    noRepeted = "noRepeted"
}

registerEnumType(PossibleRules, {
    name: "possibleRules",
    description: "Possible rules for the password"
})
