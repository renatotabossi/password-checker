import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { CreateUserInput, PossibleRules, RulesInput } from "../dto/inputs/create-user-input";
import {  PossibleNoMatch, UserModel } from "../dto/models/user-model";

interface Validator {
    (rule: Partial<RulesInput>): Promise<boolean>
}

interface ValidatorMap {
    [key: string]: Validator
}

@Resolver()
export class UserResolver {
    private async minSizeFunc(rule: Partial<RulesInput>): Promise<boolean>{
        console.log(rule);
        

        return true
    }
    private async minUppercaseFunc(rule: Partial<RulesInput>): Promise<boolean>{


        return true
    }
    private async minLowercaseFunc(rule: Partial<RulesInput>): Promise<boolean>{


        return true
    }
    private async minDigitFunc(rule: Partial<RulesInput>): Promise<boolean>{


        return true
    }
    private async minSpecialCharsFunc(rule: Partial<RulesInput>): Promise<boolean>{


        return true
    }
    private async noRepetedFunc(rule: Partial<RulesInput>): Promise<boolean>{


        return true
    }



    
    private async checkPassword(user: CreateUserInput): Promise<String> {
        const validatorMap: ValidatorMap = {
            minSize: this.minSizeFunc,
            minUppercase: this.minUppercaseFunc,
            minLowercase: this.minLowercaseFunc,
            minDigit: this.minDigitFunc,
            minSpecialChars: this.minSpecialCharsFunc,
            noRepeted: this.noRepetedFunc
        }
        const checkedPassword = []
        for (const rule of user.rules) {
            const isPasswordValid = validatorMap[rule.rule](rule)
            
        }
        
        return "teste"
    }

    
    @Query(() => String)
    async verify(@Arg('input')data: CreateUserInput) {
        const isPasswordValid = await this.checkPassword(data)
        
        
        return "checked"
    }
}