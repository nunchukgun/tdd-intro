/*
Instructions:
The size method must return the number of elements in the stack.
The push method must add elements to the end of the stack, to a maximum of ten. Throw if max size exceeded.
The pop method must remove the last element added to the stack and return it. Throw if no elements in stack.
The getStack method should return the internal stack variable.

Do not use javascript's native push and pop methods.
 */

class MyStack {
    constructor(){
        this.__stack = []
    }

    getStack(){
        return this.__stack
    }

    size(){
        return this.__stack.length
    }

    push(element){
        if(this.size() >= 10){
            throw new Error('SIZE_LIMIT_EXCEEDED')
        }

        this.__stack = [...this.__stack, element]
    }

    pop(){
        if(this.size() === 0){
            throw new Error('CANNOT_POP_EMPTY_STACK')
        }

        const lastIndex = this.size() - 1

        const lastItem = this.__stack[lastIndex]
        this.__stack = this.__stack.slice(0, lastIndex)

        return lastItem
    }
}

export default MyStack