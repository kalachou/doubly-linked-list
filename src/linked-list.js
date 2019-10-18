const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        
        if (this.isEmpty()) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            const prevTail = this._tail;
            this._tail = newNode;
            newNode.prev = prevTail;
            prevTail.next = newNode;
        }
        this.length += 1;
        return this;
    }

    head() {
    	let head = null;
    	if (this._head) {
    		head = this._head.data;
    	}
        return head;
    }

    tail() {
    	let tail = null;
    	if (this._head) {
    		tail = this._tail.data;
    	}
        return tail;
    }

    at(index) {
    	let currentNode = this._head;
    	for (let i = 0; i < index; i++) {
    		currentNode = currentNode.next;
    	}
    	return currentNode.data;
    }

    insertAt(index, data) {
    	const newNode = new Node(data);
    	let currentNode = this._head;
    	for (let i = 0; i + 1 < index; i++) {
    		currentNode = currentNode.next;
    	}
    	if (currentNode) {
	    	currentNode.next.prev = newNode;
	    	newNode.prev = currentNode;
	    	newNode.next = currentNode.next;
	    	currentNode.next = newNode;    		
    	} else {
    		this._head = newNode;
    		this._tail = newNode;
    	}
    	this.length += 1;

    	return this;    	
    }

    isEmpty() {
        let isEmpty = true;
        if (this.length) {
            isEmpty = false;
        }
        return isEmpty;
    }

    clear() {
    	this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
    	let currentNode = this._head;
    	for (let i = 0; i + 1 < index; i++) {
    		currentNode = currentNode.next;
    	}
    	if (currentNode.prev) {
    	    	currentNode.prev.next = currentNode.next;
    	} else {
    		this._head = currentNode.next;
    	}
    	if (currentNode.next) {
    	    	currentNode.next.prev = currentNode.prev;
    	} else {
    		this._tail = currentNode.prev;
    	}
    	if (this.length) {
    		this.length -= 1;
    	}
    	return this;
    }

    reverse() {
    	let currentNode = this._tail;
    	this._tail = this._head;
    	this._head = currentNode;
    	let currentNodeNext = null; 
    	let currentNodePrev = null;
    	while (currentNode.prev) {
    		currentNodeNext = currentNode.next;
    		currentNodePrev = currentNode.prev
    		currentNode.next = currentNodePrev;
    		currentNode.prev = currentNodeNext;
    		currentNode = currentNodePrev;
    	} 
    	return this;
    }

    indexOf(data) {
    	let index = 0;
    	let currentNode = this._head;
    	while ((currentNode.data !== data) && (currentNode !== this._tail)) {
    		index += 1;
    		currentNode = currentNode.next;
    	}
    	if (currentNode.data !== data) {
    		index = -1;
    	}
    	return index;
    }
}

module.exports = LinkedList;
