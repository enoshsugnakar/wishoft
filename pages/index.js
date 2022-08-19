import Head from "next/head";

import HomeScreen from "../components/mainscreen/MainScreen";

import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

const style = {
  wrapper:
    "flex  justify-center h-screen w-screen select-none bg-slate-200 text-white",
  content: "w-screen flex justify-between",
};

export default function Home() {
  return (
    <div>
      <Head></Head>
      <main className={style.wrapper}>
        <div className={style.content}>
          <Sidebar />
          <HomeScreen />
          <Widgets />
        </div>
        
      </main>
    </div>
  );
}
