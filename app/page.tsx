import Header from "@/public/components/header/Header";
import Information from "@/public/components/information/Information";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Information />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
    </>
  );
}
