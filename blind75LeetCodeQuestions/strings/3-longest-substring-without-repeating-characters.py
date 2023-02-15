class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        unique = set()
        maxLength = 0
        left = 0

        for i in range(len(s)):
            while s[i] in unique:
                unique.remove(s[left])
                left += 1
            unique.add(s[i])
            maxLength = max(maxLength, i - left + 1)

        return maxLength
