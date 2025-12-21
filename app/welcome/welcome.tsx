import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { CircleX, Locate, ShieldAlert } from "lucide-react";

export function Welcome() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center items-stretch gap-6">
        {/* Card 1 */}
        <div className="w-full max-w-[360px] flex">
          <div className="flex flex-col w-full p-4 bg-white border-2 border-[#F3F4F6] rounded-2xl shadow-lg shadow-[#704EC41A]">
            <div className="p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB]">
              <p className="text-lg text-[#6D717F]">
                <span className="font-medium text-[#101828]">Red Team</span> as
                a Service
              </p>
              <p className="text-sm text-[#6D717F]">Best for small company</p>

              <div className="flex items-end gap-1 pt-4">
                <span className="text-lg font-semibold text-[#4D5461]">€</span>
                <span className="text-[40px] font-medium text-[#101828] leading-none">
                  1000
                </span>
                <span className="text-sm text-[#6D717F] mb-1">/per month</span>
              </div>

              <button className="w-full mt-10 py-2.5 rounded-lg bg-[#E5E7EB] text-sm font-medium">
                Current Plan
              </button>
            </div>

            <div className="flex-1 pt-4">
              <ul className="space-y-3 text-sm font-semibold">
                {[
                  "Monthly Insight Reports",
                  "Dedicated Account Manager",
                  "Encrypted File Sharing System",
                  "Pentesting",
                  "Retesting",
                  "Continuous Vulnerability Scans",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Locate size={14} />
                    {item}
                  </li>
                ))}{" "}
              </ul>
              <ul className="space-y-3 text-sm">
                {[
                  "Vulnerability Remediation",
                  "WAF Monitoring",
                  "Incident Response",
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-[#9CA3AF] ${
                      index === 0 ? "mt-4" : ""
                    }`}
                  >
                    <CircleX size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] text-sm">
              <p className="text-[#9CA3AF] mb-3">Additional Information</p>
              <div className="flex justify-between">
                <span>10 Hours</span>
                <span className="text-[#6D717F]">Monthly Credit Hours</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>1 Year</span>
                <span className="text-[#6D717F]">Minimum Contract Period</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-[360px] flex">
          <div className="flex flex-col w-full bg-[#6949B8] p-4 border-2 border-[#F3F4F6] rounded-2xl shadow-lg shadow-[#704EC41A]">
            <div className="p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB]">
              <p className="flex justify-between text-lg text-[#6D717F]">
                <div>
                  <span className="font-medium text-[#101828]">
                    Purple Team
                  </span>{" "}
                  as a Service
                </div>
                <button className=" bg-[#EEE7FE] rounded-2xl px-4">
                  <small>Popular</small>
                </button>
              </p>
              <p className="text-sm text-[#6D717F]">Best for medium company</p>
              <small className="flex gap-1 border-1 rounded-2xl mt-2 px-1 w-fit">
                <ShieldAlert color="#000000" strokeWidth={1} />
                Save up to €3000
              </small>

              <div className="flex items-end gap-1 pt-4">
                <span className="text-lg font-semibold text-[#4D5461]">€</span>
                <span className="text-[40px] font-medium text-[#101828] leading-none">
                  1750
                </span>
                <span className="text-sm text-[#6D717F] mb-1">/per month</span>
              </div>

              <button className="w-full mt-10 py-2.5 rounded-lg bg-[#131927] text-white text-sm font-medium">
                Start Plan
              </button>
            </div>

            <div className="flex-1 text-neutral-200 font-semibold pt-4">
              <ul className="space-y-3 text-sm ">
                {[
                  "Monthly Insight Reports",
                  "Dedicated Account Manager",
                  "Encrypted File Sharing System",
                  "Pentesting",
                  "Retesting",
                  "Continuous Vulnerability Scans",
                  "Vulnerability Remediation",
                  "WAF Monitoring",
                  "Incident Response",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Locate size={14} />
                    {item}
                  </li>
                ))}{" "}
              </ul>
            </div>

            <div className="mt-6 p-4 border border-[#E5E7EB] rounded-xl text-white text-sm">
              <p className="mb-3">Additional Information</p>
              <div className="flex justify-between">
                <span>20 Hours</span>
                <span className="">Monthly Credit Hours</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>1 Year</span>
                <span className="">Minimum Contract Period</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-[360px] flex">
          <div className="flex flex-col w-full p-4 bg-white border-2 border-[#F3F4F6] rounded-2xl shadow-lg shadow-[#704EC41A]">
            <div className="p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB]">
              <p className="text-lg text-[#6D717F]">
                <span className="font-medium text-[#101828]">Blue Team</span> as
                a Service
              </p>
              <p className="text-sm text-[#6D717F]">Best for large company</p>

              <div className="flex items-end gap-1 pt-4">
                <span className="text-lg font-semibold text-[#4D5461]">€</span>
                <span className="text-[40px] font-medium text-[#101828] leading-none">
                  1000
                </span>
                <span className="text-sm text-[#6D717F] mb-1">/per month</span>
              </div>

              <button className="w-full mt-10 py-2.5 rounded-lg bg-[#131927] text-white text-sm font-medium">
                Start Plan
              </button>
            </div>
            {/* --------------------------------- */}
            <div className="flex-1 pt-4">
              <ul className="space-y-3 text-sm font-semibold">
                {[
                  "Monthly Insight Reports",
                  "Dedicated Account Manager",
                  "Encrypted File Sharing System",
                  "Pentesting",
                  "Retesting",
                  "Continuous Vulnerability Scans",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Locate size={14} />
                    {item}
                  </li>
                ))}{" "}
              </ul>
              <ul className="space-y-3 text-sm">
                {[
                  "Vulnerability Remediation",
                  "WAF Monitoring",
                  "Incident Response",
                ].map((item, index) => (
                  <li
                    key={item}
                    className={`flex items-center gap-3 text-[#9CA3AF] ${
                      index === 0 ? "mt-4" : ""
                    }`}
                  >
                    <CircleX size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB] text-sm">
              <p className="text-[#9CA3AF] mb-3">Additional Information</p>
              <div className="flex justify-between">
                <span>10 Hours</span>
                <span className="text-[#6D717F]">Monthly Credit Hours</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>1 Year</span>
                <span className="text-[#6D717F]">Minimum Contract Period</span>
              </div>
            </div>
          </div>
        </div>
        {/* footer  */}
        <section className="w-full max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-gradient-to-r from-[#F5F3FF] to-white border border-[#E5E7EB]">
            {/* Left Content */}
            <div className="flex-1">
              <p className="text-sm font-medium text-[#6D28D9]">
                Security-on-Demand
              </p>
              <p className="mt-1 text-[#4B5563] text-base leading-snug">
                For partners who don’t want a subscription but do want security
                services at a{" "}
                <span className="font-medium text-[#111827]">
                  discounted hourly rate
                </span>
                .
              </p>
            </div>

            {/* Right Content */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <span className="text-[#6B7280] text-sm">€</span>
                <span className="text-2xl font-semibold text-[#111827]">
                  100
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-medium"
                >
                  Get Started
                </button>

                <button
                  type="button"
                  className="px-4 py-2 rounded-lg border border-[#E5E7EB] text-[#111827] text-sm font-medium bg-white"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
