class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """

        def isValid(node, left, right):
            if not node:
                return True
            if not (node.val < right and node.val > left):
                return False

            return (isValid(node.left, left, node.val) and isValid(node.right, node.val, right))

        return isValid(root, float('-inf'), float('inf'))


root = TreeNode(5, TreeNode(1), TreeNode(7, TreeNode(6), TreeNode(8)))
sol = Solution()
print(sol.isValidBST(root))
