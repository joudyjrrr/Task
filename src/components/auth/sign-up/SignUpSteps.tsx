import SVGBackGround from "@/components/custom/MultiSelect/SVGBackGround";

const Steps = [
  {
    image: "/svg/global/user.svg",
    Content1: "Personal details",
    Content2: "we'd like to get to know you",
  },
  {
    image: "/svg/sign-in/package-plus.svg",
    Content1: "Kitchen details",
    Content2: "Your kitchen and items",
  },
  {
    image: "/svg/global/wallet.svg",
    Content1: "Wallet details",
    Content2: "To receive your payment",
  },
];

const SignUpSteps: React.FunctionComponent<{ step: number | string }> = ({
  // step,
}) => {
  return (
    <div className="w-full h-full ">
      <span className=" w-full py-6 flex flex-col justify-center items-center">
        <ul className="p-2 flex items-start justify-between gap-4">
          {Steps.map((step, idx) => (
            <li
              key={idx}
              className="flex flex-col w-80 items-center gap-3 flex-shrink-0"
            >
              <div
                className={`relative z-40 after:content-[' '] ${
                  idx === 2 ? "" : "after:absolute"
                } after:top-[calc(50%-1px)] after:left-1/2 after:h-0.5 after:w-[21rem] after:bg-[#EAECF0] after:-z-10`}
              >
                <SVGBackGround src={step.image} alt={step.image} />
              </div>
              <div className="">
                <p className="font-semibold leading-5 text-Text-sm text-gray-800 text-center">
                  {step.Content1}
                </p>
                <p className="font-[440] leading-5 text-gray-600 text-Text-sm">
                  {step.Content2}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default SignUpSteps;
