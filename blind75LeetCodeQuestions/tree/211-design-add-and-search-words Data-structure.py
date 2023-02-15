class TreeWord(object):
    def __init__(self):
        self.children = {}
        self.leaf = False


class WordDictionary(object):

    def __init__(self):
        self.root = TreeWord()

    def addWord(self, word):
        """
        :type word: str
        :rtype: None
        """
        cur = self.root
        for c in word:
            if c not in cur.children:
                cur.children[c] = TreeWord()
            cur = cur.children[c]
        cur.leaf = True

    def search(self, word):
        """
        :type word: str
        :rtype: bool
        """
        def dfs(j, root):
            cur = root
            for i in range(j, len(word)):
                c = word[i]
                if c == '.':
                    for child in cur.children.values():
                        if (dfs(i+1, child)):
                            return True
                    return False
                else:
                    if c not in cur.children:
                        return False
                    cur = cur.children[c]
            return cur.leaf
        return dfs(0, self.root)

# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)


wd = WordDictionary()
wd.addWord("bad")
wd.addWord("dad")
wd.addWord("mad")
wd.search("pad")  # return False
wd.search("bad")  # return True
wd.search(".ad")  # return True
wd.search("b..")  # return True
