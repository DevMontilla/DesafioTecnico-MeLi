"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarDashboard = () => {
  const pathName = usePathname();

  return (
    <div
      className="flex w-full justify-center items-center"
      style={{ backgroundColor: "#009EE3", height: "60px" }}
    >
      {pathName !== '/dashboard/list' && (
        <Link href='/dashboard/list' className="absolute left-4">
          <Image
            // Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.
            src={"/icons/arrow-left-solid.svg"}
            alt="chevron_left"
            height={32}
            width={32}
          />
        </Link>
      )}
      <Image
        src={"/icons/mp_logo.svg"}
        alt="mercado_pago_logo"
        height={42}
        width={60}
      />
    </div>
  );
};
