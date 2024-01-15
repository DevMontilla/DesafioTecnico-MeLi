import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-72 rounded-md m-8 bg-white shadow-lg justify-center items-center">
      <div className="h-20 w-20 rounded-full border-gray-200 border flex justify-center items-center">
        <Image src={"/icons/alert-24.svg"} alt="icon" width={32} height={32} />
      </div>
      <h2 className="text-4xl mt-4">ID</h2>
      <p className="text-2xl my-3 text-center">
        El ID ingresado no se encuentra en nuestra base de datos
      </p>
      <h1 className="text-4xl"></h1>
    </div>
  );
}
