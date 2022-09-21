class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head || this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;

        let poppedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count;
        let current;
        if (index <= this.length / 2) {
            console.log("working form beginning");
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
            // return current;
        } else {
            console.log("working form end");
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }
            // return current;
        }
        return current;
    }
}

let doubleLinkedList = new DoublyLinkedList();
// doubleLinkedList.push(20);
// doubleLinkedList.push(30);
// doubleLinkedList.push(40);
// let oldTail = doubleLinkedList.pop();
// console.log(oldTail.prev);
// console.log(doubleLinkedList.pop());

doubleLinkedList.push("harry");

doubleLinkedList.push("Ron");
doubleLinkedList.push("hermoine");
doubleLinkedList.push("Visily");
doubleLinkedList.push("Metonr");

// console.log(doubleLinkedList.shift());
// console.log(doubleLinkedList.shift());
// console.log(doubleLinkedList.shift());
// console.log(doubleLinkedList.shift());

// doubleLinkedList.unshift("harry");
// doubleLinkedList.unshift("potter");
console.log(doubleLinkedList.get(0));
// console.log(doubleLinkedList);