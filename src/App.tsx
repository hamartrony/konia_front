import { useState } from "react";
import "./App.css";
import AddItem from "./components/addItem";
import Button from "./components/button";
import Table from "./components/table";

function App() {
  // state para ativar modal
  const [modal, setModal] = useState(false);

  // funcao para alterar state do modal
  const handleModal = () => {
    setModal(modal === true ? false : true);
  };

  return (
    <div className="App">
      {modal === true ? (
        <AddItem setModal={handleModal} />
      ) : (
        <section>
          <h1>Itens do inventário</h1>

          <Button func={handleModal} title="+ novo item" />
          <Table />
        </section>
      )}
    </div>
  );
}

export default App;
