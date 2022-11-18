import { Api } from "./Axios";

interface IItem {
  nome: string;
  data_criacao: string;
  id: number;
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

const create = async (
  dados: Omit<IItem, "id , data_criacao">
): Promise<number | Error> => {
  try {
    const { data } = await Api.post<IItem>("/item/");
    if (data) {
      return data.id;
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
