import "./App.css";
import comilla from "./assets/comilla.svg";
import { logos } from "./data";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import NavbarWind from "./components/NavbarWind";
import Hero from "./components/Hero";
import StatisticalInfo from "./components/StatisticalInfo";
import PlansToPay from "./components/PlansToPay";
import Databyusers from "./components/DataByUsers";

function App() {
  return (
    <div className="">
      <NavbarWind />
      <Hero loguito={logos} />
      <StatisticalInfo />
      <Databyusers />
      <div className="flex flex-col bg-[#F9FAFB] justify-center items-center md:py-20 p-6 mt-5 ">
        <img className="w-10 h-10 my-3" src={comilla} alt="" />
        <p className="max-w-[550px] mb-4">
          &quot;Flowbite is just awesome. It contains tons of predesigned
          components and pages starting from login screen to complex dashboard.
          Perfect choice for your next SaaS application.&quot;
        </p>
      </div>
      <PlansToPay />
      <Faqs />
      <div className="flex flex-col items-center bg-[#F9FAFB] my-8 px-6  text-center  ">
        <p className="font-bold  text-[25px] mt-6">
          Start your free trial today
        </p>
        <p className=" text-slate-400 mt-6">
          Try Flowbite Platform for 30 days. No credit card required.
        </p>
        <button className=" rounded-md  bg-[#7e3af2] p-3 text-white my-8">
          Free trial for 30 days
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
