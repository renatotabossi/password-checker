import { Arg, Query, Resolver } from "type-graphql";
import { CreateUserInput, RulesInput} from "../dto/inputs/create-user-input";
import {  UserModel } from "../dto/models/user-model";
import { validatorMap } from "../handlers/function"



@Resolver()
export class UserResolver {
    constructor() {
        
    }


    private async checkPassword(user: CreateUserInput): Promise<UserModel> {       
        const checkedPassword = []
        
        for (const rule of user.rules) {
           const isPasswordValid = validatorMap[rule.rule]({
               password: user.password,
               rules: [rule]
           })

           if (isPasswordValid === false) checkedPassword.push(rule.rule)
        }

        const returnModel: UserModel = {
            verify: checkedPassword.length > 0 ? false : true,
            noMatch: checkedPassword
        }

        return returnModel
    }

    
    @Query(() => UserModel)
    async verify(@Arg('input')data: CreateUserInput) {
       return await this.checkPassword(data)
    }
}