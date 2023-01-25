import { Arg, Query, Resolver } from "type-graphql";
import { CreateUserInput} from "../dto/inputs/create-user-input";
import { validatorMap } from "../handlers/function"



@Resolver()
export class UserResolver {
    constructor() {

    }
    
    private async checkPassword(user: CreateUserInput): Promise<String> {       
        const checkedPassword = []
        for (const rule of user.rules) {
            const isPasswordValid = validatorMap[rule.rule](user)
            console.log(isPasswordValid);
            
        }
        
        return "teste"
    }

    
    @Query(() => String)
    async verify(@Arg('input')data: CreateUserInput) {
        const isPasswordValid = await this.checkPassword(data)
        
        
        return "checked"
    }
}