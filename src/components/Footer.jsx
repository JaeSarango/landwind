import InfoFooterList from "./InfoFooterList";
import { footer, icoFooter } from "../data";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="w-full   lg:container  px-6 md:px-0  mx-auto py-8">
      <div className="grid  grid-cols-1 md:grid-cols-5">
        {footer.map((item, i) => (
          <div key={i}>
            <p className="font-bold mb-4"> {item.title} </p>
            <InfoFooterList arrayList={item.texts} />
          </div>
        ))}
      </div>
      <div className="mt-9 flex items-center flex-col gap-y-2">
        <div className="flex items-center gap-x-2 ">
          <img src={logo} alt="" />
          <p>Landwind</p>
        </div>
        <p>© 2022 Flowbite, Inc. All rights reserved .</p>
        <div className=" flex flex-row">
          {icoFooter.map((img, i) => (
            <img key={i} src={img} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
