import { useEffect, useState } from "react";

const Header = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div
      className={`flex justify-between px-[3%] py-5 w-full fixed z-50 transition-all ease-in duration-500 ${
        show ? "bg-[#111]" : "bg-transparent"
      }`}
    >
      <img
        className="object-contain w-[100px] "
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Netflix Logo"
      />
      <img
        className="object-contain w-[40px] "
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Profile logo"
      />
    </div>
  );
};

export default Header;
