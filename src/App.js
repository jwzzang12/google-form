import "./App.css";
import "./css/layout.css";
import Title from "./components/Title";
import Item from "./components/Item";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Title />
      <Item />
      <Preview />
    </div>
  );
}

export default App;
