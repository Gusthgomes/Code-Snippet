import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6">
      <UserButton />
      <Link href="/sign-in">Login</Link>
    </div>
  );
}
