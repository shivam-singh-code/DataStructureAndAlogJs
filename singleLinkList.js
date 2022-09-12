class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // traverse() {
    //     let current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }

    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        // let current = this.head;
        // let newHead = this.head.next;
        // this.head = newHead;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            // let current = this.head;
            // this.head = node;
            // this.head.next = current;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, value) {
        // if (index <= 0 || index >= this.length) return null;
        // let counter = 0;
        // let current = this.head;
        // while (counter !== index) {
        //     current = current.next;
        //     counter++;
        // }
        // current.val = value;
        // return current;
        let foundNode = this.get(index, value);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(val);
        if (index === 0) return !!this.unshift(val);
        let newNode = new Node(val);
        let prev = this.get(index - 1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}

var list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");
// list.push("ALo");
// list.traverse();
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.shift());
// list.shift();
// list.shift();
// list.push(300);
// list.unshift(200);
// console.log(list.get(1));
// console.log(list.set(1, "!:;"));
// console.log(list);

list.push(100);
list.push(200);
list.push(300);
list.push(400);

console.log(list.insert(0, 700));
// console.log(list.get(1));
// console.log(list);