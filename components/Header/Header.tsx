import Image from "next/image";
import Link from "next/link";
import logoPng from "/public/logo.png";

export function Header(p: {}) {
  return (
    <header className="bg-main-700 p-8 flex justify-between items-center w-full m-auto">
      <Link href="/" className="py-6">
        <Image src={logoPng} alt="Logo" width={200} height={200} />
      </Link>
      <div></div>
    </header>
  );
}
