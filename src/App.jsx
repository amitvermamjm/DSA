import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <h1>List of all Data Structure and Algorithms for Revision</h1>
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
      </div>
    </>
  )
}

export default App
