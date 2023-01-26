import "reflect-metadata";

import { PossibleRules } from "../src/dto/shared/rules.model"
import { UserResolver } from "../src/resolvers/user-resolver"
describe('Check for password', () => {

    const userResolver = new UserResolver()
    const testPassword = 'password123'

    test('should check password and return true', async () => {
        const testRules = [
          { 
           rule: PossibleRules.minSize,
           value: 8
          },
          { 
           rule: PossibleRules.minLowercase,
           value: 5
          }
        ]

        const checkPassword = await userResolver.verify({
            password: testPassword,
            rules: testRules
        })
        console.log(checkPassword);
        
        expect(checkPassword.verify).toBe(true)
        expect(checkPassword.noMatch).toHaveLength(0)
    })

    test('should check password and return false because of size', async () => {
        const testRules = [
          { 
           rule: PossibleRules.minSize,
           value: 12
          },
          { 
           rule: PossibleRules.minLowercase,
           value: 5
          }
        ]

        const checkPassword = await userResolver.verify({
            password: testPassword,
            rules: testRules
        })
        console.log(checkPassword);
        
        expect(checkPassword.verify).toBe(false)
        expect(checkPassword.noMatch).not.toHaveLength(0)
        expect(checkPassword.noMatch).toEqual(['minSize'])
    })

    test('should check password and return false because of size and lower case', async () => {
        const testRules = [
          { 
           rule: PossibleRules.minSize,
           value: 12
          },
          { 
           rule: PossibleRules.minLowercase,
           value: 12
          }
        ]

        const checkPassword = await userResolver.verify({
            password: testPassword,
            rules: testRules
        })
        console.log(checkPassword);
        
        expect(checkPassword.verify).toBe(false)
        expect(checkPassword.noMatch).not.toHaveLength(0)
        expect(checkPassword.noMatch).toEqual(['minSize', 'minLowercase'])
    })
    test('should check password and return false because of all checks', async () => {
        const testRules = [
          { 
           rule: PossibleRules.minSize,
           value: 12
          },
          { 
           rule: PossibleRules.minLowercase,
           value: 12
          },
          { 
           rule: PossibleRules.minDigit,
           value: 12
          },
          { 
           rule: PossibleRules.minSpecialChars,
           value: 12
          },
          { 
           rule: PossibleRules.minUppercase,
           value: 12
          },
          { 
           rule: PossibleRules.noRepeted,
           value: 12
          }
        ]

        const checkPassword = await userResolver.verify({
            password: testPassword,
            rules: testRules
        })
        console.log(checkPassword);
        
        expect(checkPassword.verify).toBe(false)
        expect(checkPassword.noMatch).not.toHaveLength(0)
        expect(checkPassword.noMatch).toEqual([ 
            'minSize',
            'minLowercase',
            'minDigit',
            'minSpecialChars',
            'minUppercase',
            'noRepeted'
        ])
    })



})