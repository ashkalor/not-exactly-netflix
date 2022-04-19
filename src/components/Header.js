import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
const Header = ({ searchHandler }) => {
  const [show, handleShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
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
  const onChangeHandler = (event) => {
    setSearchValue(event.target.value);
    searchHandler(event.target.value);
  };

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
      <div className="flex ">
        <div
          className={`flex space-x-2 items-center px-2 transition-colors ease-in mr-2 ${
            showSearch && "bg-[#1e1e1e] box-border border"
          }`}
        >
          <label htmlFor="Search" className="flex items-center">
            <BiSearch
              size="30px"
              className="text-white text-bold hover:text-gray-400"
              onClick={() => {
                setShowSearch((prev) => !prev);
              }}
            />
          </label>
          {showSearch && (
            <input
              onChange={onChangeHandler}
              value={searchValue}
              type="text"
              placeholder="Enter movie name"
              className="appearance-none block w-full bg-transparent text-white items-center focus:outline-none"
            />
          )}
        </div>

        <img
          className="object-contain w-[40px] "
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Profile logo"
        />
      </div>
    </div>
  );
};

export default Header;
