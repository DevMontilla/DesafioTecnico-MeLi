import Image from "next/image";
import Link from "next/link";
import { Button } from "../buttons";

export const NavbarSignIn = () => {
  return (
    <div className="container  m-auto flex flex-row w-full justify-between items-center py-4 bg-white px-8 md:px-0">
      <div>
        <Image
          src={"/icons/mp_logo.svg"}
          alt="mercado_pago_logo"
          width={60}
          height={42}
        />
      </div>
      <div>
        <Link href={"/dashboard/list"}>
          <Button title="Iniciar sesión" typeButton="secondary"/>
        </Link>
      </div>
    </div>
  );
};
