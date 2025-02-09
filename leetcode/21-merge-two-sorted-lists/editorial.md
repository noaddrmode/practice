Solution Article
Approach 1: Recursion

Intuition

We can recursively define the result of a merge operation on two lists as
the following (avoiding the corner case logic surrounding empty lists):

{list1[0]+merge(list1[1:],list2)list2[0]+merge(list1,list2[1:])​list1[0]<list2[0]otherwise​

Namely, the smaller of the two lists' heads plus the result of a merge on
the rest of the elements.

Algorithm

We model the above recurrence directly, first accounting for edge cases.
Specifically, if either of l1 or l2 is initially null, there is no
merge to perform, so we simply return the non-null list. Otherwise, we
determine which of l1 and l2 has a smaller head, and recursively set the
next value for that head to the next merge result. Given that both lists
are null-terminated, the recursion will eventually terminate.

javascript
```
function mergeTwoLists(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

typescript
```
function mergeTwoLists(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
```

python
```
class Solution:
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
```

go
```
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    if l1 == nil {
        return l2
    } else if l2 == nil {
        return l1
    } else if l1.Val < l2.Val {
        l1.Next = mergeTwoLists(l1.Next, l2)
        return l1
    } else {
        l2.Next = mergeTwoLists(l1, l2.Next)
        return l2
    }
}
```

c
```
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    if (l1 == NULL)
        return l2;
    else if (l2 == NULL)
        return l1;
    else if (l1->val < l2->val) {
        l1->next = mergeTwoLists(l1->next, l2);
        return l1;
    } else {
        l2->next = mergeTwoLists(l1, l2->next);
        return l2;
    }
}
```

Complexity Analysis

    Time complexity : O(n+m)

    Because each recursive call increments the pointer to l1 or l2 by one (approaching the dangling null at the end of each list), there will be exactly one call to mergeTwoLists per element in each list. Therefore, the time complexity is linear in the combined size of the lists.

    Space complexity : O(n+m)

    The first call to mergeTwoLists does not return until the ends of both l1 and l2 have been reached, so n+m stack frames consume O(n+m) space.

Approach 2: Iteration

Intuition

We can achieve the same idea via iteration by assuming that l1 is entirely
less than l2 and processing the elements one-by-one, inserting elements of
l2 in the necessary places in l1.

Algorithm

First, we set up a false "prehead" node that allows us to easily return the
head of the merged list later. We also maintain a prev pointer, which
points to the current node for which we are considering adjusting its next
pointer. Then, we do the following until at least one of l1 and l2 points
to null: if the value at l1 is less than or equal to the value at l2,
then we connect l1 to the previous node and increment l1. Otherwise, we
do the same, but for l2. Then, regardless of which list we connected, we
increment prev to keep it one step behind one of our list heads.

After the loop terminates, at most one of l1 and l2 is non-null.
Therefore (because the input lists were in sorted order), if either list is
non-null, it contains only elements greater than all of the
previously-merged elements. This means that we can simply connect the
non-null list to the merged list and return it.

To see this in action on an example, check out the animation below:

javascript
```
function mergeTwoLists(l1, l2) {
    let prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    if (l1 != null) {
        prev.next = l1;
    } else {
        prev.next = l2;
    }
    return prehead.next;
}
```

python
```
class Solution:
    def mergeTwoLists(self, l1, l2):
        # maintain an unchanging reference to node ahead of the return node.
        prehead = ListNode(-1)

        prev = prehead
        while l1 and l2:
            if l1.val <= l2.val:
                prev.next = l1
                l1 = l1.next
            else:
                prev.next = l2
                l2 = l2.next
            prev = prev.next

        # At least one of l1 and l2 can still have nodes at this point, so connect
        # the non-null list to the end of the merged list.
        prev.next = l1 if l1 is not None else l2

        return prehead.next
```

go
```
func mergeTwoLists(l1 *ListNode, l2 *ListNode) *ListNode {
    prehead := &ListNode{-1, nil}
    prev := prehead
    for l1 != nil && l2 != nil {
        if l1.Val <= l2.Val {
            prev.Next = l1
            l1 = l1.Next
        } else {
            prev.Next = l2
            l2 = l2.Next
        }
        prev = prev.Next
    }
    if l1 != nil {
        prev.Next = l1
    } else {
        prev.Next = l2
    }
    return prehead.Next
}
```

c
```
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode prehead;
    prehead.val = -1;
    struct ListNode* prev = &prehead;
    while (l1 != NULL && l2 != NULL) {
        if (l1->val <= l2->val) {
            prev->next = l1;
            l1 = l1->next;
        } else {
            prev->next = l2;
            l2 = l2->next;
        }
        prev = prev->next;
    }
    prev->next = l1 == NULL ? l2 : l1;
    return prehead.next;
}
```