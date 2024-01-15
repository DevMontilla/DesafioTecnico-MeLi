import { DetailCard } from "@/detail";
import { getCollectionById } from "@/detail/helpers";
import { Metadata } from "next";

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id, title } = await getCollectionById(params.id);

    return {
      title: `#${id} - ${title}`,
      description: `${title}`,
    };
  } catch (error) {
    return {
      title: `Cobro no encontrado`,
      description: `No encontrado`,
    };
  }
}

export default async function DetailPage({ params }: Props) {
  const collection = await getCollectionById(params.id);

  return <DetailCard collection={collection} />;
}
