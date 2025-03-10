// import "./information.css";
import Image from "next/image";
import startImg from "../../image/startPage.webp";

export default function Information() {
  return (
    <main className="main">
      <Image src={startImg} alt="startImg" />
    </main>
  );
}
