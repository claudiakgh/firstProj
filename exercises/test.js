function letters(numb) {
  this.store = ["a","b","c"];
  this.joinL = joinL;
  this.add = add;
  this.numb = numb;
}
function joinL() {
  var word = this.store.join("");
  return word;
}
function add() {
  return 5;
}
var firstObj = new letters(6);

print(firstObj.joinL());

//llist example
function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}
function find(item) {
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement,item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}
function findPrevious(item) {
  var currNode = this.head;
  while(!(currNode.next==null)&&(currNode.next.element!=item)) {
    currNode = currNode.next;
  }
  return currNode;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}

var cities = new LList();
cities.insert("Con","head");
cities.insert("Manh","Con");
cities.insert("Alma","Manh");
cities.display();
cities.insert("NotCity","Alma");
cities.display();
cities.remove("NotCity");
cities.display();
cities.remove("Con");
cities.display();

//another example of linked list

function Node(element) {
  this.element = element;
  this.next = null;
}
function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.findPrevious = findPrevious;
  this.remove = remove;
}
function remove(item) {
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
function findPrevious(item) {
  var currNode = this.head;
  while((currNode.next.element != item) && !(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}
function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}
function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}

var cities = new LList();
cities.insert("Alma","head");
cities.insert("Bykft","Alma");
cities.insert("NotCity","Bykft");
cities.display();
cities.remove("NotCity");
cities.display();

//doubly linked list

function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
function LList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findLast = findLast;
  this.displReverse = displReverse;
}
function find(item) {
  var currNode = this.head;
  while(currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}
function insert(newElement,item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}
function remove(item) {
  var currNode = this.find(item);

  if(!(currNode.next == null)){
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}
function findLast() {
  var currNode = this.head;
  while(!(currNode.next == null)) {
    currNode = currNode.next;
  }
  return currNode;
}
function displReverse() {
  var currNode = this.head;
  currNode = this.findLast();
  while (!(currNode.previous == null)) {
    print(currNode.element);
    currNode = currNode.previous;
  }
}

function display() {
  var currNode = this.head;
  while (!(currNode.next == null)) {
    print(currNode.next.element);
    currNode = currNode.next;
  }
}

var cities = new LList();
cities.insert("A","head");
cities.insert("B","A");
cities.insert("C","B");
cities.insert("notC","C");
cities.display();

cities.displReverse();
cities.remove("notC");
cities.display();

//circularly linked list

// hash table
function HashTable() {
  this.table = new Array(137);
  this.simpleHash = simpleHash;
  this.showDistro = showDistro;
  this.put = put;
}
function put(data) {
  var pos = this.simpleHash(data);
  this.table[pos] = data;
}
function simpleHash(data) {
  var total = 0;
  for (var i=0; i < data.length; ++i) {
    total += data.charCodeAt(i);
  }
  return total % this.table.length;
}
function showDistro() {

  for (var i = 0; i < this.table.length; ++i) {
    if(this.table[i] != undefined) {
      print(i + ": " + this.table[i]);
    }
  }
}

var someNames = ["Dav","Alex","DANNY","Ma","Corrine","A"];
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();

function betterHash(string, arr) {
  const H = 37;
  var total = 0;
  for (var i = 0; i < string.length; ++i) {
    total += H * total + string.charCodeAt(i);
  }
  total = total % arr.length;
  return parseInt(total);
}

//stack a list like data structure

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top] = element;
  this.top++;
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top-1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}

var s = new Stack();
s.push("Dav");
s.push("Cris");
s.push("Luu");
print("Length of this stack is: " + s.length());
var popped = s.pop();
print("The popped el is: " + popped);
print(s.peek());
s.clear();
print("After clear, the length is: " + s.length());
print(s.peek());
s.push("Me");
print(s.peek());

// caz de palindrom
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top] = element;
  this.top++;
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top-1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}

function isPalindrome(word) {
  var s = new Stack();
  for(var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length()>0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  }
  else {
    return false;
  }
}

var word = "Hello";
if (isPalindrome(word)) {
  print(word + " is a palindrome");
} else {
  print(word + " is not a palindrome");
}
var word = "racecar";
if (isPalindrome(word)) {
  print(word + " is a palindrome");
} else {
  print(word + " is not a palindrome");
}

//stacks used in implementing recursion
function factorial(n) {
  if(n == 0){
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}

//simulate recursive process using a stack
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top] = element;
  this.top++;
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top-1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}
function fact(n) {
  var s = new Stack();
  while(n>1) {
    s.push(n--);
  }
  var product = 1;
  while(s.length()>0) {
    product *= s.pop();
  }
  return product;
}
print(fact(5));

//FIFO data structure queue

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}
function toString() {
  var retStr = "";
  for(var i =0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
function empty() {
  if(this.dataStore.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
var q = new Queue();
q.enqueue("Mar");
q.enqueue("Car");
q.enqueue("Var");
print(q.toString());
q.dequeue();
print(q.toString());
print("In front of queue is: " + q.front());
print("Last in queue is: " + q.back());

// dancers queue
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top] = element;
  this.top++;
}
function pop() {
  return this.dataStore[--this.top];
}
function peek() {
  return this.dataStore[this.top-1];
}
function length() {
  return this.top;
}
function clear() {
  this.top = 0;
}
function fact(n) {
  var s = new Stack();
  while(n>1) {
    s.push(n--);
  }
  var product = 1;
  while(s.length()>0) {
    product *= s.pop();
  }
  return product;
}
print(fact(5));

//FIFO data structure queue

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}
function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}
function toString() {
  var retStr = "";
  for(var i =0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}
function empty() {
  if(this.dataStore.length == 0) {
    return true;
  }
  else {
    return false;
  }
}
function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}
function getDancers(males, females) {
  var names = read("dancers.txt").split("\n");
  for(var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  for(var i = 0; i < names.length; ++i) {
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if(sex == "F") {
      females.enqueue(new Dancer(name, sex));
    }
    else {
      males.enqueue(new Dancer(name, sex));
    }
  }
}
function dance(males, females) {
  print("The dance partners are: \n");
  while(!females.empty() && !males.empty()) {
    person = females.dequeue();
    putstr("Female dancer is: ", person.name);
    person = males.dequeue();
    putstr("Male dancer is: ", person.name);
  }
  print();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

// priority queue

function Patient(name, code) {
  this.name = name;
  this.code = code;
}


//Dictionary class
function Dictionary() {
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}
function add(key, value) {
  this.dataStore[key] = value;
}
function find(key) {
  return this.dataStore[key];
}
function remove(key) {
  delete this.dataStore[key];
}
/*function showAll() {
  for (var key in this.dataStore) {
    //console.log(key + " -> " + this.dataStore[key]);
    console.log(this.dataStore[key]);
  }
}*/
function showAll() {
  var sortedKeyArr = Object.keys(this.dataStore).sort();
  for(var key in sortedKeyArr) {
    console.log(sortedKeyArr[key] + " -> " + this.dataStore[sortedKeyArr[key]]);
  }
}
function count() {
  var n = 0;
  for(var key in Object.keys(this.dataStore)) {
    n++;
  }
  return n;
}
function clear() {
  for(var key in this.dataStore) {
    delete this.dataStore[key];
  }
}


var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("Criss","444");
pbook.add("Any","213");
pbook.add("objTest", {name: "objTestName"});
pbook.add(4,"Index no.");

pbook.find("Mike");
pbook.remove("Criss");
//console.log(pbook)

//console.log(pbook.showAll())
//pbook.showAll();
pbook.count();

pbook.clear();
pbook.count();

//Set class
function Set() {
  this.dataStore = [];
  this.add = add;
  this.remove = remove;
  this.size = size;
  this.union = union;
  this.intersect = intersect;
  this.subset = subset;
  this.difference = difference;
  this.show = show;
  this.contains = contains;
}
function add(data) {
  if(this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}
function remove(data) {
  var pos = this.dataStore.indexOf(data);
  if(pos > 0) {
    this.dataStore.splice(pos,1); //changes the initial array
    return true;
  } else {
    return false;
  }
}
function show() {
  return this.dataStore;
}
function contains(data) {
  if(this.dataStore.indexOf(data) > -1) {
    return true;
  }
  else {
    return false;
  }
}
function union(set) {
  var temSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++) {
    temSet.add(this.dataStore[i]);
  }
  for(var i = 0; i < set.dataStore.length; i++) {
    if(!temSet.contains(set.dataStore[i])) {
      temSet.dataStore.push(set.dataStore[i]);
    }
  }
  return temSet;
}
/*function intersect(set) {
  var tempSet = new Set();
  for(var i = 0; i < set.dataStore.length; i++) {
    for(var j = 0; j < this.dataStore.length; j++) {
      if(this.contains(set.dataStore[i])) {
        tempSet.add(set.dataStore[i]);
      }
    }
  }
  return tempSet;
}*/
function intersect(set) {
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++) {
    if(set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}
function size() {
  return this.dataStore.length;
}
function subset(set) {
  if(this.size() < set.size()) {
    for(var i = 0; i < this.dataStore.length; i++) {
      if(!set.contains(this.dataStore[i])) {
        console.log('The checked set is not a subset of the main set');
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function difference(set) {
  var tempSet = new Set();
  for(var i = 0; i < this.dataStore.length; i++) {
    if(!set.contains(this.dataStore[i])) {
      tempSet.add(this.dataStore[i]);
    }
  }
  return tempSet;
}

var set1 = new Set();
set1.add("Mike");
set1.add("George");
set1.add("Criss");
set1.add("John");

var set2 = new Set();
set2.add("Mike");
set2.add("George2");

var diffMembSet = new Set();
diffMembSet = set1.difference(set2);

set1.subset(set2);
set2.subset(set1);

var names = new Set();
names.add("Mike");
names.add("George");
names.add("Criss");
names.add("John");

var names2 = new Set();
names2.add("Mike2");
names2.add("George2");
names2.add("Criss");
names2.add("John");
var namesBig = new Set();
//namesBig = names.union(names2);
//namesBig.show();
var intersSet = new Set();
intersSet = names.intersect(names2);

var names = new Set();
names.add("Mike");
names.add("George3");
names.add("Criss");
names.add("John");

var names2 = new Set();
names2.add("Mike2");
names2.add("George3");
names2.add("Criss");
names2.add("John");
intersSet = names2.intersect(names);

if(names.add("Mike")) {
  console.log("Mike has been added");
}
else {
  console.log("Error adding Mike, already exists");
}
console.log(names.show());
var removed = "Criss";
if(names.remove(removed)) {
  console.log(removed + " has been removed");
}
else {
  console.log(removed + " has Not been removed, as it does not exist in list");
}
names.show();

//Binary tree
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}
function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
  this.getMin = getMin;
  this.getMax = getMax;
  this.find = find;
}
function insert(data) {
  var n = new Node(data, null, null);
  if(this.root == null) {
    this.root = n;
  }
  else {
    var current = this.root;
    var parent;
    while(true) {
      parent = current;
      if(data < current.data) {
        current = current.left;
        if(current == null) {
          parent.left = n;
          break;
        }
      }
      else {
        current = current.right;
        if(current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}
function inOrder(node) {
  if(!(node == null)) {
    inOrder(node.left);
    console.log(node.show() + " ");
    inOrder(node.right);
  }
}
function getMin() {
  var current = this.root;
  while(!(current.left == null)) {
    current = current.left;
  }
  return current.data;
}
function getMax() {
  var current = this.root;
  while(!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}

function find(data) {
  var current = this.root;
  while(current.data != data) {
    if(data < current.data) {
      current = current.left;
    }
    else {
      current = current.right;
    }
    if(current == null) {
      return null;
    }
  }
  return current;
}

var nums = new BST();
nums.insert(23);
nums.insert(2);
nums.insert(40);
nums.insert(13);
nums.insert(77);
nums.insert(32);
inOrder(nums.root);
nums.find(13);
nums.find(4);

function remove(data) {
  root = removeNode(this.root, data);
}
function removeNode(node, data) {
  if(node == null) {
    return null;
  }
  if(data == node.data) {
    if(node.left == null && node.right == null) {
      return null;
    }
    if(node.left == null) {
      return node.right;
    }
    if(node.right == null) {
      return node.left;
    }

    var tempNode = getSmallest(node.right);
    node.data = tempNode.data;
    node.right = removeNode(node.right, tempNode.data);
    return node;
  }
  else if (data < node.data) {
    node.left = removeNode(node.left, data);
    return node;
  }
  else {
    node.right = removeNode(node.right, data);
    return node;
  }
}

// Sorting algorithms
function CArray(numElements) {
  this.dataStore = [];
  this.pos = 0;
  this.numElements = numElements;
  this.insert = insert;
  this.toString = toString;
  this.clear = clear;
  this.setData = setData;
  this.swap = swap;
  this.bubbleSort = bubbleSort;
  this.gaps = [5, 3, 1];
  this.shellsort = shellsort;

  for(var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = i;
  }
}
function setData() {
  for(var i = 0; i < this.numElements; i++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
  }
}
function clear() {
  for(var i = 0; i < this.dataStore.length; i++) {
    this.dataStore[i] = 0;
  }
}
function insert(element) {
  this.dataStore[this.pos++] = element;
}
function toString() {
  var retstr = "";
  for (var i = 0; i < this.dataStore.length; i++) {
    retstr += this.dataStore[i] + " ";
    if(i > 0 &&  i % 10 == 0) {
      retstr += "\n";
    }
  }
  return retstr;
}
function swap(arr, index1, index2) {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort() {
  var numElements = this.dataStore.length;
  var temp;
  for(var outer = numElements; outer >=2; --outer) {
    for(var inner = 0; inner <= outer-1; ++inner) {
      if(this.dataStore[inner] > this.dataStore[inner+1]) {
        swap(this.dataStore, inner, inner+1);
      }
    }
    console.log(this.toString());
  }
}
function setGaps(arr) {
  this.gaps = arr;
}
//Shellsort algotithm

function shellsort() {
  for(var g = 0; g < this.gaps.length; g++) {
    for(var i = this.gaps[g]; i < this.dataStore.length; i++) {
      var temp = this.dataStore[i];
      for(var j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j-= this.gaps[g]) {
        this.dataStore[j] = this.dataStore[j - this.gaps[g]];
      }
      this.dataStore[j] = temp;
    }
    console.log(this.dataStore);
  }
}

var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());
myNums.bubbleSort();
console.log(myNums.toString());


function insertionSort() {
  var temp, inner;

  for(var outer = 1; outer < this.dataStore.length; outer++) {
    temp = this.dataStore[outer];
    inner = outer;
    while((inner > 0) && (this.dataStore[inner-1] >= temp)){
      this.dataStore[inner] = this.dataStore[inner-1];
      --inner;
    }
    this.dataStore[inner] = temp;
  }
}

var mynums = new CArray(10);
mynums.setData();
console.log("Before Shellsort: \n");
console.log(mynums.toString());
console.log("During Shellsort: \n");
mynums.shellsort();

console.log("After Shellsort: \n" + mynums.toString());

//Quicksort algorithms
function qSort(arr) {
  if(arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}
var myArr = [];
for( var i = 0; i < 100000; i++) {
  myArr[i] = Math.floor((Math.random() * 10000) + 1);
}
//console.log(myArr);
start = new Date().getTime();
console.log(qSort(myArr));
stop = new Date().getTime();
var ms = stop - start;
console.log("It took: " + ms);

// Sequential search or linear search (less important or good as Array.indexOf())
function seqSearch(arr, data) {
  for(var i = 0; i < arr.length; ++i) {
    if(arr[i] == data) {
      return i; // return i;
    }
  }
  return -1;
}
function dispArr(arr) {
  for(var i = 0; i < arr.length; ++i) {
    putstr(arr[i] + " ");
    if(i % 10 == 9) {
      putstr("\n");
    }
  }
  /*if(i % 10 != 0) {
    putstr("\n");
  }*/
}

var nums = [];
for(var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

putstr("Enter a nr to search for: ");
var num = parseInt(readline());
print();
if(seqSearch(nums, num)) {
  print(num + " is in the array");
} else {
  print(num + " is not in the array");
}

var position = seqSearch(nums, num);
if(position >= 0) {
  print(num + " is in the array at position " + position);
} else {
  print(num + " is not in the array");
}
nums.indexOf(51);
nums.indexOf(100);

//searching through an unordered
function findMin(arr) {
  var min = arr[0];
  for(var i = 1; i < arr.length; ++i) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

var nums = [];
for(var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
var minVal = findMin(nums);
dispArr(nums);
print("The min value is: " + minVal);

//self-organized data
function swap(arr, index, index1) {
  temp = arr[index];
  arr[index] = arr[index1];
  arr[index1] = temp;
}
function seqSearch(arr, data) {
  for(var i = 0; i < arr.length; ++i) {
    if(arr[i] == data) {
      if(i > 0) {
        swap(arr, i, i-1);
      }
      return true;
    }
  }
  return false;
}

//Binary search algorith
function binSearch(arr, data) {
  var upperBound = arr.length-1;
  var lowerBound = 0;
  while(lowerBound <= upperBound) {
    var mid = Math.floor((upperBound + lowerBound) / 2);
    if(arr[mid] < data) {
      lowerBound = mid + 1;
    } else if(arr[mid] > data) {
      upperBound = mid - 1;
    }
    else {
      return mid;
    }
  }
//  return -1; // maybe not necessary?
}

var nums = [];
for(var i = 0; i < 100; ++i) {
  nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
insertionSort(nums);
var looked = 100;
var position = binSearch(nums, looked);
if(position > -1) {
  console.log(looked + " is found at position " + position);
} else {
  console.log(looked + " is not found");
}

function insertionSort(arr) {
  var temp, inner;

  for(var outer = 1; outer < arr.length; outer++) {
    temp = arr[outer];
    inner = outer;
    while((inner > 0) && (arr[inner-1] >= temp)){
      arr[inner] = arr[inner-1];
      --inner;
    }
    arr[inner] = temp;
  }
}

function count(arr, data) {
  var count = 0;
  var position = binSearch(arr, data);
  if(position>-1) {
    ++count;
    for(var i = position-1; i > 0; --i) {
      if(arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
    for(var i = position+1; i < arr.length; ++i) {
      if(arr[i] == data) {
        ++count;
      } else {
        break;
      }
    }
  }
  return count;
}
count(nums,72);
count(nums,100);

//searching for text not numbers
function seqSearch(arr, data) {
  for(var i = 0; i < arr.length; ++i) {
    if(arr[i] == data) {
      return i;
    }
  }
  return -1;
}
var words = read("text1.txt").split(" "); //C:\Users\claudiak\Desktop\my1stproj\exercisess
var word = "text";
var position = seqSearch(words, word);
if(position > -1) {
  console.log(word + " was found at the position" + position);
} else {
  console.log(word + " was not found");
}

// from scope tutorial
var listItems = document.querySelectorAll("ul li");
for(var i = 0; i < listItems.length; i++) {
  (function() {
    console.log("this.innerHTML");
  }).call(listItems[i]);
}

var x = "outside";

var f1 = function() {
  var x = "inside f1";
  return x;
};
console.log(f1());
console.log(x);

// http://eloquentjavascript.net/03_functions.html exercises
function min(val1, val2) {
  if(val1 < val2) {
    return val1;
  }
  return val2;
}
var x, y;
x = 2;
y = 9;
console.log("The minimum of: " + x + " and " + y + " is: " + min(x, y));

function isEven(num) {
  if (num == 0) {
    return true;
  }
  else if (Math.abs(num) == 1) {
    return false;
  } else {
    return isEven(Math.abs(num)-2);
  }
}

var mynum;
mynum = -4;
console.log("The affirmation that " + mynum + " is even is: " + isEven(mynum));

function countBs(str) {
  var countB = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === "B") {
      countB++;
    }
  }
  return countB;
}

var mystr;
mystr = "The bees are Bees";
console.log("The sentence: " + mystr + " has " + countBs(mystr) + "Bs");

function countChar(str, lett) {
  var countCh = 0;
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) === lett) {
      countCh++;
    }
  }
  return countCh;
}

var mystr;
mystr = "The bees are Bees";
letter = "e";
console.log("The sentence: " + mystr + " has " + countChar(mystr, letter) + "times the letter " + letter);

// Immediately Invoked Function Expression - function creates new scope and "privacy" and return only the parts that we need
(function() {

})();


// egghead learn ES6
var arrowGreeting = (message, name) => message + name;
arrowGreeting("Happy Bday", " Tom");
console.log(arrowGreeting);
console.log(arrowGreeting("Happy Bday", " Jess"));

var arrowGreet = message => message;
arrowGreet("Bye");
console.log(arrowGreet);

//let and var
var fs = [];
for(var i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}
console.log(fs);
fs.forEach(function (f) {
  f();
});

var fs = [];
for(let i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}
console.log(fs);
fs.forEach(function (f) {
  f();
});

var myArr = [7];
var someArr = [1, 2, 3];
myArr.push(someArr);
console.log(myArr[3]);
console.log(myArr[1]);
var otherArr = ["a", "b", "v"];
myArr = [7];
myArr.push(...otherArr);
console.log(myArr.length);
console.log(myArr[3]);
var result = [];
result.push(myArr.forEach(function(element) {
  element = element + " some added text";
  return element;
}));
console.log(result);
console.log(myArr.length);
console.log(myArr);


var result = [];
var otherArr = ["a", "b", "v"];
var addText = function(element, index, array) {
  element = element + " some added text";

  result.push(element);
  array[index] = element + " Other text";
  console.log(element);
};
otherArr.forEach(addText);
console.log(otherArr);
console.log(result);

//
var myObj = {
  name: "Clark",
  age: "40",
  gender: "male"
};
var {name, gender: sex} = myObj;
console.log(sex);

var [a,,,b] = [1,2,3,4];
console.log(b);

var persons = [
  {
    name: "Brandon",
    location: "Vermont",
    email: "afsd@ffff"
  },
  {
    name: "Mike",
    location: "LA",
    email: "afsd@ffff"
  },
  {
    name: "Lena",
    location: "Canda",
    email: "afsd@ffff"
  },
];
persons.forEach(({name})=>console.log(name));
var [,Mike] = persons;
function logEmail({email}) {
  console.log(email);
}
logEmail(Mike);
