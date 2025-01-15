import React from "react";
import { useState } from "react";
import Logo from "../../images/LogoWhite.png";
import { Link, useLocation } from "react-router-dom";
import {
  DASHBOARD_SIDEBAR_CALCULATOR,
  DASHBOARD_SIDEBAR_CONVERTER,
} from "../../lib/consts";
import { IoIosInformationCircleOutline } from "react-icons/io";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";

const linkClasses =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-500 active:bg-neutral-400 rounded-sm text-based text-gray-400 hover:text-white active:text-white transition-all duration-300 ease-in-out";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="absolute top-4 left-4 z-20 text-gray-800 text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="text-white" /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={clsx(
          "bg-neutral-600 w-60 p-3 flex flex-col text-white overflow-auto fixed top-0 left-0 h-full z-10 transform transition-transform duration-300",
          {
            "-translate-x-full": !isOpen,
            "translate-x-0": isOpen,
          },
          "md:static md:translate-x-0"
        )}
      >
        <aside className="flex flex-col justify-between h-full">
          {/* Image */}
          <div className="flex items-center gap-2 px-1 py-3">
            <img
              src={Logo}
              alt="Logo"
              height={50}
              width={50}
              className="transition-transform duration-300 hover:scale-105"
            />
            <span className="text-neutral-100 text-lg font-mono font-extrabold">
              B1 CALCULATOR
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 py-8 flex flex-col gap-0.5">
            {/* Calculator */}
            <div className="flex py-2 font-extrabold">
              <h5>Calculator</h5>
            </div>
            {DASHBOARD_SIDEBAR_CALCULATOR.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}

            {/* Converter */}
            <div className="flex py-2 font-extrabold">
              <h5>Converter</h5>
            </div>
            {DASHBOARD_SIDEBAR_CONVERTER.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>

          {/* About this Project */}
          <div className="flex border-t border-gray-600 mt-4 pt-3 gap-2 items-center text-sm font-bold text-gray-400 hover:text-white active:text-white text-based">
            <IoIosInformationCircleOutline className="text-lg" />
            <h5>
              <Link to="/">About this Project</Link>{" "}
              {/* Thay a href bằng Link */}
            </h5>
          </div>
        </aside>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );

  function SidebarLink({ item }) {
    const { pathname } = useLocation();

    return (
      <Link
        to={item.path}
        className={clsx(
          pathname === item.path ? "text-white bg-neutral-500 font-bold" : "",
          linkClasses
        )}
        onClick={() => setIsOpen(false)} // Close sidebar on link click
      >
        <span className="text-xl">{item.icon}</span>
        {item.label}
      </Link>
    );
  }
}
