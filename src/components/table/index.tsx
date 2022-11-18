import { useEffect, useState } from "react";
import { ApiService } from "../../services/ApiServices";
import "./table.css";

type IItem = {
  nome: string;
  data_criacao: string;
  id: number;
};

export default function Table() {
  // state armazena dados da Api
  const [rows, setRows] = useState<IItem[]>([]);

  // busca na Api
  useEffect(() => {
    ApiService.getAll().then((result) => {
      if (result instanceof Error) {
        alert(result.message);
        return;
      } else {
        console.log(result);
        setRows(result);
      }
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th className="rowId">ID</th>
          <th className="rowName">Nome do item</th>
          <th className="rowDate">Data de criação</th>
        </tr>
      </thead>
      <tbody>
        {rows.length === 0 ? (
          <tr>
            <th style={{ height: "300px" }}></th>
            <th></th>
            <th></th>
          </tr>
        ) : (
          rows.map((row) => (
            <tr key={row.id}>
              <th className="id">{row.id}</th>
              <th className="nome">{row.nome}</th>
              <th className="data">{row.data_criacao}</th>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
