class ListNode{}

class LinkedList{
    private root?: ListNode; // private is a typescript feature, in js Private fields are declared using #: #password = "secret";
    private length: number = 0;
}

let list = new LinkedList();
// list.root; // Error: Property 'root' is private and only accessible within class 'LinkedList'.