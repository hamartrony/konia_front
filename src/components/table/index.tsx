import { TableHTMLAttributes, useState } from "react";
import "./index.css";

interface Item extends TableHTMLAttributes<HTMLTableElement> {
  nome: string;
  data_criacao: string;
  id: string;
}

const dados = [
  {
    id: "1",
    nome: "parafuso",
    data_criacao: "2022-11-17",
  },
  {
    id: "2",
    nome: "chave fenda",
    data_criacao: "2022-11-17",
  },
  {
    id: "3",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "4",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "5",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "6",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "7",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "8",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "9",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "10",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "11",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "12",
    nome: "colher",
    data_criacao: "2022-11-17",
  },
  {
    id: "13",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "14",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "15",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "16",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "17",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "18",
    nome: "espanadeira",
    data_criacao: "2022-11-17",
  },
  {
    id: "19",
    nome: "churasqueira",
    data_criacao: "2022-11-17",
  },
];

export default function Table() {
  const [rows, setRows] = useState<Item[]>(dados);

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
        {rows.map((row) => (
          <tr>
            <th className="id">{row.id}</th>
            <th className="nome">{row.nome}</th>
            <th className="data">{row.data_criacao}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
