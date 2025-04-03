import Logo from "../assets/react.svg";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "AddJob",
      link: "/",
    },
    {
      name: "Jobs",
      link: "/jobs",
    },
  ];

  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(window.scrollY > 50);
      }
      window.addEventListener("scroll", handlescroll);
      return () => {
        window.removeEventListener("scroll", handlescroll);
      };
    };
  }, []);

  const NavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-gray-400  hover:text-purple-600 rounded-md px-3 py-2";

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        opacity: { duration: 0.1 },
      }}
      className="bg-indigo-700 border-b border-indigo-500 fixed mb-10 w-full z-10 transition-all duration-300 ease-in-out shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-start">
            <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
              <motion.img
                animate={{ rotate: 360 }}
                initial={{ rotate: 0 }}
                transition={{ duration: 10, ease: "linear", repeat: Infinity }}
                className="h-10 w-auto"
                src={Logo}
                alt="React Jobs"
              />

              <span className=" text-white text-2xl font-bold ml-2">
                WorkWave
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div>
                {/* Dropdown Menu for Mobile View */}
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger className="md:hidden text-white hover:bg-gray-900 rounded-md px-3 py-2">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16m-7 6h7"
                        />
                      </svg>
                      <span className="sr-only">Open main menu</span>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Content className="bg-white shadow-lg rounded-md p-4 flex flex-col gap-2 items-center">
                    {navItems.map((item) => (
                      <DropdownMenu.Item key={item.name}>
                        <NavLink to={item.link} className={NavLinkClass}>
                          {item.name}
                        </NavLink>
                      </DropdownMenu.Item>
                    ))}
                  </DropdownMenu.Content>
                </DropdownMenu.Root>

                <div className="hidden md:flex">
                  {" "}
                  <NavLink to="/" className={NavLinkClass}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={NavLinkClass}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={NavLinkClass}>
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
