import Image from "next/image";
import Link from "next/link";
import { Collection } from "../interfaces/collection";

interface Props {
  collection: Collection;
}

export const ListItem = ({ collection }: Props) => {
  return (
    <div className="w-full flex flex-row justify-between items-center h-16 px-4 bg-white">
      <div className="flex flex-row items-center">
        <div className="w-10 h-10 rounded-full border-gray-200 border flex flex-row justify-center items-center">
          <Image
            src={`/thumbnails/${collection.type}-16.svg`}
            alt="icon"
            height={16}
            width={16}
          />
        </div>
        <div className="leading-4 ml-4">
          <p className="text-md">{collection.title}</p>
          <span className="text-sm">{collection.description}</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          {parseFloat(collection.amount.replace(",", ".")).toLocaleString(
            "es-AR",
            {
              style: "currency",
              currency: "ARS",
            }
          )}
        </div>
        <Link href={`/dashboard/detail/${collection.id}`}>
          <Image
            src={"/icons/chevron_right.svg"}
            alt="qr_code"
            height={9}
            width={9}
          />
        </Link>
      </div>
    </div>
  );
};
