import { useState } from "react";
import { ApiService } from "../../services/ApiServices";
import Button from "../button";
import "./addItem.css";

interface Props {
  setModal: () => void;
}

interface INome {
  nome: string;
}

export default function AddItem({ setModal }: Props) {
  // state que armazena dados digitados
  const [value, setValue] = useState("");

  // funcao para salvar item
  const handleSave = () => {
    if (value === "") {
      alert("É necessário digitar um nome!");
    } else {
      const send: INome = { nome: value };
      ApiService.create(send).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          alert("Produto adicionado!");
        }
      });
    }
    return;
  };

  const handleCancelar = () => {
    setModal();
    return;
  };

  return (
    <div className="addItem">
      <div className="title">
        <p>Digite o nome do Produto:</p>
      </div>
      <label>
        Nome:
        <input
          placeholder="Produto"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
      </label>
      <div className="buttons">
        <Button func={handleSave} title="Salvar" />
        <Button func={handleCancelar} title="Voltar" />
      </div>
    </div>
  );
}
