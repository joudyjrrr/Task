import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ForgetPassword: React.FunctionComponent<{
  setStep: React.Dispatch<React.SetStateAction<number>>;
}> = () => {
  return (
    <div className="w-full justify-center h-screen flex  p-0">
      <div className="flex  px-8 pb-12 flex-col pt-24 gap-8 max-w-[22.5rem] h-full max-sm:!px-4 max-sm:!py-12">
        <div className="flex flex-col items-center text-center gap-6 self-stretch bg-header-forget-bassword bg-cover bg-center">
          <div className="w-[3.5rem] h-[3.5rem] p-[0.875rem] flex justify-center items-center rounded-radius_xl border border-gray-200 shadow-sm">
            <img src={"/"} alt="key" className="" />
          </div>
          <h1 className="text-gray-900 text-[1.875rem] font-md leading-[2.375rem]">
            Forgot password?
          </h1>
          <p className="text-gray-600 text-Text-md  font-xs leading-6 self-stretch">
            No worries, we’ll send you reset instructions.
          </p>
        </div>

        <form className="w-full flex flex-col gap-6">
          <div>
            <Label>Email</Label>
            <Input placeholder="Email" />
          </div>
          <Link
            to="/auth/reset-password"
            className="w-full flex py-[0.625rem] px-4 justify-center items-center gap-[0.375rem] rounded-radius_md border
            !border-gray-300 shadow-sm text-gray-700 text-Text-md font-md leading-6"
          >
            Reset password
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
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
