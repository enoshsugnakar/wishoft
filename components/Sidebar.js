import { FaHatWizard } from "react-icons/fa";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiHome } from "react-icons/bi";
import { FaBell, FaRegBell, FaBullhorn } from "react-icons/fa";
import { BsChatSquareDots, BsChatSquareDotsFill } from "react-icons/bs";
import OfferNotification from "./cards/OfferNotification";

export default function Sidebar() {
  return (
    <div className="hidden lg:flex">
      <aside className="lg:w-80  max-w-full" aria-label="Sidebar">
        <div className=" py-4 px-3 h-screen overflow-hidden bg-slate-200 dark:bg-slate-800">
          <div className="inline-flex flex-col ">
            {/* logo */}
            <div>
              <a href="#" className="flex ml-4 -mt-3 mb-4 items-center">
                <Image
                  src="/wishoft.svg"
                  height={55}
                  width={55}
                  objectFit="contain"
                  className="lg:hidden"
                />

                <h1 className=" font-bold  tracking-tight text-2xl mt-2 ml-1 text-slate-800 dark:text-slate-100">
                  wishoft
                </h1>
              </a>
            </div>
            {/* sidebar under logo */}
            <div className="dark:bg-slate-900 bg-blue-50 rounded-lg h-screen overflow-y-scroll scroll-smooth dark:scrollbar-dark scrollbar">
              <div className="justify-between inline-flex flex-col">
              {/* Navigation */}
              <ul className="space-y-2  p-5">
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
              {/* Offer notification */}
              <div className=" mt-44 ">
               <OfferNotification />
               
              </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
