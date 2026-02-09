import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <nav class="navbar">
          <div class="logo">DSA</div>
          <ul class="nav-links">
            <li class="dropdown">
              <a href="#data-structures-section" class="dropbtn">Data Structures</a>
              <div class="dropdown-content">
                <a href="#primitive-data-structures">Primitive Data Structures</a>
                <a href="#linear-data-structures">Linear Data Structures</a>
                <a href="#hash-based-data-structures">Hash Based Data Structures</a>
                <a href="#tree-data-structures">Tree Data Structures</a>
                <a href="#graph-data-structures">Graph Data Structures</a>
                <a href="#set-map-structures">Set Map Structures</a>
              </div>
            </li>
            <li class="dropdown">
              <a href="#algorithms-section" class="dropbtn">Algorithms</a>
              <div class="dropdown-content">
                <a href="#searching-algorithms">Searching Algorithms</a>
                <a href="#sorting-algorithms">Sorting Algorithms</a>
              </div>
            </li>
          </ul>
        </nav>
        <div id="data-structures-section">
          <h1>List of all Data Structure for Revision</h1>
          <div id="primitive-data-structures">
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
          <div id="linear-data-structures">
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
          <div id="hash-based-data-structures">
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
          <div id="tree-data-structures">
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
          <div id="graph-data-structures">
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
          <div id="set-map-structures">
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

        <div id="algorithms-section">
          <h1>List of Algorithms for Revision</h1>
          <div id="searching-algorithms">
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
          <div id="sorting-algorithms">
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
          <div id="divide-and-conquer-algorithms">
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
          <div id="greedy-algorithms">
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
          <div id="dynamic-programming-algorithms">
            <h2>Dynamic Programming Algorithms</h2>
            <p>Solve overlapping subproblems efficiently.</p>
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
                    <td>Fibonacci (DP)</td>
                    <td>Optimized recursion</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Knapsack (0/1)</td>
                    <td>Optimal subset selection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Longest Common Subsequence (LCS)</td>
                    <td>Common subsequence</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Longest Increasing Subsequence (LIS)</td>
                    <td>Increasing order subsequence</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Matrix Chain Multiplication</td>
                    <td>Optimal multiplication order</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Edit Distance</td>
                    <td>String transformation cost</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Coin Change</td>
                    <td>Minimum coins for amount</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="backtracking-algorithms">
            <h2>Backtracking Algorithms</h2>
            <p>Try all possibilities with pruning.</p>
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
                    <td>N-Queens Problem</td>
                    <td>Place queens safely</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sudoku Solver</td>
                    <td>Fill grid under constraints</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Rat in a Maze</td>
                    <td>Path finding</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Permutation Generation</td>
                    <td>All permutations</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Combination Generation</td>
                    <td>All combinations</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="graph-algorithms">
            <h2>Graph Algorithms</h2>
            <p>Used for network-based problems.</p>
            <h3>Traversal</h3>
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
                    <td>Breadth-First Search (BFS)</td>
                    <td>Level-order traversal</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Depth-First Search (DFS)</td>
                    <td>Depth traversal</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Shortest Path</h3>
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
                    <td>Dijkstra's Algorithm</td>
                    <td>Non-negative weights</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Bellman-Ford Algorithm</td>
                    <td>Handles negative weights</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Floyd-Warshall Algorithm</td>
                    <td>All-pairs shortest path</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>A*</td>
                    <td>Heuristic-based pathfinding</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Spanning Tree</h3>
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
                    <td>Edge-based MST</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Prim's Algorithm</td>
                    <td>Vertex-based MST</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>Connectivity & Cycles</h3>
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
                    <td>Topological Sort</td>
                    <td>Ordering in DAG</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Tarjan's Algorithm</td>
                    <td>Strongly connected components</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Kosaraju's Algorithm</td>
                    <td>SCC detection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Union-Find Algorithm</td>
                    <td>Cycle detection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="string-algorithms">
            <h2>String Algorithms</h2>
            <p>Text processing and pattern matching.</p>
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
                    <td>Naive Pattern Matching</td>
                    <td>Simple character comparison</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>KMP Algorithm</td>
                    <td>Prefix-based pattern matching</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Rabin-Karp Algorithm</td>
                    <td>Hash-based matching</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Boyer-Moore Algorithm</td>
                    <td>Right-to-left matching</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Z Algorithm</td>
                    <td>Pattern matching using Z-array</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Aho-Corasick Algorithm</td>
                    <td>Multi-pattern matching</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="mathematical-algorithms">
            <h2>Mathematical Algorithms</h2>
            <p>Solve numerical problems.</p>
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
                    <td>Euclidean Algorithm</td>
                    <td>GCD computation</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Extended Euclidean Algorithm</td>
                    <td>GCD + coefficients</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Sieve of Eratosthenes</td>
                    <td>Prime number generation</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Fast Exponentiation</td>
                    <td>Power in logarithmic time</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Modular Arithmetic Algorithms</td>
                    <td>Modular operations</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="randomized-algorithms">
            <h2>Randomized Algorithms</h2>
            <p>Use randomness for efficiency.</p>
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
                    <td>Randomized Quick Sort</td>
                    <td>Random pivot selection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Monte Carlo Algorithm</td>
                    <td>Probabilistic correctness</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Las Vegas Algorithm</td>
                    <td>Always correct, variable runtime</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Reservoir Sampling</td>
                    <td>Random sampling from stream</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="approximation-algorithms">
            <h2>Approximation Algorithms</h2>
            <p>Near-optimal solutions for NP-hard problems.</p>
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
                    <td>Vertex Cover Approximation</td>
                    <td>Near-minimum vertex cover</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Traveling Salesman Approximation</td>
                    <td>Near-optimal tour</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Set Cover Approximation</td>
                    <td>Greedy cover selection</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="cryptographic-algorithms">
            <h2>Cryptographic Algorithms</h2>
            <p>Security and encryption.</p>
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
                    <td>AES</td>
                    <td>Symmetric encryption</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>RSA</td>
                    <td>Asymmetric encryption</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>SHA</td>
                    <td>Hashing algorithm</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Diffie-Hellman</td>
                    <td>Secure key exchange</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>ECC</td>
                    <td>Elliptic Curve Cryptography</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="compression-algorithms">
            <h2>Compression Algorithms</h2>
            <p>Reduce data size.</p>
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
                    <td>Huffman Coding</td>
                    <td>Lossless compression</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>LZW Compression</td>
                    <td>Dictionary-based compression</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Run-Length Encoding (RLE)</td>
                    <td>Repeated data compression</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="machine-learning-algorithms">
            <h2>Machine Learning Algorithms (High-Level)</h2>
            <p>Learning from data.</p>
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
                    <td>Linear Regression</td>
                    <td>Predict continuous values</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Logistic Regression</td>
                    <td>Binary classification</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Decision Tree</td>
                    <td>Rule-based learning</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Random Forest</td>
                    <td>Ensemble trees</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>K-Means</td>
                    <td>Clustering</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>KNN</td>
                    <td>Nearest neighbor classification</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Naive Bayes</td>
                    <td>Probabilistic classifier</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Neural Networks</td>
                    <td>Deep learning models</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="operating-system-algorithms">
            <h2>Operating System Algorithms</h2>
            <p>System-level resource management.</p>
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
                    <td>FCFS Scheduling</td>
                    <td>First-Come First-Serve</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Shortest Job First (SJF)</td>
                    <td>Shortest task first</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Round Robin Scheduling</td>
                    <td>Time-sharing scheduling</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Banker's Algorithm</td>
                    <td>Deadlock avoidance</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Page Replacement Algorithms</td>
                    <td>LRU, FIFO, Optimal</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="distributed-networking-algorithms">
            <h2>Distributed & Networking Algorithms</h2>
            <p>Used in large-scale systems.</p>
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
                    <td>Consensus Algorithms</td>
                    <td>Paxos, Raft</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Load Balancing Algorithms</td>
                    <td>Round Robin, Least Connections</td>
                    <td data-label="Select">
                      <input type="checkbox" class="row-checkbox" />
                    </td>
                  </tr>
                  <tr>
                    <td>Routing Algorithms</td>
                    <td>Distance Vector, Link State</td>
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
