import Footer from "./FooterMenu";
import Navbar from "./Navbar";
import Feed from "./Feed";

export default function HomeScreen() {
    return (
        <div className="w-screen h-screen bg-slate-200 dark:bg-slate-800">
            <Navbar />
            <Feed />
            <Footer />
        </div>
    );
}