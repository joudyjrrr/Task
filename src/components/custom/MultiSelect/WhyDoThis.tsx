import { Link } from "react-router-dom";
const WhyDoThis = () => {
  return (
    <div className="flex justify-between items-center gap-2 ">
      <img
        src={"/svg/global/info-circle.svg"}
        alt="info"
        className={"flex justify-between items-center"}
      />
      <Link
        to="/"
        className="underline self-start font-[460] leading-5 text-Gray-500 "
      >
        Why do we need this?
      </Link>
    </div>
  );
};

export default WhyDoThis;
