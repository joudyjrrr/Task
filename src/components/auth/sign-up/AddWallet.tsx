import CustomSelect from "@/components/custom/MultiSelect/CustomSelect";
import SVGBackGround from "@/components/custom/MultiSelect/SVGBackGround";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddWalletProps {
}

const AddWallet: React.FunctionComponent<AddWalletProps> = () => {
  return (
    <div>
      <div className="flex flex-col justify-between items-center gap-6">
        <SVGBackGround src={"/svg/global/wallet.svg"} alt="wallet" />
        <div className="flex flex-col items-center justify-between">
          <p className="flex items-center justify-center text-Text-sm font-md text-gray-950 leading-8">
            Add Wallet
          </p>
          <p className="flex items-center justify-center text-Text-sm h-5 text-gray-400 font-[460] leading-8">
            We will need it to transfer the payment to you
          </p>
        </div>
      </div>
      {/* second */}
      <div className="flex flex-col items-center justify-center gap-6 w-full">
        <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
          <Label>Bank Name</Label>
          <CustomSelect
            values={["1", "2", "3"]}
            TriggerClassName=""
            placeholder="Select a Bank"
            label="Select a Bank"
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
          <Label>IBAN</Label>
          <Input placeholder="TR330...." />
        </div>
        <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
          <Label>Account Number</Label>
          <Input placeholder="01234..." />
        </div>
        <div className="flex flex-col items-start justify-between gap-[0.38rem] w-full">
          <Label>Account Holder Name</Label>
          <Input placeholder="Full legal Name" />
        </div>
      </div>
      {/* third */}
      <Button className="bg-Brand-600 text-Base-White w-full py-[10px] px-4 shadow-xs rounded-lg border border-Brand-600">
        Add Wallet
      </Button>
    </div>
  );
};

export default AddWallet;
