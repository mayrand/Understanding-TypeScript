class ListNode<T>{
    constructor(public value: T, public next?: ListNode<T>) { }
}

class LinkedList<T>{
    private root?: ListNode<T>; // private is a typescript feature, in js Private fields are declared using #: #password = "secret";
    private length: number = 0;

    add(value: T): void { 
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
}

let list = new LinkedList();
// list.root; // Error: Property 'root' is private and only accessible within class 'LinkedList'.
list.add(1);
list.add("Hello");