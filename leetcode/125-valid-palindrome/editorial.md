Approach 1: Compare with Reverse

Intuition

A palindrome is a word, phrase, or sequence that reads the same backwards as forwards. e.g.madam

A palindrome, and its reverse, are identical to each other.

Algorithm

We'll reverse the given string and compare it with the original. If those are equivalent, it's a palindrome.

Since only alphanumeric characters are considered, we'll filter out all other types of characters before we apply our algorithm.

Additionally, because we're treating letters as case-insensitive, we'll convert the remaining letters to lower case. The digits will be left the same.

typescript
```
function isPalindrome(s: string): boolean {
    let filteredChars = "";
    for (let ch of s) {
        if (ch.match(/[a-z0-9]/i)) {
            filteredChars += ch.toLowerCase();
        }
    }
    const reversedChars = filteredChars.split("").reverse().join("");
    return filteredChars === reversedChars;
}
```

python
```
class Solution:
    def isPalindrome(self, s: str) -> bool:

        filtered_chars = filter(lambda ch: ch.isalnum(), s)
        lowercase_filtered_chars = map(lambda ch: ch.lower(), filtered_chars)

        filtered_chars_list = list(lowercase_filtered_chars)
        reversed_chars_list = filtered_chars_list[::-1]

        return filtered_chars_list == reversed_chars_list
```

go
```
func isPalindrome(s string) bool {
    filteredChars := ""
    for _, ch := range s {
        if unicode.IsLetter(ch) || unicode.IsNumber(ch) {
            filteredChars += strings.ToLower(string(ch))
        }
    }
    reversedChars := reverseString(filteredChars)
    return filteredChars == reversedChars
}

func reverseString(s string) string {
    chars := []rune(s)
    for i, j := 0, len(chars)-1; i < j; i, j = i+1, j-1 {
        chars[i], chars[j] = chars[j], chars[i]
    }
    return string(chars)
}
```

Complexity Analysis

    Time complexity :O(n), in lengthnof the string.

    We need to iterate thrice through the string:
        When we filter out non-alphanumeric characters, and convert the remaining characters to lower-case.
        When we reverse the string.
        When we compare the original and the reversed strings.

    Each iteration runs linear in time (since each character operation completes in constant time). Thus, the effective run-time complexity is linear.

    Space complexity :O(n), in lengthnof the string. We needO(n)additional space to stored the filtered string and the reversed string.


Approach 2: Two Pointers

Intuition

If you take any ordinary string, and concatenate its reverse to it, you'll get a palindrome. This leads to an interesting insight about the converse: every palindrome half is reverse of the other half.

Simply speaking, if one were to start in the middle of a palindrome, and traverse outwards, they'd encounter the same characters, in the exact same order, in both halves!

Algorithm

Since the input string contains characters that we need to ignore in our palindromic check, it becomes tedious to figure out the real middle point of our palindromic input.

    Instead of going outwards from the middle, we could just go inwards towards the middle!

So, if we start traversing inwards, from both ends of the input string, we can expect toseethe same characters, in the same order.

The resulting algorithm is simple:

    Set two pointers, one at each end of the input string
    If the input is palindromic, both the pointers should point to equivalent characters,at all times.1
        If this condition is not met at any point of time, we break and return early.2
    We can simply ignore non-alphanumeric characters by continuing to traverse further.
    Continue traversing inwards until the pointers meet in the middle.


typescript
```
function isPalindrome(s: string) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        while (i < j && !isLetterOrDigit(s.charAt(i))) {
            i++;
        }
        while (i < j && !isLetterOrDigit(s.charAt(j))) {
            j--;
        }
        if (
            (s.charAt(i) + "").toLowerCase() !==
            (s.charAt(j) + "").toLowerCase()
        )
            return false;
        i++;
        j--;
    }
    return true;
}
function isLetterOrDigit(character: string) {
    const charCode = character.charCodeAt(0);
    return (
        (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) ||
        (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) ||
        (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0))
    );
}
```

python
```
class Solution:
    def isPalindrome(self, s: str) -> bool:

        i, j = 0, len(s) - 1

        while i < j:
            while i < j and not s[i].isalnum():
                i += 1
            while i < j and not s[j].isalnum():
                j -= 1

            if s[i].lower() != s[j].lower():
                return False

            i += 1
            j -= 1

        return True
```

go
```
func isPalindrome(s string) bool {
    i := 0
    j := len(s) - 1
    for i < j {
        for i < j && !isalnum(s[i]) {
            i++
        }
        for i < j && !isalnum(s[j]) {
            j--
        }
        if tolower(s[i]) != tolower(s[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

func isalnum(c byte) bool {
    return ('0' <= c && c <= '9') || ('a' <= c && c <= 'z') ||
        ('A' <= c && c <= 'Z')
}

func tolower(c byte) byte {
    if 'A' <= c && c <= 'Z' {
        return c - 'A' + 'a'
    }
    return c
}
```

Complexity Analysis

    Time complexity :O(n), in lengthnof the string. We traverse over each character at-most once, until the two pointers meet in the middle, or when we break and return early.

    Space complexity :O(1). No extra space required, at all.

