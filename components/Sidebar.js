import { FaHatWizard } from "react-icons/fa";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { FaBell, FaRegBell, FaBullhorn } from "react-icons/fa";
import { BsChatSquareDots, BsChatSquareDotsFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex">
      <aside className="w-72" aria-label="Sidebar">
        <div className="overflow-y-auto h-screen py-4 px-3 bg-slate-200 dark:bg-slate-800">
          <div className="inline-flex flex-col">
            <div className=" justify-between">
              <a href="#" className="flex mb-5 items-center">
                <div className=" flex">
                  <Image
                    src="/wishoft.svg"
                    height={50}
                    width={50}
                    objectFit="contain"
                    className="lg:hidden"
                  />
                </div>
                <h1 className=" font-bold tracking-tight text-2xl mt-2 ml-1 text-slate-800 dark:text-slate-100">
                  wishoft
                </h1>
              </a>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <BiHome
                      className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      size={23}
                    />

                    <span className="ml-3">Home</span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaBullhorn
                      className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      size={20}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Campaigns
                    </span>
                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <BsChatSquareDots
                      className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      size={20}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Recent activity
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaRegBell
                      className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      size={20}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Notifications
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FaHatWizard
                      className="flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      size={20}
                    />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Settings
                    </span>
                  </a>
                </li>
              </ul>

              
              <div />
            </div>
            <div
                id="dropdown-cta"
                className="p-4  bg-blue-50 rounded-lg dark:bg-blue-900 align-bottom mt-48"
                role="alert"
              >
                <div className="flex items-center mb-3">
                  <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
                    Coming soon
                  </span>
                  <button
                    type="button"
                    className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
                    data-collapse-toggle="dropdown-cta"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
                  This social media app is currently under development, will see
                  you soon with awesome and cool features
                </p>
                <a
                  className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  href="#"
                >
                  Read more about this project here
                </a>
              </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
