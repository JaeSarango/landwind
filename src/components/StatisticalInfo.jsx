import check from "../assets/check.svg";
const StatisticalInfo = () => {
  const list = [
    "Continuous integration and deployment",
    " Development workflow",
    " Knowledge management",
  ];
  const list2 = [
    "Dynamic reports and dashboards",
    "Templates for everyone",
    "Templates for everyone",
    "Limitless business automation",
    "Knowledge management",
  ];

  return (
    <div className="mt-6 bg-[#F9FAFB] my-8">
      <div className="  md:flex items-center gap-2 lg:container  px-6 md:px-0  mx-auto mt-8 ">
        <div className=" flex-1">
          <p className="mb-8 text-slate-400 pt-8   max-w-[500px]">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <ul className="mb-5">
            {list.map((item, i) => (
              <li key={i} className="flex  ">
                <img src={check} alt="" />
                <p> {item}</p>
              </li>
            ))}
          </ul>
          <p className="max-w-[500px] text-slate-400 mb-6">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.
          </p>
        </div>
        <img className=" object-contain w-[600px]" src="/stadis.png" alt="" />
      </div>
      <div className="md:flex items-center justify-around  gap-x-16 lg:container  px-6 md:px-0  mx-auto   my-8">
        <img className="object-contain w-[600px]" src="/stad.png" alt="" />
        <div className="flex  flex-col ">
          <h3 className=" font-bold  text-[30px] md:text-3xl mb-4">
            {" "}
            We invest in the world’s potential{" "}
          </h3>
          <p className="mb-8 text-slate-400 max-w-[500px] ">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <ul className="mb-6">
            {list2.map((item, i) => (
              <li key={i} className="flex ">
                <img src={check} alt="" />
                <p> {item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatisticalInfo;
