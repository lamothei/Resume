import React from 'react';
import { UilLinkedin, UilGithub } from '@iconscout/react-unicons';

function Footer() {
  return (
    <footer class="flex flex-col items-center justify-between p-6 bg-gray-900 sm:flex-row">
      <p class="text-xl font-bold transition-colors duration-300 text-white hover:text-gray-300">
        Ian Lamohe
      </p>

      <p class="text-sm text-gray-300">A project by Ian Lamothe</p>
      <div class="flex -mx-2">
        <a
          href="https://www.linkedin.com/in/ian-lamothe-960867118/"
          target="_blank"
          rel="noreferrer"
          class="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
        >
          <UilLinkedin />
        </a>
        <a
          href="https://github.com/lamothei"
          target="_blank"
          rel="noreferrer"
          class="mx-2 transition-colors duration-300 text-gray-300 hover:text-blue-400"
        >
          <UilGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
