import { Arg, Query, Resolver } from "type-graphql";
import { CreateUserInput} from "../dto/inputs/create-user-input";

interface Validator {
    (rule: CreateUserInput): boolean
}

interface ValidatorMap {
    [key: string]: Validator
}

function minSizeFunc(rule: Partial<CreateUserInput>): boolean {
    if (rule.password.length > rule.rules[0].value) return true
    return false
  
}
function minUppercaseFunc(rule: CreateUserInput): boolean{
    const check = new RegExp(`^(?=(.*[A-Z]){${rule.rules[0].value},})`)
    return check.test(rule.password)
}
function minLowercaseFunc(rule: CreateUserInput): boolean{
    const check = new RegExp(`^(?=(.*[a-z]){${rule.rules[0].value},})`)
    return check.test(rule.password)
}
function minDigitFunc(rule: CreateUserInput): boolean{
    const check = new RegExp(`^(?=(.*[0-9]){${rule.rules[0].value},})`)
    return check.test(rule.password)
}
function minSpecialCharsFunc(rule: CreateUserInput): boolean{
    const check = new RegExp(`^(?=(.*[!@#$%^&*()\-__+.]){${rule.rules[0].value},})`)
    return check.test(rule.password)
}
function noRepetedFunc(rule: CreateUserInput): boolean{
    const charRepeats = function(str: string) {
        for (let i=0; i<str.length; i++) {
          if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
            return false; 
          }
        }
      return true;
    }
    return charRepeats(rule.password)
}


@Resolver()
export class UserResolver {
    // private async minSizeFunc(rule: Partial<RulesInput>): Promise<boolean>{
    //     console.log(rule);
        

    //     return true
    // }
    // private async minUppercaseFunc(rule: Partial<RulesInput>): Promise<boolean>{


    //     return true
    // }
    // private async minLowercaseFunc(rule: Partial<RulesInput>): Promise<boolean>{


    //     return true
    // }
    // private async minDigitFunc(rule: Partial<RulesInput>): Promise<boolean>{


    //     return true
    // }
    // private async minSpecialCharsFunc(rule: Partial<RulesInput>): Promise<boolean>{


    //     return true
    // }
    // private async noRepetedFunc(rule: Partial<RulesInput>): Promise<boolean>{


    //     return true
    // }
    
    
    private async checkPassword(user: CreateUserInput): Promise<String> {
        const validatorMap: ValidatorMap = {
            minimal_size: minSizeFunc,
            minimal_upper_case: minUppercaseFunc,
            minimal_lower_case: minLowercaseFunc,
            minimal_digit: minDigitFunc,
            minimal_special_characters: minSpecialCharsFunc,
            no_repeat: noRepetedFunc
        }
        const checkedPassword = []
        for (const rule of user.rules) {
            const isPasswordValid = validatorMap[rule.rule](user)
            
        }
        
        return "teste"
    }

    
    @Query(() => String)
    async verify(@Arg('input')data: CreateUserInput) {
        const isPasswordValid = await this.checkPassword(data)
        
        
        return "checked"
    }
}