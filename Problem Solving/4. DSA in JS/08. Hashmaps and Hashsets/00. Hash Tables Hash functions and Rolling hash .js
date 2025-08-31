// HASH TABLES, HASH FUNCTIONS & ROLLING HASH

/*
UNDERSTANDING THE FOUNDATION:
// --------------------------------------------------------------------- ::
- Hash Function: Converts any input into a fixed-size number (hash code)
- Hash Table: Uses hash functions + arrays to store key-value pairs
- Rolling Hash: Efficient way to compute hash for sliding windows
*/

// Hash Function (Core Concept)
//     ↓
// Hash Table (Data Structure Implementation)
//     ↓
// Hash Map & Hash Set (High-level abstractions we use)


// --------------------------------------------------------------------- ::
// PART 1: HASH FUNCTIONS

/*
WHAT IS A HASH FUNCTION?
- Takes any input (string, number, object) and returns a number
- Same input always gives same output (deterministic)
- Different inputs should give different outputs (ideally)
- Should distribute values evenly across the range

PROPERTIES OF GOOD HASH FUNCTION:
1. Fast to compute
2. Uniform distribution (spreads values evenly)
3. Deterministic (same input = same output)
4. Avalanche effect (small input change = big output change)
*/

console.log("=== HASH FUNCTIONS ===");

// Simple Hash Function for Strings
function simpleStringHash(str) {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
        // Get ASCII value of character
        let char = str.charCodeAt(i);

        // Simple hash formula: hash = hash * 31 + char
        hash = hash * 31 + char;

        // Keep hash within 32-bit integer range
        hash = hash & hash; // Convert to 32-bit integer
    }

    return Math.abs(hash); // Return positive number
}

// Testing simple hash function
console.log("Hash of 'hello':", simpleStringHash("hello"));
console.log("Hash of 'world':", simpleStringHash("world"));
console.log("Hash of 'hello' again:", simpleStringHash("hello")); // Same as first!

// Better Hash Function (DJB2 Algorithm)
function djb2Hash(str) {
    let hash = 5381; // Magic number used in DJB2

    for (let i = 0; i < str.length; i++) {
        // hash = hash * 33 + char
        hash = ((hash << 5) + hash) + str.charCodeAt(i);
    }

    return Math.abs(hash);
}

console.log("DJB2 hash of 'hello':", djb2Hash("hello"));
console.log("DJB2 hash of 'world':", djb2Hash("world"));

// Hash Function for Numbers
function numberHash(num) {
    // Simple multiplication by large prime
    return Math.abs((num * 2654435761) % Math.pow(2, 32));
}

console.log("Hash of number 42:", numberHash(42));
console.log("Hash of number 123:", numberHash(123));



// --------------------------------------------------------------------- ::
// PART 2: HASH TABLES (IMPLEMENTATION)

/*
HASH TABLE IMPLEMENTATION:
- Uses an array as underlying storage
- Hash function determines which array index to use
- Handles collisions when multiple keys hash to same index

COLLISION HANDLING METHODS:
1. Chaining: Store multiple items in linked lists at each index
2. Open Addressing: Find next available slot
*/

console.log("\n=== HASH TABLE IMPLEMENTATION ===");

// Hash Table with Chaining (using arrays for collision handling)
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.table = new Array(size);

        // Initialize each slot with empty array for chaining
        for (let i = 0; i < size; i++) {
            this.table[i] = [];
        }
    }

    // Hash function to get index
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return Math.abs(hash);
    }

    // Insert key-value pair
    set(key, value) {
        let index = this._hash(key);
        let bucket = this.table[index];

        // Check if key already exists in bucket
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing key
                return;
            }
        }

        // Key doesn't exist, add new pair
        bucket.push([key, value]);
    }

    // Get value by key
    get(key) {
        let index = this._hash(key);
        let bucket = this.table[index];

        // Search in the bucket
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return undefined; // Key not found
    }

    // Delete key-value pair
    delete(key) {
        let index = this._hash(key);
        let bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the pair
                return true;
            }
        }

        return false; // Key not found
    }

    // Check if key exists
    has(key) {
        return this.get(key) !== undefined;
    }

    // Get all keys
    keys() {
        let allKeys = [];
        for (let bucket of this.table) {
            for (let pair of bucket) {
                allKeys.push(pair[0]);
            }
        }
        return allKeys;
    }

    // Get all values
    values() {
        let allValues = [];
        for (let bucket of this.table) {
            for (let pair of bucket) {
                allValues.push(pair[1]);
            }
        }
        return allValues;
    }

    // Display hash table structure
    display() {
        console.log("Hash Table Structure:");
        for (let i = 0; i < this.table.length; i++) {
            console.log(`Index ${i}:`, this.table[i]);
        }
    }
}

// Testing our Hash Table implementation
let myHashTable = new HashTable(7); // Small size to see collisions

myHashTable.set("name", "Alice");
myHashTable.set("age", "25");
myHashTable.set("city", "New York");
myHashTable.set("email", "alice@email.com");

console.log("Get name:", myHashTable.get("name")); // "Alice"
console.log("Get age:", myHashTable.get("age")); // "25"
console.log("Has city?", myHashTable.has("city")); // true
console.log("Has phone?", myHashTable.has("phone")); // false

myHashTable.display(); // See how items are distributed



// --------------------------------------------------------------------- ::
// PART 3: COLLISION HANDLING

console.log("\n=== COLLISION HANDLING ===");

/*
COLLISION TYPES:
1. CHAINING: Each slot has a list of items (what we implemented above)
2. OPEN ADDRESSING: Find next available slot
   - Linear Probing: Check next slot
   - Quadratic Probing: Check slots at quadratic distances
   - Double Hashing: Use second hash function
*/

// Hash Table with Linear Probing (Open Addressing)
class HashTableLinearProbing {
    constructor(size = 10) {
        this.size = size;
        this.keys = new Array(size);
        this.values = new Array(size);
        this.count = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * 31 + key.charCodeAt(i)) % this.size;
        }
        return Math.abs(hash);
    }

    set(key, value) {
        if (this.count >= this.size * 0.7) {
            console.log("Warning: Hash table getting full! Should resize.");
        }

        let index = this._hash(key);

        // Linear probing: find next available slot
        while (this.keys[index] !== undefined && this.keys[index] !== key) {
            index = (index + 1) % this.size; // Wrap around if needed
        }

        // If it's a new key, increment count
        if (this.keys[index] === undefined) {
            this.count++;
        }

        this.keys[index] = key;
        this.values[index] = value;
    }

    get(key) {
        let index = this._hash(key);

        // Linear probing to find the key
        while (this.keys[index] !== undefined) {
            if (this.keys[index] === key) {
                return this.values[index];
            }
            index = (index + 1) % this.size;
        }

        return undefined; // Key not found
    }

    display() {
        console.log("Linear Probing Hash Table:");
        for (let i = 0; i < this.size; i++) {
            console.log(`Index ${i}: ${this.keys[i]} -> ${this.values[i]}`);
        }
    }
}

let linearTable = new HashTableLinearProbing(7);
linearTable.set("apple", 100);
linearTable.set("banana", 200);
linearTable.set("orange", 300);

console.log("Get apple:", linearTable.get("apple"));
linearTable.display();



// --------------------------------------------------------------------- ::
// PART 4: ROLLING HASH

/*
ROLLING HASH EXPLAINED:
=======================
Used for efficiently computing hash values for sliding windows.
Instead of recalculating hash from scratch for each window,
we "roll" the hash by removing old character and adding new one.

COMMON USE CASES:
- Pattern matching in strings (Rabin-Karp algorithm)
- Finding repeated substrings
- Comparing sliding windows efficiently

TIME COMPLEXITY:
- Normal approach: O(m) for each window position → O(n*m) total
- Rolling hash: O(1) for each window position → O(n) total
Where n = text length, m = pattern length
*/

console.log("\n=== ROLLING HASH ===");

class RollingHash {
    constructor(base = 256, modulus = 101) {
        this.base = base;      // Base for polynomial hash (usually 256 for ASCII)
        this.modulus = modulus; // Large prime number to prevent overflow
    }

    // Calculate initial hash for a string
    calculateHash(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash * this.base + str.charCodeAt(i)) % this.modulus;
        }
        return hash;
    }

    // Calculate hash with precomputed power (for efficiency)
    calculateHashWithPower(str) {
        let hash = 0;
        let power = 1;

        // Calculate hash and the highest power we'll need
        for (let i = str.length - 1; i >= 0; i--) {
            hash = (hash + str.charCodeAt(i) * power) % this.modulus;
            if (i > 0) {
                power = (power * this.base) % this.modulus;
            }
        }

        return { hash, power };
    }

    // Roll the hash: remove old character, add new character
    rollHash(oldHash, oldChar, newChar, power) {
        // Remove old character: subtract old_char * base^(m-1)
        let newHash = (oldHash - oldChar.charCodeAt(0) * power) % this.modulus;

        // Shift left and add new character
        newHash = (newHash * this.base + newChar.charCodeAt(0)) % this.modulus;

        // Handle negative numbers
        return (newHash + this.modulus) % this.modulus;
    }
}

// Example: Pattern Matching using Rolling Hash (Rabin-Karp Algorithm)
function patternSearch(text, pattern) {
    if (pattern.length > text.length) return [];

    let roller = new RollingHash();
    let matches = [];

    // Calculate pattern hash
    let patternHash = roller.calculateHash(pattern);

    // Calculate initial window hash and power
    let windowResult = roller.calculateHashWithPower(text.substring(0, pattern.length));
    let windowHash = windowResult.hash;
    let power = windowResult.power;

    console.log(`Pattern "${pattern}" hash:`, patternHash);
    console.log(`Initial window "${text.substring(0, pattern.length)}" hash:`, windowHash);

    // Check first window
    if (windowHash === patternHash && text.substring(0, pattern.length) === pattern) {
        matches.push(0);
        console.log(`Match found at index 0`);
    }

    // Roll through the rest of the text
    for (let i = 1; i <= text.length - pattern.length; i++) {
        let oldChar = text[i - 1];
        let newChar = text[i + pattern.length - 1];

        // Roll the hash
        windowHash = roller.rollHash(windowHash, oldChar, newChar, power);

        let currentWindow = text.substring(i, i + pattern.length);
        console.log(`Window "${currentWindow}" hash:`, windowHash);

        // If hash matches, verify with actual string comparison
        if (windowHash === patternHash && currentWindow === pattern) {
            matches.push(i);
            console.log(`Match found at index ${i}`);
        }
    }

    return matches;
}

// Testing pattern search
let text = "abcabcabc";
let pattern = "abc";
console.log(`\nSearching for "${pattern}" in "${text}"`);
let positions = patternSearch(text, pattern);
console.log("Pattern found at positions:", positions);



// --------------------------------------------------------------------- ::
// PART 5: COMPLETE HASH TABLE IMPLEMENTATION

console.log("\n=== COMPLETE HASH TABLE WITH RESIZING ===");

class CompletHashTable {
    constructor(initialSize = 8) {
        this.size = initialSize;
        this.count = 0;
        this.buckets = new Array(this.size);

        // Initialize buckets
        for (let i = 0; i < this.size; i++) {
            this.buckets[i] = [];
        }
    }

    // Hash function
    _hash(key) {
        let hash = 0;
        let keyStr = String(key); // Convert to string

        for (let i = 0; i < keyStr.length; i++) {
            hash = (hash * 31 + keyStr.charCodeAt(i)) % this.size;
        }

        return Math.abs(hash);
    }

    // Calculate load factor
    _loadFactor() {
        return this.count / this.size;
    }

    // Resize hash table when load factor gets too high
    _resize() {
        console.log(`Resizing hash table from ${this.size} to ${this.size * 2}`);

        let oldBuckets = this.buckets;
        this.size *= 2;
        this.count = 0;
        this.buckets = new Array(this.size);

        // Initialize new buckets
        for (let i = 0; i < this.size; i++) {
            this.buckets[i] = [];
        }

        // Rehash all existing items
        for (let bucket of oldBuckets) {
            for (let [key, value] of bucket) {
                this.set(key, value);
            }
        }
    }

    // Set key-value pair
    set(key, value) {
        // Resize if load factor too high
        if (this._loadFactor() > 0.75) {
            this._resize();
        }

        let index = this._hash(key);
        let bucket = this.buckets[index];

        // Check if key already exists
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing
                return;
            }
        }

        // Add new key-value pair
        bucket.push([key, value]);
        this.count++;
    }

    // Get value by key
    get(key) {
        let index = this._hash(key);
        let bucket = this.buckets[index];

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }

        return undefined;
    }

    // Delete key
    delete(key) {
        let index = this._hash(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                this.count--;
                return true;
            }
        }

        return false;
    }

    // Check if key exists
    has(key) {
        return this.get(key) !== undefined;
    }

    // Get statistics
    getStats() {
        let totalChains = 0;
        let longestChain = 0;
        let emptyBuckets = 0;

        for (let bucket of this.buckets) {
            if (bucket.length === 0) {
                emptyBuckets++;
            } else {
                totalChains++;
                longestChain = Math.max(longestChain, bucket.length);
            }
        }

        return {
            size: this.size,
            count: this.count,
            loadFactor: this._loadFactor().toFixed(2),
            emptyBuckets,
            longestChain,
            averageChainLength: totalChains > 0 ? (this.count / totalChains).toFixed(2) : 0
        };
    }

    // Display hash table structure
    display() {
        console.log("Hash Table Structure:");
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i].length > 0) {
                console.log(`Bucket ${i}:`, this.buckets[i]);
            }
        }
        console.log("Stats:", this.getStats());
    }
}

// Testing complete hash table
let hashTable = new CompletHashTable(4); // Small size to trigger resizing

// Adding many items to see resizing in action
hashTable.set("apple", 100);
hashTable.set("banana", 200);
hashTable.set("orange", 300);
hashTable.set("grape", 400);
hashTable.set("mango", 500); // This should trigger resize

console.log("After adding items:");
hashTable.display();

console.log("\nTesting operations:");
console.log("Get apple:", hashTable.get("apple"));
console.log("Has banana?", hashTable.has("banana"));
console.log("Delete orange:", hashTable.delete("orange"));
console.log("Get orange after delete:", hashTable.get("orange"));



// --------------------------------------------------------------------- ::
// PART 6: ROLLING HASH APPLICATIONS

console.log("\n=== ROLLING HASH APPLICATIONS ===");

// Application 1: Find All Anagrams in String
function findAnagrams(text, pattern) {
    if (pattern.length > text.length) return [];

    let patternHash = 0;
    let windowHash = 0;
    let base = 26; // For lowercase letters a-z
    let matches = [];

    // Calculate hash for pattern and first window
    for (let i = 0; i < pattern.length; i++) {
        patternHash += Math.pow(base, pattern[i].charCodeAt(0) - 'a'.charCodeAt(0));
        windowHash += Math.pow(base, text[i].charCodeAt(0) - 'a'.charCodeAt(0));
    }

    console.log(`Looking for anagrams of "${pattern}" in "${text}"`);

    // Check first window
    if (patternHash === windowHash) {
        matches.push(0);
        console.log(`Anagram found at index 0: "${text.substring(0, pattern.length)}"`);
    }

    // Roll through remaining windows
    for (let i = pattern.length; i < text.length; i++) {
        // Remove old character and add new character
        let oldChar = text[i - pattern.length];
        let newChar = text[i];

        windowHash -= Math.pow(base, oldChar.charCodeAt(0) - 'a'.charCodeAt(0));
        windowHash += Math.pow(base, newChar.charCodeAt(0) - 'a'.charCodeAt(0));

        // Check if current window is anagram
        if (patternHash === windowHash) {
            let startIdx = i - pattern.length + 1;
            matches.push(startIdx);
            console.log(`Anagram found at index ${startIdx}: "${text.substring(startIdx, i + 1)}"`);
        }
    }

    return matches;
}

// Testing anagram finder
findAnagrams("abacaba", "abc"); // Should find anagrams of "abc"

// Application 2: Longest Repeating Substring
function longestRepeatingSubstring(str, k) {
    // Find longest substring with at most k distinct characters
    let left = 0;
    let maxLength = 0;
    let charCount = {};
    let distinctChars = 0;

    for (let right = 0; right < str.length; right++) {
        let rightChar = str[right];

        // Add character to window
        if (charCount[rightChar] === undefined) {
            charCount[rightChar] = 0;
            distinctChars++;
        }
        charCount[rightChar]++;

        // Shrink window if too many distinct characters
        while (distinctChars > k) {
            let leftChar = str[left];
            charCount[leftChar]--;

            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
                distinctChars--;
            }

            left++;
        }

        // Update max length
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log("\nLongest substring with at most 2 distinct chars in 'aabbcc':",
    longestRepeatingSubstring("aabbcc", 2)); // Should be 4 ("aabb" or "bbcc")



// --------------------------------------------------------------------- ::
// PART 7: HASH FUNCTION COMPARISON

console.log("\n=== HASH FUNCTION COMPARISON ===");

// Testing different hash functions for distribution
function testHashDistribution(hashFunc, strings, tableSize) {
    let distribution = new Array(tableSize).fill(0);

    for (let str of strings) {
        let index = hashFunc(str) % tableSize;
        distribution[index]++;
    }

    console.log("Distribution:", distribution);

    // Calculate standard deviation to measure uniformity
    let mean = strings.length / tableSize;
    let variance = distribution.reduce((sum, count) => sum + Math.pow(count - mean, 2), 0) / tableSize;
    let stdDev = Math.sqrt(variance);

    console.log(`Standard deviation: ${stdDev.toFixed(2)} (lower is better)`);
    return stdDev;
}

let testStrings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
let tableSize = 5;

console.log("Testing simple hash function:");
testHashDistribution(simpleStringHash, testStrings, tableSize);

console.log("\nTesting DJB2 hash function:");
testHashDistribution(djb2Hash, testStrings, tableSize);

// ================================
// PART 8: PERFORMANCE COMPARISON
// ================================

console.log("\n=== PERFORMANCE COMPARISON ===");

// Comparing hash table vs array for lookups
function performanceTest() {
    let data = [];
    let hashMap = {};

    // Create test data
    for (let i = 0; i < 1000; i++) {
        let key = `item_${i}`;
        let value = i * 2;

        data.push([key, value]);
        hashMap[key] = value;
    }

    let searchKey = "item_500";

    // Array search (linear) - O(n)
    console.time("Array Search");
    let arrayResult = data.find(([key, value]) => key === searchKey);
    console.timeEnd("Array Search");

    // Hash map search - O(1)
    console.time("Hash Map Search");
    let hashResult = hashMap[searchKey];
    console.timeEnd("Hash Map Search");

    console.log("Array result:", arrayResult);
    console.log("Hash map result:", hashResult);
    console.log("Hash map is much faster for large datasets!");
}

performanceTest();



// --------------------------------------------------------------------- ::
// COMMON INTERVIEW PROBLEMS

console.log("\n=== INTERVIEW PROBLEMS ===");

// Problem 1: Design a LRU Cache using Hash + Doubly Linked List
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map(); // Hash map for O(1) access
        // Map maintains insertion order, so we can use it for LRU
    }

    get(key) {
        if (this.cache.has(key)) {
            // Move to end (mark as recently used)
            let value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // Update existing key
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // Remove least recently used (first item)
            let firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }

    display() {
        console.log("LRU Cache contents:", Array.from(this.cache.entries()));
    }
}

// Testing LRU Cache
let lru = new LRUCache(3);
lru.put(1, "one");
lru.put(2, "two");
lru.put(3, "three");
lru.display(); // [1:"one", 2:"two", 3:"three"]

lru.get(1); // Access 1, moves to end
lru.display(); // [2:"two", 3:"three", 1:"one"]

lru.put(4, "four"); // Evicts 2 (least recently used)
lru.display(); // [3:"three", 1:"one", 4:"four"]



// --------------------------------------------------------------------- ::
// KEY CONCEPTS SUMMARY

/*
HASH FUNCTION DESIGN PRINCIPLES:
1. Fast computation
2. Good distribution (minimize collisions)
3. Deterministic output
4. Handle all input types

HASH TABLE DESIGN DECISIONS:
1. Collision handling: Chaining vs Open Addressing
2. Load factor management (when to resize)
3. Hash function choice
4. Initial size selection

ROLLING HASH BENEFITS:
1. O(1) hash updates for sliding windows
2. Efficient pattern matching
3. Substring comparison optimization
4. Used in advanced algorithms like Rabin-Karp

TIME COMPLEXITIES:
- Hash Table Operations: O(1) average, O(n) worst case
- Rolling Hash Update: O(1)
- Pattern Search with Rolling Hash: O(n + m) where n=text, m=pattern

SPACE COMPLEXITY:
- Hash Table: O(n) where n is number of elements
- Rolling Hash: O(1) additional space
*/
