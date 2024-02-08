import Title from "@/components/custom/Title";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TransactionsTable from "@/components/wallet/TransactionsTable";
import InvoicesTable from "@/components/wallet/InvoicesTable";

const Wallet = () => {
  return (
    <div className="w-full px-[2.4rem] py-12">
      <div className="flex flex-col flex-grow gap-5 items-start  w-full">
        <Title
          Title="Wallet"
          SubTitle="View and manage your wallet"
          links={[{ Link: "/Wallet", label: "Wallet" }]}
          className="border-none"
        />
        <Tabs defaultValue="Transactions" className="w-full">
          <TabsList className="border-b border-gray-300 rounded-none pb-0 w-full justify-start gap-2">
            <TabsTrigger value="Transactions" className="!leading-[inherit]">Transactions</TabsTrigger>
            <TabsTrigger value="Invoices" className="!leading-[inherit]">Invoices</TabsTrigger>
          </TabsList>
          <TabsContent
            value="Transactions"
            className="flex flex-col gap-8 items-start w-full"
          >
            <TransactionsTable />
          </TabsContent>
          <TabsContent value="Invoices" className="pt-8">
            <InvoicesTable />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Wallet;
