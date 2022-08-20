import Image from "next/image";
import {BsThreeDots} from "react-icons/bs";
import {AiOutlineMessage} from "react-icons/ai";

export default function ThanksWidget() {
  return (
    <div>
      <div className="p-3 max-w-sm bg-blue-100 rounded-xl dark:bg-slate-800 dark:border-gray-700">
        
        <div className="flex items-center py-3 space-x-3">
              <Image
                className="rounded-full cursor-pointer"
                src="/favicon.ico"
                alt="userimage"
                width={50}
                height={50}
                objectFit="contain"
              ></Image>
              
              <div className="flex-col mx-auto">
                <h5 className="font-medium text-sm text-slate-800 dark:text-white cursor-pointer" >Enosh Bunny</h5>
                <h5 className=" text-[10px] mt-1 text-slate-500 dark:text-blue-300">
                  Just Now
                </h5>
              </div>
              
              
            </div>
        {/* message */}
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ml-2">
          Bunny just contributed <span className="dark:text-blue-100 text-slate-900 font-bold"> $200 </span>for your campaign.
        </p>
        <div className="inline-flex">
          <button className="inline-flex items-center bg-blue-600 rounded-md text-gray-50 py-2 w-64 px-[88px]">
             Thank you
          </button>
          <button className="inline-flex items-center bg-blue-600 text-gray-50 rounded-md px-2 py-1 ml-2">
              <AiOutlineMessage size={22} />
          </button>
        </div>
        {/* <a
          href="#"
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a> */}
      </div>
    </div>
  );
}
