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

    if(p_val > parent_val && q_val > parent_val) {
        return lowestCommonAncestor(root.right, p, q);
    } else if (p_val < parent_val && q_val < parent_val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return root;
    }
};