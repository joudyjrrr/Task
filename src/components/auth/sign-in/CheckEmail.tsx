import { Link } from "react-router-dom";
import Mail from "../../../../Assets/SVGs/SingIn/mail-01.svg";

const CheckEmail: React.FunctionComponent<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setStep }) => {
  return (
    <div className="w-full justify-center h-screen flex  p-0">
      <div className="flex  px-8 pb-12 flex-col pt-24 gap-8 max-w-[22.5rem] h-full max-sm:!px-4 max-sm:!py-12">
        <div className="flex flex-col items-center text-center gap-6 self-stretch bg-header-forget-bassword bg-cover bg-center">
          <img src={Mail} alt="" className="" />
          <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
            Check your email
          </h1>
          <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
            We sent a verification link to olivia@untitledui.com
          </p>
        </div>
        <Link
          to="/auth/sign-in/set-code"
          className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm"
        >
          Enter code manually
        </Link>
        <Link
          to="/sign-in"
          className="cursor-pointer w-full flex  justify-center items-center gap-[0.375rem]  text-gray-600 text-Text-sm font-md leading-5"
        >
          <svg
            className="w-[1.25rem] h-[1.25rem]"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3332 10H4.6665M4.6665 10L10.4998 15.8333M4.6665 10L10.4998 4.16667"
              stroke="#475467"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Back to log in
        </Link>
      </div>
    </div>
  );
};

export default CheckEmail;
