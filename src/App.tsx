import { useState } from "react";
import "./App.css";
import AddItem from "./components/addItem";
import Button from "./components/button";
import Table from "./components/table";

function App() {
  const [add, setAdd] = useState(false);

  const addItem = () => {
    setAdd(add === true ? false : true);
  };

  return (
    <div className="App">
      {add === true ? (
        <AddItem func={addItem} />
      ) : (
        <section>
          <h1>Itens do inventário</h1>

          <Button func={addItem} title="+ novo item" />
          <Table />
        </section>
      )}
    </div>
  );
}

export default App;
