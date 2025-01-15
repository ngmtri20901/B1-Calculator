import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Layout = () => {
  const location = useLocation(); // Check URL

  // Check if the current page is the home page
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col h-screen w-screen bg-neutral-100">
      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          {/* Homepage Content */}
          {isHomePage && (
            <Timeline className="max-w-xl mx-auto mt-8">
              <Timeline.Item>
                <Timeline.Point className="" />
                <Timeline.Content>
                  <Timeline.Title>Project Overview</Timeline.Title>
                  <Timeline.Body>
                    <b>Project Name:</b> B1 Calculator <br />
                    <b>Short Description:</b> This is a web-based calculator
                    application with various calculation tools. It allows users
                    to easily access and use multiple calculation tools (and
                    helps me familiarize myself with front-end technologies).
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>Features & Technologies</Timeline.Title>
                  <Timeline.Body>
                    <b>Technologies Used:</b> React.js, React Router, Tailwind
                    CSS, JavaScript ES6+ <br />
                    <b>Features:</b> Basic & Scientific Calculator, Tips & Tax
                    Calculation, Date Calculation, BMI Calculation, Unit
                    Converter, Responsive Web Design.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>Repository</Timeline.Title>
                  <Timeline.Body>
                    You can access the full source code for the B1
                    Calculator project on GitHub. The repository contains all
                    the code, including the React components, styling with
                    Tailwind CSS, and more.
                  </Timeline.Body>
                  <button className="flex items-center bg-gray-200 hover:bg-gray-300 text-neutral-500 rounded-lg p-2 transition-all duration-200">
                    <FaGithub className="h-5 w-5 mr-3" />
                    <a
                      href="https://github.com/ngmtri20901/B1-Calculator"
                      target="_blank"
                      className="transition-all duration-200"
                    >
                      View on Github
                    </a>
                  </button>
                </Timeline.Content>
              </Timeline.Item>
              <h1 className="text-md italic text-gray-500">Finally, I would like to express my heartfelt gratitude to <a href="https://chatgpt.com/" target="_blank" className="hover:underline">ChatGPT</a> and <a href="https://bolt.new/" target="_blank" className="hover:underline">bolt.new</a> for invaluable contributions to this project.</h1>
              </Timeline>
          )}

          {/* Outlet) */}
          <Outlet />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
