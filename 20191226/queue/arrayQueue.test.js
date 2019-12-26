/*
    - enqueue를 구현
    - dequeue를 구현
*/
class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue(value) {
        this.storage[this.storage.length] = value;
    }
    tail() {
        return this.storage[this.storage.length - 1];
    }
    dequeue() {
        if (this.storage.length == 0) return undefined;
        const result = this.storage[0];
        this.storage = this.storage.map((_, i) => this.storage.length - 1 == i ? undefined : this.storage[i + 1])
        this.storage.splice(this.storage.length - 1, 1);
        return result;

    }
    size() {
        return this.storage.length;
    }

}
test('stack enqueue', () => {
    const queue = new Queue();
    queue.enqueue(1)
    expect(queue.tail()).toBe(1);
    expect(queue.size()).toBe(1);

    queue.enqueue(2)
    expect(queue.tail()).toBe(2);
    expect(queue.size()).toBe(2);

    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.tail()).toBe(3);
    expect(queue.size()).toBe(4);
})

test('stack dequeue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).toBe(undefined);
    queue.enqueue(1);
    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.size()).toBe(0);
})

test('getSize', () => {
    const queue = new Queue();
    expect(queue.size()).toBe(0);

    queue.enqueue(1);
    expect(queue.size()).toBe(1);

    queue.enqueue(2);
    expect(queue.size()).toBe(2);

    expect(queue.dequeue()).toBe(1);
})