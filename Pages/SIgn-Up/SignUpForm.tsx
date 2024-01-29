import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import PhoneNumberInput from "../../Components/PhoneNumberInput";
import { Checkbox } from "@/components/ui/checkbox";
import EmailInput from '../../Components/EmailInput';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SignUpForm = () => {
  return (
    <>
      <form className="w-full">
        <div className="grid grid-cols-1 grid-rows-4 !auto-rows-[auto_auto_auto_auto] gap-6 ">
          <div className="h-[4.375rem] flex flex-col justify-between">
            <Label>Full Name</Label>
            <Input placeholder="Full Legal name" />
          </div>
          <div className="h-[4.375rem] flex flex-col justify-between">
            <PhoneNumberInput
              label="Phone Number"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div className="h-[4.375rem] flex flex-col justify-between">
            <EmailInput label='Email' placeholder = 'olivia@untitledui.com'/>
            
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

        <Button className="w-full text-white flex py-[0.625rem] px-4 justify-center items-center gap-[.375rem] rounded-radius_md bg-Brand-600 border border-Brand-600 shadow-sm">
          Continue
        </Button>
      </form>
    </>
  );
};

export default SignUpForm;
