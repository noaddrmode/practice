Overview

Given the definition of a balanced tree
we know that a tree T is not balanced if and only if there is some node
p∈T such that ∣height(p.left)−height(p.right)∣>1.
The tree below has each node labeled by its height,
as well as the unbalanced subtree highlighted.

Approach 1: Top-down recursion
Algorithm

First we define a function height such that for any node p∈T

height(p)={−11+max(height(p.left),height(p.right))​p is an empty subtree i.e. null otherwise​

Now that we have a method for determining the height of a tree,
all that remains is to compare the height of every node's children. A tree T
rooted at r is balanced if and only if the height of its two children are within
1 of each other and the subtrees at each child are also balanced. Therefore, we can
compare the two child subtrees' heights then recurse on each one.

```
isBalanced(root):
    if (root == NULL):
        return true
    if (abs(height(root.left) - height(root.right)) > 1):
        return false
    else:
        return isBalanced(root.left) && isBalanced(root.right)
```

```javascript
// Compute the tree's height via recursion
var height = function (root) {
    // An empty tree has height -1
    if (root == null) {
        return -1;
    }
    return 1 + Math.max(height(root.left), height(root.right));
};
var isBalanced = function (root) {
    // An empty tree satisfies the definition of a balanced tree
    if (root == null) {
        return true;
    }
    // Check if subtrees have height within 1. If they do, check if the
    // subtrees are balanced
    return (
        Math.abs(height(root.left) - height(root.right)) < 2 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    );
};
```

```typescript
// Compute the tree's height via recursion
function height(root: TreeNode | null): number {
    // An empty tree has height -1
    if (!root) {
        return -1;
    }
    return 1 + Math.max(height(root.left), height(root.right));
}
function isBalanced(root: TreeNode | null): boolean {
    // An empty tree satisfies the definition of a balanced tree
    if (!root) {
        return true;
    }
    // Check if subtrees have height within 1. If they do, check if the
    // subtrees are balanced
    return (
        Math.abs(height(root.left) - height(root.right)) < 2 &&
        isBalanced(root.left) &&
        isBalanced(root.right)
    );
}
```

```python
class Solution:
    # Compute the tree's height via recursion
    def height(self, root: TreeNode) -> int:
        # An empty tree has height -1
        if not root:
            return -1
        return 1 + max(self.height(root.left), self.height(root.right))

    def isBalanced(self, root: TreeNode) -> bool:
        # An empty tree satisfies the definition of a balanced tree
        if not root:
            return True

        # Check if subtrees have height within 1. If they do, check if the
        # subtrees are balanced
        return (
            abs(self.height(root.left) - self.height(root.right)) < 2
            and self.isBalanced(root.left)
            and self.isBalanced(root.right)
        )
```

```go
// Compute the tree's height via recursion
func height(root *TreeNode) int {
    // An empty tree has height -1
    if root == nil {
        return -1
    }
    return 1 + max(height(root.Left), height(root.Right))
}

func isBalanced(root *TreeNode) bool {
    // An empty tree satisfies the definition of a balanced tree
    if root == nil {
        return true
    }
    // Check if subtrees have height within 1. If they do, check if the subtrees are balanced
    return abs(height(root.Left)-height(root.Right)) < 2 &&
        isBalanced(root.Left) &&
        isBalanced(root.Right)
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```

```C
// Compute the tree's height via recursion
int height(struct TreeNode* root) {
    // An empty tree has height -1
    if (root == NULL) {
        return -1;
    }
    return 1 + fmax(height(root->left), height(root->right));
}
bool isBalanced(struct TreeNode* root) {
    // An empty tree satisfies the definition of a balanced tree
    if (root == NULL) {
        return true;
    }
    // Check if subtrees have height within 1. If they do, check if the
    // subtrees are balanced
    return abs(height(root->left) - height(root->right)) < 2 &&
           isBalanced(root->left) && isBalanced(root->right);
}
```

Approach 2: Bottom-up recursion
Intuition

In approach 1, we perform redundant calculations when computing height.
In each call to height, we require that the subtree's heights also be
computed. Therefore, when working top down we will compute the height of a subtree
once for every parent. We can remove the redundancy by first recursing on the
children of the current node and then using their computed height to determine
whether the current node is balanced.
Algorithm

We will use the same height defined in the first approach. The
bottom-up approach is a reverse of the logic of the top-down approach
since we first check if the child subtrees are balanced before
comparing their heights. The algorithm is as follows:

    Check if the child subtrees are balanced. If they are, use their
    heights to determine if the current subtree is balanced as well as to calculate
    the current subtree's height.


```javascript
// Utility class to store information from recursive calls
class TreeInfo {
    constructor(height, balanced) {
        this.height = height;
        this.balanced = balanced;
    }
}
var isBalanced = function (root) {
    // Returns whether the tree at root is balanced, along with the tree's height.
    function isBalancedTreeHelper(root) {
        // An empty tree is balanced and has a height -1.
        if (root == null) {
            return new TreeInfo(-1, true);
        }
        // Checks whether the subtrees are balanced or not.
        const left = isBalancedTreeHelper(root.left);
        if (!left.balanced) {
            return new TreeInfo(-1, false);
        }
        const right = isBalancedTreeHelper(root.right);
        if (!right.balanced) {
            return new TreeInfo(-1, false);
        }
        // The height obtained from the recursive calls is used to determine
        // whether the current node is balanced.
        if (Math.abs(left.height - right.height) < 2) {
            return new TreeInfo(Math.max(left.height, right.height) + 1, true);
        }
        return new TreeInfo(-1, false);
    }
    return isBalancedTreeHelper(root).balanced;
};
```

Complexity Analysis

    Time complexity : O(n)

    For every subtree, we compute its height in constant time as well as
    compare the height of its children.

    Space complexity : O(n). The recursion stack may go up to O(n) if the tree is unbalanced.
