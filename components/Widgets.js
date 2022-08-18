import ThanksWidget from "./cards/ThanksCard";


export default function Widgets() {
  return (
    
    <div className="hidden lg:flex" >
     <div className="flex-col w-80 h-screen p-2 dark:bg-slate-900 bg-slate-100 space-y-3 pt-5 overflow-x-auto">
      <ThanksWidget />
      <ThanksWidget />
      </div>
    </div>
  );
}
