class LinkedListNode(object):
    def __init__(self, value, Pnode=None, Nnode=None):
        self.value = value
        self._Pnode = Pnode
        self._Nnode = Nnode

    def append(self, n):
        if not isinstance(n, LinkedListNode):
            n = LinkedListNode(n)
        self._Nnode = n
        n._Pnode = self
        return n

    def prepend(self, n):
        if not isinstance(n, LinkedListNode):
            n = LinkedListNode(n)
        self._Pnode = n
        n._Nnode = self
        return n

    def insertBefore(self, n):
        if not isinstance(n, LinkedListNode):
            n = LinkedListNode(n)
        self._Pnode._Nnode = n
        n._Pnode = self._Pnode
        n._Nnode = self
        self._Pnode = n
        return n

    def insertAfter(self, n):
        if not isinstance(n, LinkedListNode):
            n = LinkedListNode(n)
        self._Nnode._Pnode = n
        n._Nnode = self._Nnode
        n._Pnode = self
        self._Nnode = n
        return n

    def delete(self):
        self._Pnode._Nnode = self._Nnode
        self._Nnode._Pnode = self._Pnode
        del self

    def search(self, n):
        if(self.value == n):
            return self
        else:
            flag = self._Nnode
            while flag:
                if(flag.value == n):
                    return flag
                flag = flag._Nnode
            return None

    def list(self):
        result = [self.value]
        flag = self._Nnode
        while flag:
            result.append(flag.value)
            flag = flag._Nnode
        print 'List:',result


node = LinkedListNode(6)
node.append(9)
node.prepend(3)
print node._Pnode.value, '[', node.value, ']', node._Nnode.value
# 3, [6], 9
node.insertAfter(7)
print '[', node.value, ']', node._Nnode.value, node._Nnode._Nnode.value
# [6], 7, 9
node5 = node.insertBefore(5)
print node._Pnode.value, '[', node.value, ']', node._Nnode.value
# 5, [6], 7
node5.delete()
print node._Pnode.value, '[', node.value, ']', node._Nnode.value
# 3, [6], 7
print node.search(7)._Pnode.value, node.search(7)._Nnode.value
# [6], 7, 9
node.list()
# [6], 7, 9
