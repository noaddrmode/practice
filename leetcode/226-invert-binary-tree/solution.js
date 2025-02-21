// leetcode incorrectly defined it as function instead of object
class TreeNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function insert(val, node) {
  if (val < node.val) {
    if (!node.left) {
      node.left = new TreeNode(val);
    } else {
      insert(val, node.left);
    }
  } else if (val > node.val) {
    if (!node.right) {
      node.right = new TreeNode(val);
    } else {
      insert(val, node.right);
    }
  }
}

// todo - print as the answer (implement BFS)
function printNode(node) {
  if (!node) {
    return null;
  }
  console.log(node.val);
  printNode(node.left);
  printNode(node.right);
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
};


let root;
let rootNode;

root = [4,2,7,1,3,6,9];
rootNode = new TreeNode(root[0]);

for (let i = 0; i < root.length; i++) {
  insert(root[i], rootNode);
  console.log(JSON.stringify(rootNode));
}

