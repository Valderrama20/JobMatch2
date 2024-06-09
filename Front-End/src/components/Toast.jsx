import { useEffect } from "react";
import { Toaster, toast } from "sonner";

export default function Toast() {
  useEffect(() => {
    toast.success("todo bien");
  }, []);
  return (
    <div>
      <Toaster />
    </div>
  );
}
