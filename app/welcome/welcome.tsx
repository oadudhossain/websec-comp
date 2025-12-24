import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import { CircleX, Locate, Plus, ShieldAlert } from "lucide-react";
import React, { useState } from "react";
type PaymentMethod = "visa" | "mastercard" | "paypal";

export function Welcome() {
  const [selected, setSelected] = useState<PaymentMethod>("visa");

  const Radio = ({ active }: { active: boolean }) => (
    <span
      className={`w-5 h-5 rounded-full flex items-center justify-center border transition ${
        active ? "bg-[#6D28D9] border-[#6D28D9]" : "border-[#D1D5DB]"
      }`}
    >
      {active && <span className="w-2.5 h-2.5 bg-white rounded-full" />}
    </span>
  );
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white border-2 border-[#F3F4F6]">
            {/* Left Content */}
            <div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Security-on-Demand</p>
                <p className="mt-1 text-[#7b828b] text-2xl leading-snug">
                  For partners who don’t want a subscription but do <br /> want
                  security services{" "}
                  <span className="font-medium text text-[#111827]">
                    at a discounted hourly rate.
                  </span>
                  .
                </p>
              </div>
            </div>
            {/* BG IMAGE  */}
            <div className="relative content-center">
              <div
                className="w-96 h-32 absolute -top-16 -left-44 rounded-2xl bg-no-repeat bg-right bg-contain"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co/20KfrzHH/Clip-path-group.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "right center",
                }}
              />
            </div>
            {/* Right Content */}
            <div className="grid">
              <div className="">
                <span className="text-[#6B7280] text-sm">€</span>
                <span className="text-2xl font-semi]bold text-[#111827]">
                  100
                </span>
                <span className="text-[#6B7280]">/per month</span>
              </div>
              <div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg bg-[#8C61F533] text-[#280072] text-sm font-semibold"
                    >
                      Get Started
                    </button>

                    <button
                      type="button"
                      className="px-4 py-2 rounded-lg border border-[#280072] text-[#280072] text-sm font-medium bg-white"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* BILLING ---------------------- */}
      <section className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-[#131927] border-2 border-[#F3F4F6]">
          {/* Left Content */}
          <div>
            <div className="flex-1">
              <p className="text-sm text-white font-semibold">
                Red Team as a Service
              </p>
              <small className="mt-1 text-[#7b828b]  leading-snug">
                This your current workspace plan. You can manage your
                subscription, top-up limit, and other features. .
              </small>
              <p className="py-3 text-gray-300 text-sm font-semibold">
                365 days remaining
              </p>
              <div className="py-2">
                <button
                  type="button"
                  className="px-3 py-1 rounded-lg border border-[#FF94A6] text-[#FF94A6] text-sm font-medium "
                >
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
          {/* BG IMAGE  */}
          <div className="relative content-center">
            <div
              className="min-w-3xl h-40 absolute -top-20 -right-66 bg-no-repeat bg-right"
              style={{
                backgroundImage:
                  "url('https://i.ibb.co.com/21MfhsF2/Vector.png')",
                backgroundSize: "contain",
                backgroundPosition: "right center",
              }}
            />
          </div>
          {/* Right Content */}
          <div className="grid">
            {/* <div className="relative content-center">
              <div
                className="min-w-3xl h-40 absolute -top-20 -right-2/6 bg-no-repeat bg-right"
                style={{
                  backgroundImage:
                    "url('https://i.ibb.co.com/B53mVMnX/Vector-1.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "right center",
                }}
              />
            </div> */}

            <div className="flex items-center justify-between rounded-2xl bg-[#222A3C] px-6 gap-10 py-5 text-white shadow-lg">
              {/* Left content */}
              <div>
                <div>
                  <p className="text-sm text-[#9EA2AE]">Outstanding Balance</p>

                  <p className="mt-1 text-lg font-medium">
                    12 hours <span className="text-[#9EA2AE]">/ 100$</span>
                  </p>
                </div>
                {/* right  */}
                <button
                  type="button"
                  className="mt-4 px-4 py-1.5 rounded-lg border border-[#9EA2AE] text-sm text-[#F3F4F6] hover:bg-[#374151] transition"
                >
                  Edit Hours
                </button>
              </div>

              {/* -------   */}
              <div className="flex flex-col gap-y-1 justify-between rounded-xl bg-[#F5F3FF] -mt-9 px-2 py-3 text-[#111827] min-w-[110px] h-[64px]">
                <div>
                  <img
                    className="w-12 rounded-sm "
                    src="https://i.ibb.co.com/tNWHc41/images-1.jpg"
                    alt=""
                  />
                </div>

                <span className="text-sm pl-2 font-semibold tracking-wide">
                  **1213
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Paymant details ----------- */}
      <section className="p-6 w-full max-w-6xl mx-auto mt-5 bg-white border-2 border-[#F3F4F6] rounded-2xl shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left info */}
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-[#111827]">
              Payment details
            </h2>
            <p className="text-sm text-[#6B7280]">
              Select default payment method.
            </p>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-2 space-y-3">
            {/* VISA */}
            <div
              role="radio"
              aria-checked={selected === "visa"}
              onClick={() => setSelected("visa")}
              className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition ${
                selected === "visa"
                  ? "bg-[#F5F3FF] border-[#EDE9FE]"
                  : "bg-white border-[#E5E7EB]"
              }`}
            >
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-12 rounded-sm"
                    src="https://i.ibb.co.com/tNWHc41/images-1.jpg"
                    alt=""
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#111827]">
                    Visa ending in 1213
                  </p>
                  <p className="text-xs text-[#6B7280]">Expiry 08/2026</p>

                  <div className="flex gap-4 pt-1 text-xs">
                    <button className="text-[#6D28D9] font-medium">
                      Set as default
                    </button>
                    <button className="text-[#6B7280]">Edit</button>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Radio active={selected === "visa"} />
              </div>
            </div>

            {/* MASTERCARD */}
            <div
              role="radio"
              aria-checked={selected === "mastercard"}
              onClick={() => setSelected("mastercard")}
              className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition ${
                selected === "mastercard"
                  ? "bg-[#F5F3FF] border-[#EDE9FE]"
                  : "bg-white border-[#E5E7EB]"
              }`}
            >
              <div className="flex gap-4">
                <div>
                  <img
                    className="w-11 rounded-sm "
                    src="https://i.ibb.co.com/5Wv8hZ5C/Mastercard-logo.webp"
                    alt=""
                  />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#111827]">
                    Master Card ending in 1213
                  </p>
                  <p className="text-xs text-[#6B7280]">Expiry 08/2026</p>

                  <div className="flex gap-4 pt-1 text-xs">
                    <button className="text-[#6D28D9] font-medium">
                      Set as default
                    </button>
                    <button className="text-[#6B7280]">Edit</button>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Radio active={selected === "mastercard"} />
              </div>
            </div>

            {/* PAYPAL */}
            <div
              role="radio"
              aria-checked={selected === "paypal"}
              onClick={() => setSelected("paypal")}
              className={`flex items-start justify-between p-4 rounded-xl border cursor-pointer transition ${
                selected === "paypal"
                  ? "bg-[#F5F3FF] border-[#EDE9FE]"
                  : "bg-white border-[#E5E7EB]"
              }`}
            >
              <div className="flex ">
                <div>
                  <img
                    className="w-5 rounded-sm ml-3"
                    src="https://i.ibb.co.com/ksK21fSD/Vector-2.png"
                    alt=""
                  />
                </div>

                <div className="space-y-1 ml-7">
                  <p className="text-sm font-medium text-[#111827]">
                    PayPal ending in 1213
                  </p>
                  <p className="text-xs text-[#6B7280]">Jhon Doe</p>
                  <p className="text-xs text-[#6B7280]">contact@websec.nl</p>

                  <div className="flex gap-4 pt-1 text-xs">
                    <button className="text-[#6D28D9] font-medium">
                      Set as default
                    </button>
                    <button className="text-[#6B7280]">Edit</button>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Radio active={selected === "paypal"} />
              </div>
            </div>
            <button
              type="button"
              className="flex px-6 py-3 mt-5 rounded-lg bg-[#131927] text-white font-medium"
            >
              <Plus color="#cbbdbd" className="mr-2" />
              Add new payment method
            </button>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex justify-end gap-3 mt-8 pt-6">
          <button
            type="button"
            className="px-6 py-2 w-40 h-12 rounded-lg border border-[#131927] text-sm font-medium"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-6 py-2 w-40 h-12 rounded-lg bg-[#131927] text-white text-sm font-medium"
          >
            Save
          </button>
        </div>
      </section>
    </section>
  );
}
