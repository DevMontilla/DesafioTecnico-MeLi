import Image from "next/image";

export const Skeleton = () => {
  return (
    <div className="border border-gray-300 shadow rounded-sm p-4 w-full mx-auto">
      <div className="animate-pulse flex space-x-4 items-center">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="rounded-full bg-slate-700 h-10 w-10"></div>
          <div className="flex-1 space-y-2 py-1 ml-4">
            <div className="h-2 bg-slate-700 rounded w-36"></div>
            <div className="h-2 bg-slate-700 rounded w-20"></div>
          </div>
          <div className="flex flex-row items-center">
            <div className="h-2 bg-slate-700 rounded w-16 mr-4"></div>
            <Image
              src={"/icons/chevron_right.svg"}
              alt="qr_code"
              height={9}
              width={9}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
