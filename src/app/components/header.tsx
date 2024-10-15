const Header: React.FC = () => {
  return (
    <header className="sticky top-0 py-6 px-5">
      <div className="container flex justify-between items-center mx-auto">
        <h1>SEUNGJUN LEE.</h1>

        <nav>
            <ul className="flex gap-6">
                <li>About.</li>
                <li>Skill.</li>
                <li>Experience.</li>
                <li>Contact.</li>
                <li>Blog.</li>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
