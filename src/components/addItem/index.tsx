import { useState } from "react";
import { ApiService } from "../../services/ApiServices";
import Button from "../button";
import "./addItem.css";

interface Props {
  func: () => void;
  data: {};
}

export default function AddItem({ func }: Props) {
  const [value, setValue] = useState("");

  const handleSave = (data: string) => {
    const send = { nome: data };
    console.log(send);
    ApiService.create(send).then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      } else {
        alert("Produto adicionado!");
      }
    });
    return console.log("salvou");
  };

  const handleCancelar = () => {
    func();
    return console.log("salvou");
  };

  return (
    <div className="addItem">
      <div className="title">
        <p>Digite o nome do Produto:</p>
      </div>

      <input
        placeholder="Produto"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <div className="buttons">
        <Button func={() => handleSave(value)} title="Salvar" />
        <Button func={handleCancelar} title="Cancelar" />
      </div>
    </div>
  );
}
