const DoublyLinkedList = require("../week-8/doubly-linked-list");

// implement a least recently used cache
// 5 items can be cached [for testing purpose]
// get item should be O(1)
// set item should be O(1)

class LRUCache {
  constructor(itemToStore, itemStorageLimit = 5) {
    if (!itemToStore) {
      throw new Error("Pass key value pair");
    }

    this.itemLimit = itemStorageLimit;
    // contains item key and item value pair
    this.storage = new Map();
    this.storage.set(itemToStore.key, itemToStore.value);
    // this is doubly linked list for usage
    // most used at the tail
    // least used at the head

    this.itemUsageTracker = new DoublyLinkedList(itemToStore.key);

    // this contains item key and doubly linked list node as value
    this.keyNodeMap = new Map();
    this.keyNodeMap.set(itemToStore.key, this.itemUsageTracker.head);

    this.itemCount = 1;
  }

  print() {
    console.log("-----storage-------");
    console.log(this.storage);

    console.log("-----itemUsageTracker-------");
    console.log(this.itemUsageTracker);

    console.log("-----keyNodeMap-------");
    console.log(this.keyNodeMap);
  }

  removeLeastUsedItem() {
    // remove head node from storage
    this.storage.delete(this.itemUsageTracker.head.value);

    // remove head node from keyNodeMap
    this.keyNodeMap.delete(this.itemUsageTracker.head.value);

    // remove head node from itemUsageTracker
    this.itemUsageTracker.shift();
    this.itemCount--;
  }

  addItemKeyOnUsageTracker(itemKey) {
    this.itemUsageTracker.append(itemKey);
  }

  addItemKeyOnkeyNodeMap(itemKey) {
    this.keyNodeMap.set(itemKey, this.itemUsageTracker.tail);
  }

  addItemOnStorage(item) {
    if (!item || item.key === undefined) {
      throw new Error("Pass key value pair");
    }

    const isStorageMemoryLimitReached = this.itemCount === this.itemLimit;

    if (isStorageMemoryLimitReached) {
      this.removeLeastUsedItem();
    }

    this.storage.set(item.key, item.value);
    this.addItemKeyOnUsageTracker(item.key);
    this.addItemKeyOnkeyNodeMap(item.key);
    this.itemCount++;

    return;
  }

  getItemFromStorage(itemKey) {
    const itemValue = this.storage.get(itemKey);

    if (!itemValue) {
      return null;
    }

    const node = this.keyNodeMap.get(itemKey);
    const nextNode = node.next;
    const previousNode = node.previous;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    // beacuse we are adding one node to tail
    // size woulde increase
    this.itemUsageTracker.size--;

    this.itemUsageTracker.append(itemKey);

    // deleting old reference from keyNodeMap
    this.keyNodeMap.delete(itemKey);

    // adding new reference to keyNodeMap
    this.keyNodeMap.set(itemKey, this.itemUsageTracker.tail);

    return itemValue;
  }
}

const lruCache = new LRUCache({ key: "pixel_7", value: "60" });
lruCache.addItemOnStorage({ key: "pixel_6", value: "52" });
lruCache.addItemOnStorage({ key: "pixel_6a", value: "42" });
lruCache.addItemOnStorage({ key: "nothing_phone_1", value: "42" });
lruCache.addItemOnStorage({ key: "moto_edge_30", value: "42" });

lruCache.addItemOnStorage({ key: "s_22_sd", value: "62" });

const nothing_phone_1_value = lruCache.getItemFromStorage("nothing_phone_1");
console.log("nothing_phone_1 => ", nothing_phone_1_value);

const not_in_the_cache_value = lruCache.getItemFromStorage("not_in_the_cache");
console.log("not_in_the_cache => ", not_in_the_cache_value);

// lruCache.print();
