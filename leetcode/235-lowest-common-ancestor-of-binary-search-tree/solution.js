/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let parent_val = root.val
    let p_val = p.val
    let q_val = q.val

    if (p_val > parent_val && q_val > parent_val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p_val < parent_val && q_val < parent_val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};


function insertIntoBST(root, val) {
    if (!root) {
        return new TreeNode(val);
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    } else {
        root.right = insertIntoBST(root.right, val);
    }
    return root;
}

function createBSTFromArray(arr) {
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            root = insertIntoBST(root, arr[i]);
        }
    }
    return root;
}

var root, p, q;
root = [6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], p = 2, q = 8
let tree = createBSTFromArray(root);

function inOrderTraversal(root) {
    if (root === null) return;
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
}

function preOrderTraversal(root) {
    if (root === null) return;
    console.log(root.val);  // Print the parent node first
    preOrderTraversal(root.left);  // Traverse the left subtree
    preOrderTraversal(root.right); // Traverse the right subtree
}

function levelOrderTraversal(root) {
    if (root === null) return;

    const queue = [root]; // Start with the root node in the queue

    while (queue.length > 0) {
        const node = queue.shift(); // Dequeue the front node
        console.log(node.val);  // Print the current node value

        if (node.left) {
            queue.push(node.left);  // Add left child to the queue
        }
        if (node.right) {
            queue.push(node.right);  // Add right child to the queue
        }
    }
}


levelOrderTraversal(tree);
