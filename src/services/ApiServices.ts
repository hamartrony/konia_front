import { Api } from "./Axios";

interface IItem {
  nome: string;
  data_criacao: string;
  id: number;
}

interface INome {
  nome: string;
}

const getAll = async (): Promise<IItem[] | Error> => {
  try {
    const { data } = await Api.get("/items/");
    if (data) {
      return data;
    }

    return new Error("Erro ao listar itens");
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao listar"
    );
  }
};

const create = async (dados: INome): Promise<number | Error> => {
  try {
    const { data } = await Api.post("/items/", dados);
    if (data) {
      return data;
    }
    return new Error("Erro ao criar Item");
  } catch (error) {
    return new Error(
      (error as { message: string }).message || "Erro ao criarr"
    );
  }
};

export const ApiService = {
  getAll,
  create,
};
