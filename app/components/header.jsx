import logo from "../../public/logo.jpeg";
import Image from "next/image";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header className="relative flex flex-col overflow-hidden bg-dark">
      <div className="flex items-center justify-between flex-wrap border-b p-3">
        <div className="flex items-center space-x-2 py-1 px-8">
          <Image
            src={logo}
            alt="logo"
            width="auto"
            height={70}
          />
          <div className="max-w-[250px] text-center">
            <h1 className="text-2xl text-gray-800 font-bold">
              Aménagement extérieur & intérieur
            </h1>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
