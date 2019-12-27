/*
- 인큐
- 디큐
*/

class Queue {
    constructor() {
        this.head = null;
    }

    getHead(){
        return this.head;
    }
    setHead(node){
        this.head = node;
    }

    enqueue(value) {
        if (this.getHead() == null) {
            this.setHead(new Node(value));
        }
        else {
            let head = this.getHead();
            while (head.next != null) {
                head = head.next
            }
            head.setNext(new Node(value));
        }
    }

    dequeue(){
        const tmp = this.getHead();
        this.head = this.getHead().getNext();
        return tmp.getValue();
    }

    tail() {
        let head = this.getHead();
        while(head.getNext() != null) {
            head = head.getNext();
        }
        return head.getValue();
    }

    size() {
        let count = 0;
        let head = this.getHead()
        while (head != null) {
            head = head.getNext();
            count++;
        }
        return count;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    setNext(node){
        this.next = node;
    }

    getNext(){
        return this.next;
    }

    getValue(){
        return this.value;
    }
    
}
describe('queue is', () => {
    test('not empty', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
    })

    test('possible to enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.tail()).toBe(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(2);
        expect(queue.tail()).toBe(2);
        expect(queue.size()).toBe(2);
    })

    test('possible to dequeue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(0);
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        queue.enqueue(4);
        expect(queue.size()).toBe(4);
        expect(queue.dequeue()).toBe(1);
        expect(queue.size()).toBe(3);
    })

    test('possible to get size', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(2);
        expect(queue.size()).toBe(2);
    })
})

describe.skip('Node can', () => {
    
    test('not empty', () => {
        const node = new Node();
        expect(node).not.toBeNull();
        expect(node.getValue()).toBe(null);
    })


    test('has next', () => {
        const node = new Node(1);

        const newNode = new Node(2);

        node.setNext(newNode);

        expect(node.getNext().getValue()).toBe(2);
    })

})
