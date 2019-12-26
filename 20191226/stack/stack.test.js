/*
    - push 구현
    - peek 구현
    - pop 구현
*/

class Stack {
    constructor() {
        this.storage = [];
    }
    push(value) {
        // this.storage.push(value)
        this.storage[this.storage.length] = value;
        return this.storage;
    }

    pop() {
        const data = this.storage[this.storage.length - 1]
        this.storage[this.storage.length - 1] = undefined;
        return data;
    }

    peek() {
        return this.storage[this.storage.length - 1];
    }
}



test('create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
    expect(stack.storage).toEqual([]);
})
test('stack push', () => {
    const stack = new Stack();
    stack.push(1)
    expect(stack.peek()).toEqual(1);
    stack.push(2)
    expect(stack.peek()).toEqual(2);
    stack.push(3)
    expect(stack.peek()).toEqual(3);
})

test('stack pop', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(undefined);
    stack.push(1);
    expect(stack.pop()).toBe(1);
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
})

test('stack peek', () => {
    const stack = new Stack();
    expect(stack.peek()).toBe(undefined);
    stack.push(1);
    expect(stack.peek()).toBe(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    expect(stack.peek()).toBe(6);
})