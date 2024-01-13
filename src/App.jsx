import "./App.css";
import AddBookMark from "./component/AddBookMark.jsx";
import TableApp from "./component/Tables.jsx";

function App() {
  return (
    <div className="App">
      <div>
        <AddBookMark />
      </div>
      <div style={{ width: "600px"}}>
        <TableApp />
      </div>
    </div>
  );
}

export default App;
