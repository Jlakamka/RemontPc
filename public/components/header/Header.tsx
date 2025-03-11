import Link from "next/link";
import "./header.css";
export default function Header() {
  return (
    <header className="header">
      <li className="header__list">
        <ul>
          <Link href="/">
            <h2>Главная</h2>
          </Link>
        </ul>
        <ul>
          <Link href="contacts">
            <h2>Контакты</h2>
          </Link>
        </ul>
      </li>
    </header>
  );
}
