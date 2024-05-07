import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useSelector } from "react-redux";

const App = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700`}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
