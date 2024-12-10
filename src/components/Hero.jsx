import React from "react";

const Hero = ({ loguito }) => {
  return (
    <div className="lg:container  px-6 md:px-0  mx-auto">
      <div
        className="flex flex-col items-center md:flex-row "
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        // }}
      >
        <div style={{ flex: 1 }}>
          <h1
            className="max-w-[30rem]  text-[36px] font-bold  md:text-4xl"
            // style={{ maxWidth: "30rem", fontSize: "50px", fontWeight: "bold" }}
          >
            Building digital products & brands.{" "}
          </h1>
          <p
            style={{
              maxWidth: "38rem",
              fontSize: "20px",
              color: "gray",
              margin: "0 0 2rem",
            }}
          >
            Here at flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>

          <button
            style={{
              background: "#7e3af2",
              color: "white",
              padding: "0.7rem",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {" "}
            Start 30 day free trial
          </button>
          <button className="bg-whit p-3 border-none rounded-md ml-4 shadow-md shadow-[#e5e7eb]">
            {" "}
            Pricing & FAQ{" "}
          </button>
        </div>
        <img
          style={{ flex: 1 }}
          className="img-banner"
          src="./mar.png"
          alt=""
        />
      </div>
      <div
        className="flex flex-wrap justify-around gap-y-4 mt-8 md:flex-row"
        // style={{
        //   // width: "100%",
        //   display: "flex",
        //   justifyContent: "space-around",
        //   marginTop: "2rem",
        // }}
      >
        {/* <img src={google} alt="" />
        <img src={microsoft} alt="" />
        <img src={spotify} alt="" />
        <img src={mail} alt="" />
        <img src={air} alt="" />
        <img src={uber} alt="" /> */}

        {loguito.map((logo, i) => (
          <img key={i} src={logo} alt="" className="logos" />
        ))}
      </div>
    </div>
  );
};

export default Hero;
