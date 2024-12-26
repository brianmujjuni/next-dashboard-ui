import Link from "next/link";
import Image from "next/image";
import React from "react";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardPage({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 p-2"
        >
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt=""
            className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
          />
          <span className="hidden lg:block">Automex School</span>
        </Link>
        <Menu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[F78FA] overflow-scroll ">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
