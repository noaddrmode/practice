function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


var height = function (root) {
    if (root === null) {
        return -1;
    }
    return 1 + Math.max(height(root.left), height(root.right));
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root === null) {
        return true;
    }

    if (Math.abs(height(root.left) - height(root.right)) > 1) {
        return false;
    } else {
        return isBalanced(root.left) && isBalanced(root.right);
    }
};

function buildTreeFromLevelOrder(arr) {
    if (!arr.length || arr[0] === null) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        let current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

let root;
let rootNode;
root = [3, 9, 20, null, null, 15, 7]
rootNode = buildTreeFromLevelOrder(root);
console.log(isBalanced(rootNode));

root = [1, 2, 2, 3, 3, null, null, 4, 4]
rootNode = buildTreeFromLevelOrder(root);
console.log(isBalanced(rootNode));

root = []
rootNode = buildTreeFromLevelOrder(root);
console.log(isBalanced(rootNode));