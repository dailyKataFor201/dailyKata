/*
- 인큐
- 디큐
*/

class Queue {
    constructor() {
        this.head = undefined;
    }
    enqueue(value) {
        // if (this.head == undefined) {
        //     const node = Node;
        //     node.value = value;
        //     this.head = node;
        // }
        // else {
        //     let head = this.head;
        //     while (head.next != undefined) {
        //         head = head.next
        //     }

        //     const node = Node;
        //     node.value = value;
        //     head.next = node;
        // }
    }
    tail() {
        return 1;
    }
    size() {
        let count = 0;
        let head = this.head
        while (head != undefined) {
            head = head.next;
            count++;
        }
        return count;
    }
}

const Node = { value: undefined, next: undefined }

describe('queue is', () => {
    test('not empty', () => {
        const queue = new Queue();
        expect(queue).not.toBeNull();
    })

    test('queue enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.tail()).toBe(1);
    })

    test('get size', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.size()).toBe(1);
        queue.enqueue(1);
        expect(queue.size()).toBe(2);
    })
})

describe('Node is', () => {
    test('not empty', () => {
        expect(Node).not.toBeNull();
        expect(Node.value).toBe(undefined);
    })

    test('has value', () => {
        const node = Node;

        node.value = 4;
        expect(node.value).toBe(4);
    })

    test('has next', () => {
        const node = Node;
        node.value = 1;

        const newNode = Node;
        newNode.value = 2;

        node.next = newNode;

        expect(node.next.value).toBe(2);
    })

})

