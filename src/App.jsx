import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <div className="data-structures-section">
          <h1>List of all Data Structure for Revision</h1>
          <div className="primitive-data-structures">
            <h2>Primitive Data Structures</h2>
            <p>Basic built-in data types.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Integer</td>
                    <td>Stores whole numbers</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Float / Double</td>
                    <td>Stores decimal numbers</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Character</td>
                    <td>Stores single characters</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Boolean</td>
                    <td>Stores true/false values</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Pointer</td>
                    <td>Stores memory addresses</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="linear-data-structures">
            <h2>Linear Data Structures</h2>
            <p>Elements are arranged sequentially.</p>
            <h3>Arrays</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Array</td>
                    <td>Fixed-size collection of elements of the same type</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Dynamic Array</td>
                    <td>Resizable array (e.g., ArrayList, Vector)</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Jagged Array</td>
                    <td>Array of arrays with different lengths</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Linked Lists</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Singly Linked List</td>
                    <td>Each node points to the next node</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Doubly Linked List</td>
                    <td>Nodes point to both next and previous nodes</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Circular Linked List</td>
                    <td> Last node points back to the first node</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Stack</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Stack</td>
                    <td>LIFO (Last In, First Out) structure</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Queue</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Queue</td>
                    <td>FIFO (First In, First Out)</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Circular Queue</td>
                    <td>Queue with circular connection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Deque (Double-Ended Queue)</td>
                    <td>Insert/remove from both ends</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Priority Queue</td>
                    <td>Elements served by priority</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="hash-based-data-structures">
            <h2>Hash-Based Data Structures</h2>
            <p>Data structures that use hash functions for indexing.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hash Table</td>
                    <td>Key-value storage with fast lookup</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Hash Map</td>
                    <td>Maps keys to values</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Hash Set</td>
                    <td>Stores unique values only</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="tree-data-structures">
            <h2>Tree Data Structures</h2>
            <p>Hierarchical structures with parent-child relationships.</p>
            <h3>General Trees</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tree</td>
                    <td>General hierarchical structure</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Binary Tree</td>
                    <td>Each node has at most two children</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Binary Search Trees</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Binary Search Tree (BST)</td>
                    <td> Left - Root - Right</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>AVL Tree</td>
                    <td>Self-balancing BST</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Red-Black Tree</td>
                    <td>Balanced BST with color rules</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Splay Tree</td>
                    <td>Self-adjusting BST</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Specialized Trees</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Heap</td>
                    <td>Complete binary tree (Min-Heap / Max-Heap)</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Trie (Prefix Tree)</td>
                    <td>Efficient string storage/search</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>B-Tree</td>
                    <td>Balanced tree for databases</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>B+ Tree</td>
                    <td>Optimized B-tree for disk access</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Segment Tree</td>
                    <td>Range query structure</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Fenwick Tree (Binary Indexed Tree)</td>
                    <td>Efficient prefix sums</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="graph-data-structures">
            <h2>Graph Data Structures</h2>
            <p>Structures to represent networks of nodes and edges.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Graph</td>
                    <td>Collection of nodes (vertices) and edges</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Directed Graph (Digraph)</td>
                    <td>Edges have a direction</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Undirected Graph</td>
                    <td>Edges have no direction</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Weighted Graph</td>
                    <td>Edges have weights/costs</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Adjacency Matrix</td>
                    <td>2D array representation of a graph</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Adjacency List</td>
                    <td>List of lists representation of a graph</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="set-map-structures">
            <h2>Set and Map Structures</h2>
            <p>Collections with unique or key-based access.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Set</td>
                    <td>Collection of unique elements</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Multiset</td>
                    <td>Allows duplicate elements</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Map / Dictionary</td>
                    <td>Key-value pairs</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Ordered Map</td>
                    <td>Keys stored in sorted order</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="algorithms-section">
          <h1>List of Algorithms for Revision</h1>
          <div className="searching-algorithms">
            <h2>Searching Algorithms</h2>
            <p>Used to find elements in data</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Linear Search</td>
                    <td>Sequentially checks each element</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Binary Search</td>
                    <td>Divides sorted data to find element</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Jump Search</td>
                    <td>Jumps ahead by fixed steps to find element</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Interpolation Search</td>
                    <td>Estimates position based on value</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Exponential Search</td>
                    <td>Finds range then performs binary search</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Fibonacci Search</td>
                    <td>Uses Fibonacci numbers to divide array</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="sorting-algorithms">
            <h2>Sorting Algorithms</h2>
            <p>Arrange data in a specific order.</p>
            <h3>Comparison-Based Sorting</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bubble Sort</td>
                    <td>Repeatedly swaps adjacent elements</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Selection Sort</td>
                    <td>Selects smallest element repeatedly</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Insertion Sort</td>
                    <td>Inserts elements into sorted position</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Merge Sort</td>
                    <td>Divide-and-conquer, stable sort</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Quick Sort</td>
                    <td>Partition-based divide-and-conquer</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Heap Sort</td>
                    <td>Uses heap data structure</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tim Sort</td>
                    <td>Hybrid of merge and insertion sort</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Non-Comparison Sorting</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Counting Sort</td>
                    <td>Counts occurrences of elements</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Radix Sort</td>
                    <td>Sorts digit by digit</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Bucket Sort</td>
                    <td>Distributes elements into buckets</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="divide-and-conquer-algorithms">
            <h2>Divide and Conquer Algorithms</h2>
            <p>Break problems into smaller subproblems.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Merge Sort</td>
                    <td>Divide array and merge sorted halves</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Quick Sort</td>
                    <td>Partition and sort recursively</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Binary Search</td>
                    <td>Repeated halving</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Strassen’s Matrix Multiplication</td>
                    <td>Faster matrix multiplication</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Karatsuba Algorithm</td>
                    <td>Fast multiplication of large numbers</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="greedy-algorithms">
            <h2>Greedy Algorithms</h2>
            <p>Choose best option at each step.</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Algorithm</th>
                    <th>Description</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Kruskal's Algorithm</td>
                    <td>Minimum Spanning Tree</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Prim's Algorithm</td>
                    <td>Minimum Spanning Tree</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Dijkstra's Algorithm</td>
                    <td>Shortest path (non-negative weights)</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Huffman Coding</td>
                    <td>Optimal prefix codes</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Activity Selection</td>
                    <td>Maximum number of non-overlapping activities</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Fractional Knapsack</td>
                    <td>Maximize value with fractions</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
