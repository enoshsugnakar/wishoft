import Image from "next/image";
import { useState } from "react";
import ThanksWidget from "./cards/ThanksCard";


export default function Widgets() {

  const [dopen, setDopen] = useState();

  return (
    <div className="hidden lg:flex">
      <div className="flex-col w-80 h-screen p-2 dark:bg-slate-800 bg-slate-200 overflow-hidden ">
        <div className="py-3 bg-slate-200  dark:bg-slate-800 duration-300  ">
          <button
           onClick={() => setDopen(!dopen)}
           className="flex items-center justify-end ml-auto  rounded-xl focus:ring-4 bg-blue-50 dark:bg-slate-900 p-2 focus:ring-gray-300 dark:focus:ring-gray-700 dark:text-white">
            <Image
              className="rounded-full"
              src="/favicon.ico"
              alt="userimage"
              width={30}
              height={30}
              objectFit="contain"
            ></Image>
            <h5 className="font-semibold text-base tracking-tight ml-2 dark:text-gray-400 text-slate-700" >Enosh Bunny</h5>
            <svg
              className="w-4 h-4 mx-1.5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div className={`${dopen && "z-10 absolute ml-20 mt-2 transition-transform w-44 backdrop-blur-xl duration-300 bg-blue-100 rounded divide-y divide-gray-100 shadow-md shadow-slate-800 dark:bg-slate-900 dark:divide-gray-600"} ${!dopen && "hidden"}`}>
            <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
              <div className="font-bold ">99+ karma</div>
              <div className="truncate">exampleemail@gmail.com</div>
            </div>
            <ul
              className="py-1 text-sm text-slate-700 dark:text-slate-400"
              
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Karma
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="py-1">
              <a
                href="#"
                className="block py-2 px-4 text-sm text-slate-700 hover:bg-blue-200 dark:hover:bg-gray-600 dark:text-slate-400 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col p-5  dark:bg-slate-900 bg-blue-50 rounded-lg space-y-3 pt-5  ">
          <h4 className="text-xl font-semibold text-left ml-2 bg:white dark:text-gray-400 text-slate-700 snap-start">
            Recent activity
          </h4>
          <div className=" h-screen overflow-scroll space-y-2 dark:scrollbar-dark scrollbar">
          <ThanksWidget />
          <ThanksWidget />
          <ThanksWidget />
          <ThanksWidget />
          <ThanksWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
