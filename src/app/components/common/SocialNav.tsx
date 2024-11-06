import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";

const SocialNav = () => {
  return (
    <div className="flex gap-3 absolute bottom-5 right-5">
      <Link
        href="https://linkedin.com/in/seungjun-martin-lee-tinodevclumsy"
        target="_blank"
      >
        <FaLinkedinIn size={24} />
      </Link>
      <Link href="https://github.com/tinodevclumsy" target="_blank">
        <FaGithub size={24} />
      </Link>
    </div>
  );
};

export default SocialNav;
