import { CreateUserInput} from "../dto/inputs/create-user-input";

interface Validator {
    (rule: CreateUserInput): boolean
}

interface ValidatorMap {
    [key: string]: Validator
}

function minSizeFunc(rule: Partial<CreateUserInput>): boolean {
    if (rule.password!.length! >= rule.rules![0].value) return true
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

export const validatorMap: ValidatorMap = {
    minSize: minSizeFunc,
    minUppercase: minUppercaseFunc,
    minLowercase: minLowercaseFunc,
    minDigit: minDigitFunc,
    minSpecialChars: minSpecialCharsFunc,
    noRepeted: noRepetedFunc
}