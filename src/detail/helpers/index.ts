import { Collection } from "@/list/interfaces/collection";
import { notFound } from "next/navigation";

export const getCollectionById = async (id: string): Promise<Collection> => {
    try {
      const { foundItem } = await fetch(
        `http://localhost:3000/api/collections/${id}`
      ).then((res) => res.json());
  
      return foundItem;
    } catch (err) {
      notFound();
    }
  };