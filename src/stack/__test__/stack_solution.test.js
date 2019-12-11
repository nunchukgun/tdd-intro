import MyStack from '../stack_solution'

describe.only('MyStack', () => {
    let stack

    beforeEach(() => {
        stack = new MyStack()
    })

    describe('getStack', () => {
        it('returns the private __stack variable', () => {
            stack.__stack = [1,2,3]
            const result = stack.getStack()
            const expected = [1,2,3]
    
            expect(result).toEqual(expected)
        })
    })

    describe('size', () => {
        it('returns 0 when the stack is empty', () => {
            const result = stack.size()
            expect(result).toEqual(0)
        })

        it('returns the correct length of the stack', () => {
            addNItems(stack, 7)
            const result = stack.size()
            expect(result).toEqual(7)
        })
    })

    describe('push', () => {
        it('adds an element to the stack', () => {
            const expected = [1]
            stack.push(1)
            const result = stack.getStack()
            
            expect(result).toEqual(expected)
        })

        it('throws if called on a stack of 10 or more items', () => {
            addNItems(stack, 10)

            const testFunc = () => {stack.push(9)}

            expect(testFunc).toThrow('SIZE_LIMIT_EXCEEDED')
        })
    })

    describe('pop', () => {
        it('throws if called on an empty stack', () => {
            const testFunc = () => {stack.pop()}

            expect(testFunc).toThrow('CANNOT_POP_EMPTY_STACK')
        })

        it('remove the last element of the stack and returns it', () => {
            stack.push(1)
            stack.push(2)
            stack.push(3)

            const expectedElement = 3
            const expectedStack = [1,2]

            const resultElement = stack.pop()
            const resultStack = stack.getStack()

            expect(resultElement).toEqual(expectedElement)
            expect(resultStack).toEqual(expectedStack)
        })
    })
})

const addNItems = (stack, n) => {
    for(let i = 0; i < n; i++){
        stack.push(-99)
    }
}