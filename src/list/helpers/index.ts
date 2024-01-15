import { Collection } from "../interfaces/collection";

export const getCollections = async (
  type?: string | null
): Promise<Collection[]> => {
  const { data } = await fetch(
    `http://localhost:3000/api/list?type=${type}`
  ).then((res) => res.json());
  return data;
};
