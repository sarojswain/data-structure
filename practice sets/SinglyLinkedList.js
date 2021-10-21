
class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
       var newNode = new Node(val); 
       if(!this.head){
         this.head = newNode;
         this.tail = this.head;
       }else{
           this.tail.next = newNode;
           this.tail = newNode;
       }
       this.length++;
       console.log(this);
       return this;
    }

    pop(){
        if(!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        console.log(current);
        return current;
    }

    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        console.log(currentHead); 
    }

    unshift(val){
       var newNode = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = this.tail;
       }else{
            newNode.next = this.head;
            this.head = newNode;
       }              
       this.length++;
       return this;
    }
    get(index){
       if(index< 0 || index > this.length) return null;
       var current = this.head;
       var counter = 0;
       while(counter !== index){
          current = current.next;
          counter++;
       }
       return current;
    }
    set(replaceValue, index){
       var res = this.get(index);
       if(res){
           res.val = replaceValue;
           return true;
       }
       return false;
    }
    insert(val, index){
       if(index < 0 || index > this.length) return false;
       if(index === 0) this.unshift();
       if(index === this.length -1) this.push();

          var newNode = new Node(val);
          var prevNode = this.get(index - 1);
          var nextNode = this.get(index);
          if(prevNode){
              prevNode.next = newNode;
              newNode.next = nextNode;
              this.length++;
              return true;
          }       
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
}

var list = new SinglyLinkedList();
list.push('hello');
list.push('Mr.');
list.push('saroj');
list.push('kumar');
list.push('swain');
// list.pop();
list.shift();

