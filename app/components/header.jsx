"use client"
import logo from "../../public/logo.jpeg";
import Image from "@nextui-org/react";

export default function Header() {
  return (
    <header className="relative flex flex-col overflow-hidden bg-dark">
      <div className="flex items-center justify-around flex-wrap border-b bg-blue-400 p-3">
        <div className="flex items-center space-x-2 py-1 px-2 shadow-md">
          <Image
            className="rounded-md"
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
          <div className="max-w-md text-center">
            <h1 className="text-2xl sm:text-4xl text-gray-100 font-bold">
              Aménagement extérieur & intérieur
            </h1>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-gray-100">
          icono1 icono2 icono3
        </div>
      </div>
    </header>
  );
}
