class ListNode<T> {
    constructor(public value: T, public next?: ListNode<T>) { }
}

class LinkedList<T> {
    private root?: ListNode<T>; // private is a typescript feature, in js Private fields are declared using #: #password = "secret";
    private tail?: ListNode<T>;
    private length: number = 0;

    add(value: T): void {
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
            this.tail = node;
        } else {
            this.tail!.next = node; // ! is a non-null assertion operator, it tells the compiler that this value will never be null or undefined.
            this.tail = node;
        }
        this.length++;
    }

    getNumberOfNodes(): number {
        return this.length;
    }

    print() {
        let current = this.root;
        while (current) {
            console.log(current.value + " typeof " + typeof current.value);
            current = current.next;
        }
    }
}

let list = new LinkedList<number | string>(); // 
// list.root; // Error: Property 'root' is private and only accessible within class 'LinkedList'.
list.add(1);
list.add("Hello");
// list.add(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
console.log("Total nodes: " + list.getNumberOfNodes()); // Output: 2
list.print(); // Output: 1, Hello

