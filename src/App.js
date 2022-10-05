import "./App.css";
import Title from "./components/Title";
import Item from "./components/Item";
import Preview from "./components/Preview";

function App() {
  return (
    <div className="App">
      <Preview />
      <Title />
      <Item />
    </div>
  );
}

export default App;
