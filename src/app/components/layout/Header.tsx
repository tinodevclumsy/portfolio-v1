import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 py-6 px-5">
      <div className="container flex justify-between items-center mx-auto">
        <h6>SEUNGJUN LEE.</h6>

        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#experience">Experience</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
