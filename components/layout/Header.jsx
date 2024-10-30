import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);

  useEffect(() => {
    console.log("isSearchModal", isSearchModal);
  }, [isSearchModal]);

  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between h-full items-center ">
        <div>
          <Logo></Logo>
        </div>
        <nav>
          <ul className="flex gap-x-2 ">
            <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer">
              <a>Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer">
              <a>Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer">
              <a>About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer">
              <a>Book Table</a>
            </li>
          </ul>
        </nav>
        {/* icons */}
        <div className="flex gap-x-4 items-center">
          <button>
            <FaUser className="hover:text-primary transition-all " />
          </button>
          <button>
            <FaShoppingCart className="hover:text-primary transition-all " />
          </button>
          <button onClick={() => setIsSearchModal(!isSearchModal)}>
            <FaSearch className="hover:text-primary transition-all " />
          </button>

          <button className="btn-primary">Order Online</button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
