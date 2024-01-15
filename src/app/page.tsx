import { Button } from "@/components/buttons";
import { NavbarSignIn } from "@/components/navbar";
import Link from "next/link";

export const metadata = {
  title: "Mercado Pago",
  description: "Iniciar sesión en tu cuenta",
};

export default function Home() {
  return (
    <div className="bg-white h-screen">
      <NavbarSignIn />
      <div
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          height: "75vh",
        }}
        className="bg-cover bg-center text-white border-b-8 border-b-solid border-b-slate-400"
      ></div>
      <div className="flex flex-col w-full justify-center items-center pt-4">
        <small className="text-xs my-4 text-center px-4 md:px-0">
          Usamos cookies para mejorar tu experiencia en Mercado Pago. Consultar
          más en nuestro{" "}
          <Link
            style={{ color: "#009ee3" }}
            href={"https://www.mercadopago.com.ar/privacidad#tech-and-cookies"}
          >
            Centro de privacidad
          </Link>
        </small>
        <Link href={"/dashboard/list"}>
          <Button title="Aceptar cookies" typeButton="tertiary" />
        </Link>
      </div>
    </div>
  );
}
