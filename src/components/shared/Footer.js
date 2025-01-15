import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaBehance, FaBlogger } from "react-icons/fa";

const socialLinks = [
  { href: 'mailto:ngmtri20901.work@gmail.com', icon: <FaEnvelope /> },
  { href: 'https://github.com/ngmtri20901', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/ngmtri20901/', icon: <FaLinkedin /> },
  { href: 'https://www.behance.net/ngmtri2901', icon: <FaBehance /> },
  { href: 'https://mintrishere.com/', icon: <FaBlogger /> }
];

export default function Footer() {
    return (
<div>
  <footer class="bg-neutral-800">
    <div class="mx-auto w-full max-w-screen-xl px-2 py-2 lg:py-2">
      <div class="md:flex md:justify-between items-center">
        <span class="text-sm text-gray-500 dark:text-gray-400">
          © 2024 <a href="https://software.mintrishere.com/" class="hover:underline">software.mintrishere.com</a>. All Rights Reserved.
        </span>
        <div className="flex mt-2 md:mt-0">
            {socialLinks.map(({ href, icon }, index) => (
              <a key={index} href={href} className="text-gray-500 hover:text-white me-2">
                {icon}
              </a>
            ))}
          </div>
      </div>
    </div>
  </footer>
</div>

    )
}
