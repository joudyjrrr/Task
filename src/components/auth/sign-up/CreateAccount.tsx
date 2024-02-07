import EmailInput from "@/components/custom/EmailInput";
import PhoneNumberInput from "@/components/custom/PhoneNumberInput";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@radix-ui/react-select";
import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";

interface CreateAccountProps {
    setStep: MouseEventHandler<HTMLButtonElement>;
}

const CreateAccount: React.FunctionComponent<CreateAccountProps> = ({
  setStep,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full bg-Brand-25 w-[64px] h-[64px] p-[10px] flex justify-center items-center">
          <img src={"/svg/global/logo-mark.svg"} alt={"Humy"} />
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="flex items-center justify-center text-Text-sm text-gray-950 font-medium leading-8">
            Create your Humy account
          </p>
          <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[480] leading-8">
            Sign up to get started
          </p>
        </div>
      </div>
      <form className="w-full">
        <div className="grid grid-cols-1 grid-rows-4 !auto-rows-[auto_auto_auto_auto] gap-6 ">
          <div className="h-[4.375rem] flex flex-col justify-between">
            <Label>Full Name</Label>
            <Input
              placeholder="Full Legal name"
              className="border-Gray-300 border"
            />
          </div>
          <div className="h-[4.375rem] flex flex-col justify-between">
            <PhoneNumberInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="h-[4.375rem] flex flex-col justify-between">
            <EmailInput label="Email" placeholder="olivia@untitledui.com" />
          </div>
          <div className="h-[4.375rem] flex flex-col justify-between">
            <Label>Type of Business</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type of Business</SelectLabel>
                  <SelectItem value="One">One</SelectItem>
                  <SelectItem value="Two">Two</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 !auto-rows-[auto] gap-4">
            <Label>Bio (Optional)</Label>
            <Textarea
              placeholder="Tell us about yourself"
              className="resize-none py-[0.75rem] h-[9.625rem] px-[0.875rem] font-normal"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="font-medium leading-10 !text-gray-500"
          >
            I have read and agreed to the{" "}
            <span className="text-Brand-600">terms and conditions.</span>
          </label>
        </div>

        <Button
          onClick={setStep}
          type="button"
          className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm"
        >
          Continue
        </Button>
      </form>
    </>
  );
};

export default CreateAccount;
