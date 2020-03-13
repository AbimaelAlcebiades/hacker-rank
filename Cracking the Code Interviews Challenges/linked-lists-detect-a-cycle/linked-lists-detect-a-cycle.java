/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/

boolean hasCycle(Node head) {
    ArrayList < String > visitedNodes = new ArrayList < String > ();
    Node currentNode = head;
    boolean hasCycle = false;

    if (currentNode == null) {
        return hasCycle;
    }

    /* The key for solve the problem was... go through... go through...
     waiting match a "null" or a visited node. */
    while (true) {
        if (visitedNodes.contains(currentNode.toString())) {
            hasCycle = true;
            break;
        } else {
            visitedNodes.add(currentNode.toString());

            if (currentNode.next != null) {
                currentNode = currentNode.next;
            } else {
                hasCycle = false;
                break;
            }
        }
    }

    return hasCycle;
}