import {AiFillHome} from "react-icons/ai";
import {BiHome} from "react-icons/bi";
import {FaBell, FaRegBell, FaBullhorn} from "react-icons/fa";
import {BsChatSquareDots, BsChatSquareDotsFill} from "react-icons/bs";
import Image from "next/image";
 
export default function Footer() {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 lg:hidden z-20 p-3 h-16 w-full md:flex-auto backdrop-blur-md bg-white/30 dark:bg-slate-900/30 border-t  border-gray-100 shadow md:items-center md:justify-between dark:bg-gray-800 dark:border-gray-600">
        <div className="flex justify-between justify-items-center my-auto md:mx-24 mx-5">
            <div className="bg-blue-300 p-2  rounded-md">
            <AiFillHome className="text-slate-800 "  size={23}/>
            </div>
            <div className="p-2">
            <BsChatSquareDotsFill className="text-slate-800 dark:text-slate-100" size={23} />
            </div>
            <div className="p-2">
            <FaBullhorn className="text-slate-800 dark:text-slate-100" size={23} />
            </div>
            <div className="p-2">
            <FaBell className="text-slate-800 dark:text-slate-100" size={23} />
            </div>
            <div className="p-1 pt-1">
            <Image
              className="rounded-full "
              src="/favicon.ico"
              alt=""
              width={25}
              height={25}
              objectFit="fill"
            ></Image>
            </div>
        </div>
      </footer>
    </div>
  );
}
