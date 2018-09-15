'use strict';

const LinkedList = require('../lib/linkedList');

describe('linked-list.js testing', () => {
  test('Testing our linked list constructor', () => {
    const testLinkedList = new LinkedList();
    expect(testLinkedList.head).toBeNull();
  });

  test('insertAtHead - should insert node at the head', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead(99);
    expect(testLinkedList.head.value).toEqual(99);
  });
  test('insertAtHead - should insert a string at the head', () => {
    const testLinkedList = new LinkedList();
    testLinkedList.insertAtHead('s');
    expect(testLinkedList.head.value).toEqual('s');
  });
  test('should remove the Node with the entered value', () => {
    const testLinkedList = new LinkedList();

    testLinkedList.remove(5);
    expect(testLinkedList.head).toBeNull();

    testLinkedList.insertAtTail(3);
    testLinkedList.insertAtTail(4);
    testLinkedList.insertAtTail(6);
    testLinkedList.insertAtTail(8);
    expect(testLinkedList.head.value).toEqual(3);
    expect(testLinkedList.head.next.value).toEqual(4);
    expect(testLinkedList.head.next.next.value).toEqual(6);
    expect(testLinkedList.head.next.next.next.value).toEqual(8); 
  });
  test('should remove another Node with the entered value when the entered value is a string', () => {
    const testLinkedList = new LinkedList();

    testLinkedList.remove('cat');
    expect(testLinkedList.head).toBeNull();

    testLinkedList.insertAtTail('cat');
    testLinkedList.insertAtTail(7);
    testLinkedList.insertAtTail(3);
    testLinkedList.insertAtTail(2);
    expect(testLinkedList.head.next.value).toEqual(7);
    expect(testLinkedList.head.next.next.value).toEqual(3);
    expect(testLinkedList.head.next.next.next.value).toEqual(2); 
  });
});
