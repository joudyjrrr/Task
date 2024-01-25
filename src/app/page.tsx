import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()
      <Button
        size={"sm"}
        className=""
      >
        Button
      </Button>
      <Button color="#FF0000" variant={"outline"}>
        Test
      </Button>
    </>
  );
}
