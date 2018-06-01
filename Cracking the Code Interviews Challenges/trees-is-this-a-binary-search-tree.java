/* Hidden stub code will pass a root argument to the function below. 
Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.  

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
public static boolean checkBST(Node root) {
	return checkBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
}

public static boolean checkBST(Node root, int minAllowed, int maxAllowed) {

	/* I did know that need use recursive calls and I that would have problems, because I are not exactly 
	a master of recursion and I needed help. I did have troubles because forgot to verify min value. */

	// Is leaf node;
	if(root == null) {
		return true;
	}
	
	// The value is allowed??
	if(root.data < minAllowed || root.data > maxAllowed) {
		return false;
	}
	
	// Checks tree both sides.
	return (checkBST(root.left, minAllowed, root.data - 1) 
			&& checkBST(root.right, root.data + 1, maxAllowed));
}