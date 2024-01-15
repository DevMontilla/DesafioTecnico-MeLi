import Image from "next/image";

interface Props {
  type: string;
  message: string;
}

export const Alert = ({ type, message = "error" }: Props) => {
  return (
    <div className="absolute mx-auto w-80 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded bottom-4 right-4">
      <div className="flex flex-row items-center">
        <Image src={`/icons/error-24.svg`} alt="icon" height={16} width={16} />
        <div className="flex flex-row w-full">
          <strong className="font-bold ml-4 mr-2">{type.toUpperCase()}:</strong>
          <span className="block sm:inline"> {message} </span>
        </div>
      </div>
    </div>
  );
};
