"use client";

import { Dropdown } from "@/components/buttons";
import { ListItem } from "./ListItem";
import { Collection } from "../interfaces/collection";
import { useEffect, useState } from "react";
import { getCollections } from "../helpers";
import { Skeleton } from "@/components/loaders";
import { Alert } from "@/components/alert";


export const GridListItem = () => {
  const [selectedType, setSelectedType] = useState<string | null>("");
  const [data, setData] = useState<Collection[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collections = await getCollections(selectedType);
        setData(collections);
      } catch (error) {
        setErrorMessage(`${error}`);
      }
    };
    fetchData();
  }, [selectedType]);

  const total = data.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.amount.replace(",", "."));
  }, 0);

  return (
    <>
      <div
        className="w-full flex flex-row justify-between items-center px-4"
        style={{ backgroundColor: "#EDEDED" }}
      >
        <h1 className="text-4xl">
          {total.toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
          })}
        </h1>
        <Dropdown
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </div>
      {errorMessage ? (
        <Alert type="error" message={errorMessage} />
      ) : data.length === 0 ? (
        <Skeleton />
      ) : (
        data.map((collection) => (
          <ListItem key={collection.id} collection={collection} />
        ))
      )}
    </>
  );
};
