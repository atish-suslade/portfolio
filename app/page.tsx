import { Portfolio } from "@/components/portfolio";
import { Toaster } from "sonner";
export default function Page() {
  return (
    <>
      <Toaster richColors position="top-left" />
      <Portfolio />
    </>
  );
}
