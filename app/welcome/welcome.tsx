import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <div className="p-4 border border-[#F3F4F6]">
      <div className="p-6 space-y-2 border-2 border-[#F3F4F6] backdrop-blur-md shadow-lg shadow-[#704EC41A]">
        <p className="text-[#6D717F] text-lg">
          <span className="font-semibold  text-[#101828]">Red team</span> as a
          Service
        </p>
        <p className="text-sm">Best for small company</p>
      </div>

      <div className="mt-4 ">
        <span className="font-semibold text-lg text-[#4D5461] mr-1">€</span>
        <span className="text-black mr-1 text-[40px] font-semibold">1000</span>
      </div>
    </div>
  );
}
