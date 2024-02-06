import React from "react";
import SideBar from "../../Layout/SideBar";
import Title from "../../Components/Title";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Transactions from "./Transactions";
import Invoices from "./Invoices";
const Wallet = () => {
  return (
    <div className="grid gap-0 grid-cols-[auto,1fr,1fr]">
      <SideBar />
      <div className="px-[2.5rem] py-12  m-0 col-span-2">
        <div className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col flex-grow gap-5 items-start  w-full">
            <Title
              Title="Wallet"
              SubTitle="View and manage your wallet"
              links={[{ Link: "/Wallet", label: "Wallet" }]}
              className="border-none"
            />
          </div>
          <Tabs defaultValue="Transactions" className="w-full">
            <TabsList className="border-b border-gray-300 rounded-none pb-0 w-full justify-start gap-2">
              <TabsTrigger value="Transactions">Transactions</TabsTrigger>
              <TabsTrigger value="Invoices">Invoices</TabsTrigger>
            </TabsList>
            <TabsContent
              value="Transactions"
              className="flex flex-col gap-8 items-start w-full"
            >
              <Transactions />
            </TabsContent>
            <TabsContent value="Invoices" className="pt-8">
              <Invoices />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
