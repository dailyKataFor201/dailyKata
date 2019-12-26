/*
    - enqueue를 구현
    - dequeue를 구현
*/
class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue(value) {
        this.storage.push(value);
    }

    tail() {
        return this.storage[this.storage.length - 1];
    }

    dequeue() {
        return this.storage.shift();
    }
}
test('craete queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.storage).toEqual([]);
})

test('queue enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1)
    expect(queue.tail()).toBe(1);
    queue.enqueue(2)
    expect(queue.tail()).toBe(2);
    queue.enqueue(3)
    queue.enqueue(4)
    expect(queue.tail()).toBe(4);
});

test('queue dequeue', () => {
    const queue = new Queue();

    expect(queue.dequeue()).toBe(undefined);

    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);

    queue.enqueue(2);
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(undefined);
})
