import { Collection } from "@/list/interfaces/collection";
import Image from "next/image";

interface Props {
  collection: Collection;
}

export const DetailCard = ({ collection }: Props) => {
  return (
    <div className="flex flex-col h-72 rounded-md m-8 bg-white shadow-lg justify-center items-center">
      <div className="h-20 w-20 rounded-full border-gray-200 border flex justify-center items-center">
        <Image
          src={"/icons/credit_card-32.svg"}
          alt="icon"
          width={32}
          height={32}
        />
      </div>
      <h2 className="text-4xl mt-4">{collection.title}</h2>
      <p className="text-2xl my-3">{collection.description}</p>
      <h1 className="text-4xl">
        {parseFloat(collection.amount.replace(",", ".")).toLocaleString(
          "es-AR",
          {
            style: "currency",
            currency: "ARS",
          }
        )}
      </h1>
    </div>
  );
};
