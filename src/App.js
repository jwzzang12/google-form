import "./App.css";
import "./css/layout.css";
import Title from "./components/Title";
import Preview from "./components/Preview";
import List from "./components/List";
import { useSelector } from "react-redux";
import NewItem from "./components/NewItem";

function App() {
  const data = useSelector((state) => state.dataList);
  return (
    <div className="App">
      <Title />
      <List data={data} />
      <NewItem />
      <Preview />
    </div>
  );
}

export default App;
