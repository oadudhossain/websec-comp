import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import {
  CircleCheck,
  CircleX,
  CloudDownload,
  Download,
  GlobeIcon,
  Locate,
  MailPlus,
  Plus,
  ShieldAlert,
} from "lucide-react";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
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
      {/* NEW TARIF PLAN -------- */}
      <section className="mt-5 w-137.5 h-123 rounded-2xl bg-white p-6 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#111827]">
            New tarif Plan
          </h2>
        </div>
        {/* Subtitle ---------------- */}
        <div className="rounded-2xl mb-4 bg-[#F8F8FC] p-6 shadow-sm">
          <div className="flex justify-between ">
            <p className="text-xs font-semibold text-[#111827] mb-1">
              Red Team as a Service + Additional Hours
            </p>
            <span className="px-3 py-1 rounded-full bg-[#543A93] text-white text-xs font-medium">
              inv-10124
            </span>
          </div>

          <p className="text-sm text-[#6B7280] my-3">
            This invoice is for services provided under the{" "}
            <span className="font-medium text-[#101828]">
              Red Team as a Service
            </span>{" "}
            tariff plan.
          </p>

          {/* Details */}
          <div className="space-y-2 text-sm mb-6">
            <div className="flex items-center gap-2 text-[#374151]">
              <span className="flex items-center justify-center text-[#312256] text-xs">
                <CircleCheck size={18} strokeWidth={2.5} />
              </span>
              <span>
                Hours Estimated: <strong className="text-base">12 hours</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#374151]">
              <span className="flex items-center justify-center text-[#312256] text-xs">
                <CircleCheck size={18} strokeWidth={2.5} />{" "}
              </span>
              <span>
                Hours Spent: <strong className="text-base">18 hours</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#374151]">
              <span className="flex items-center justify-center text-[#312256] text-xs">
                <CircleCheck size={18} strokeWidth={2.5} />
              </span>
              <span>
                Additional Hours: <strong className="text-base">6 hours</strong>
              </span>
            </div>
            <div className="flex items-center gap-2 text-[#374151]">
              <span className="flex items-center justify-center text-[#312256] text-xs">
                <CircleCheck size={18} strokeWidth={2.5} />{" "}
              </span>
              <span>
                Hours Staked: <strong className="text-base">18 hours</strong>
              </span>
            </div>
          </div>

          {/* Amount */}
          <div className="border-t border-[#E5E7EB] pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-[#111827]">
                  Amount:
                </p>
                <p className="text-xs text-[#6B7280]">Monthly billing</p>
              </div>

              <div>
                <p className="text-3xl font-medium text-[#111827]">
                  {" "}
                  <span className="text-base text-[#6D717F]">€</span> 1500.00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            className="flex px-11.5 gap-2 py-2 rounded-lg border border-[#000000] text-base font-semibold"
          >
            <Download className="" />
            Download the bill
          </button>

          <button
            type="button"
            className="flex px-11.5 gap-2 py-2 rounded-lg bg-[#131927] text-white text-base font-semibold"
          >
            <MailPlus color="#ffffff" /> Send to Email
          </button>
        </div>
      </section>
      {/* Bill has been sent CARD------------- */}
      <section className="my-10">
        <div className="w-112.5 h-70  bg-white rounded-2xl p-6 shadow-xl text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <MailPlus color="#c24242" strokeWidth={2} />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-[#111827]">
            Bill has been sent
          </h2>

          {/* Message */}
          <p className="text-base text-[#46484b] mt-2 leading-relaxed">
            The bill was successfully sent to your email <br />
            <span className="font-semibold text-[#111827]">
              contact@websec.nl, finance@websec.nl.
            </span>
          </p>

          {/* Button */}
          <button
            type="button"
            className="w-full mt-6 py-3 rounded-lg bg-[#111827] text-white text-sm font-medium"
          >
            Done
          </button>
        </div>
      </section>
      {/* Get in touch -------------------- */}
      <section className="w-full h-80 rounded-3xl px-6 py-7 mb-5 shadow-2xl relative overflow-hidden">
        <div className="relative content-center">
          <div
            className="w-2/4 h-40 absolute -top-13 left-5 bg-no-repeat bg-right bg-contain"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/gMhB9N6h/Layer-2.png')",
              backgroundSize: "contain",
              backgroundPosition: "left center",
            }}
          />
          <div
            className="w-2/4 h-48 absolute top-68 -left-6 bg-no-repeat bg-bottom bg-contain"
            style={{
              backgroundImage:
                "url('https://i.ibb.co.com/M576mWyF/Layer-1.png')",
              backgroundSize: "contain",
              backgroundPosition: "",
            }}
          />
        </div>
        <div></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE – Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-[#111827]">
              Get in Touch
            </h2>

            <div>
              <p className="text-sm text-[#6B7280]">Email</p>
              <p className="text-lg font-semibold text-[#111827] mt-1">
                contact@company.com
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6B7280]">Phone</p>
              <p className="text-base font-semibold text-[#111827] mt-1">
                +1 (123) 122 1000
              </p>
            </div>

            <div>
              <p className="text-sm text-[#6B7280]">Address</p>
              <p className="text-lg font-semibold text-[#111827] mt-1 leading-snug">
                120 Market Street, San Francisco, CA
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – Contact Form */}
          <div className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="font-normal text-base text-[#111827]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-2 focus:ring-[#6D28D9] outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[#111827]">Email</label>
              <input
                type="email"
                placeholder="Enter your business email"
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] focus:ring-2 focus:ring-[#6D28D9] outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-[#111827]">Message</label>
              <textarea
                placeholder="Write your message here..."
                rows={5}
                className="w-full mt-1 px-4 py-3 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] resize-none focus:ring-2 focus:ring-[#6D28D9] outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full max-h-10 py-3 rounded-lg bg-[#111827] text-white text-sm font-semibold hover:bg-black transition"
            >
              Submit Message
            </button>
          </div>
        </div>
      </section>
      {/* Knowledge base and faq -------- */}
      <section className="w-full bg-gradient-to-br from-[#FFF4F4] to-[#EFEFFF] py-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 items-stretch">
            {/* Left side 1/3 */}
            <div className="lg:col-span-1 flex h-full flex-col">
              <div>
                <h2 className="text-3xl font-semibold text-[#0E121B]">
                  Knowledge base & FAQ
                </h2>

                <p className="mt-2 text-sm text-[#525866]">
                  Answer to popular questions
                </p>
              </div>

              {/*  background */}
              <div className="relative mt-auto">
                <div
                  className="w-120 h-110 bg-no-repeat bg-contain bg-left"
                  style={{
                    backgroundImage:
                      "url('https://i.ibb.co.com/nqGPyJJL/Group-1.png')",
                  }}
                />
              </div>
            </div>

            {/* Right side ----- */}
            <div className="lg:col-span-2">
              <Accordion
                type="single"
                collapsible
                defaultValue="item-2"
                className="w-full space-y-4"
              >
                <AccordionItem
                  value="item-1"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    Is all the information stored on the website public or
                    confidential?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    All sensitive data is securely stored and protected using
                    industry standard encryption and access controls.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    How is the user rating table formed and how to get to it?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    What does a paid subscription on the WebSec?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    A paid subscription unlocks advanced analytics, extended
                    monitoring, and priority support features.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    How long will it take for support to respond to my request?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    Support requests are typically answered within 24 hours on
                    business days.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    Is the website connected to WebSec and how?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    Yes. The website integrates directly with WebSec using
                    secure API connections.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-xl border border-[#E6E8EC] bg-white px-5"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-[#0E121B]">
                    How can I cancel my subscription plan?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-[#131927] leading-relaxed">
                    You can cancel your plan at any time from your account
                    settings page.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* Profile --------------- */}
      <section
        className="w-full py-6 px-6"
        style={{
          background: "linear-gradient(125.5deg, #FFF4F4 0%, #EFEFFF 70.82%)",
        }}
      >
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Top card */}
          <div className="mx-auto max-w-7xl">
            {/* Gradient card */}
            <div
              className="relative h-[96px] rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #CF0F99 0%, #A63386 10%, #884EC7 50%, #EBE2F4 75%, #FFFFFF 100%)",
              }}
            />

            {/* Content row */}
            <div className="relative -mt-8 flex justify-between px-4">
              {/* Left user info */}
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-white shadow flex items-center justify-center text-xl">
                  👨‍💼
                </div>

                <div className="absolute top-9 left-26">
                  <p className="text-lg font-semibold text-[#0E121B]">
                    Joel Aivad Ossi
                  </p>
                  <p className="text-sm text-[#394050]">
                    joel.upwork@gmail.com
                  </p>
                </div>
              </div>

              {/* Right buttons */}
              <div className="flex gap-3 absolute top-10 left-9/12">
                <button className="rounded-md border border-[#E6E8EC] px-4 py-1.5 text-xs text-[#525866] hover:bg-gray-100">
                  Cancel
                </button>
                <button className="rounded-md bg-[#0E121B] px-4 py-1.5 text-xs text-white hover:bg-black">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Profile settings header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0E121B]">
                Profile settings
              </h2>
              <p className="text-sm text-[#525866]">
                Here you can configure your personal information
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm">
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#4D5461] hover:bg-gray-100 hover:text-[#131927]">
                Profile
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Socials
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Notifications
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Privacy Security
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full rounded-2xl bg-white my-5 p-6 gap-6">
          {/* Public profile */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-[#0E121B]">
                Public profile
              </h3>
              <p className="mt-1 text-base text-[#525866]">
                Update your public information that is visible to others.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Joel Aviad Ossi"
                  className="mt-2 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]"
                />
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  defaultValue="joel.upwork@gmail.com"
                  className="mt-2 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]"
                />

                <div className="flex gap-2 mt-2 rounded-lg bg-[#EEF6FF] px-4 py-2 text-xs text-[#131927]">
                  <ShieldAlert color="#272525" /> We have sent email to
                  joelk.upwork@gmail.com. We will keep using joel.ossi@gmail.com
                  until you confirm the new address
                </div>
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Username
                </label>

                <input
                  type="text"
                  defaultValue="webseccl"
                  className="mt-2 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Type of account
                </label>
                <select className="mt-2 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm">
                  <option>Security Researcher</option>
                </select>
              </div>
            </div>
          </div>

          <hr className="border-[#E6E8EC]" />

          {/* Profile picture */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-[#0E121B]">
                Profile picture
              </h3>
              <p className="mt-1 text-sm text-[#525866]">
                Upload your profile picture.
              </p>
            </div>

            <label
              htmlFor="profile-upload"
              className="flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-[#D1D5DB] bg-[#FAFAFF] py-10 text-center"
            >
              <div className="text-sm text-[#525866]">
                <div className="justify-items-center">
                  <CloudDownload color="#272525" />
                </div>
                <div className="flex gap-1 justify-center">
                  <p className="text-base underline font-semibold text-[#131927]">
                    Click to upload
                  </p>
                  <p className="text-base font-semibold text-[#131927]">
                    or drag and drop
                  </p>
                </div>

                <p className="mt-1 text-xs text-[#6D717F]">
                  Min 400x400px, PNG or JPEG formats.
                </p>
              </div>

              <input
                id="profile-upload"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
              />
            </label>
          </div>

          <hr className="border-[#E6E8EC]" />

          {/* Country & Location */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-[#0E121B]">
                Country & Location
              </h3>
              <p className="mt-1 text-sm text-[#525866]">
                Update your country and location.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Select Country{" "}
                  <span className="text-[#525866]">(optional)</span>
                </label>
                <select className="mt-2 w-full rounded-lg border border-[#9c9696] px-4 py-2 text-sm">
                  <div>
                    <GlobeIcon color="#272525" />
                  </div>
                  <option>Select a country...</option>
                  <option>Bangladesh</option>
                  <option>China</option>
                </select>
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Location <span className="text-[#525866]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="mt-2 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          <hr className="border-[#E6E8EC]" />

          {/* General information */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-base font-semibold text-[#0E121B]">
                General information
              </h3>
              <p className="mt-1 text-sm text-[#525866]">
                Here you can add a description about yourself.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-semibold text-[#0E121B]">
                    Open for employment
                  </p>
                  <p className="text-sm text-[#525866]">
                    Let others know you're looking for permanent employment
                    opportunities by adding a tag to your user profile.
                  </p>
                </div>
                {/* Toggle Switch ---------- */}
                <div className=""></div>
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  Intro <span className="text-[#525866]">(Optional)</span>
                </label>
                <textarea
                  placeholder="Enter your info..."
                  className="mt-2 h-24 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
                <p className="mt-1 text-right text-xs text-[#9CA3AF]">0/200</p>
              </div>

              <div>
                <label className="text-base font-semibold text-[#0E121B]">
                  About me <span className="text-[#525866]">(Optional)</span>
                </label>
                <textarea
                  placeholder="Enter your info..."
                  className="mt-2 h-24 w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
                <p className="mt-1 text-right text-xs text-[#9CA3AF]">0/200</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Social Links ---------- */}
      <section
        className="w-full py-6 px-6"
        style={{
          background: "linear-gradient(125.5deg, #FFF4F4 0%, #EFEFFF 70.82%)",
        }}
      >
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Top card */}
          <div className="mx-auto max-w-7xl">
            {/* Gradient card */}
            <div
              className="relative h-[96px] rounded-2xl"
              style={{
                background:
                  "linear-gradient(90deg, #CF0F99 0%, #A63386 10%, #884EC7 50%, #EBE2F4 75%, #FFFFFF 100%)",
              }}
            />

            {/* Content row */}
            <div className="relative -mt-8 flex justify-between px-4">
              {/* Left user info */}
              <div className="flex items-center gap-4">
                <div className="h-20 w-20 overflow-hidden rounded-full bg-white shadow flex items-center justify-center text-xl">
                  👨‍💼
                </div>

                <div className="absolute top-9 left-26">
                  <p className="text-lg font-semibold text-[#0E121B]">
                    Joel Aivad Ossi
                  </p>
                  <p className="text-sm text-[#394050]">
                    joel.upwork@gmail.com
                  </p>
                </div>
              </div>

              {/* Right buttons */}
              <div className="flex gap-3 absolute top-10 left-9/12">
                <button className="rounded-md border border-[#E6E8EC] px-4 py-1.5 text-xs text-[#525866] hover:bg-gray-100">
                  Cancel
                </button>
                <button className="rounded-md bg-[#0E121B] px-4 py-1.5 text-xs text-white hover:bg-black">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Profile settings header */}
          <div className="flex items-center justify-between pb-10">
            <div>
              <h2 className="text-lg font-semibold text-[#0E121B]">
                Profile settings
              </h2>
              <p className="text-sm text-[#525866]">
                Here you can configure your personal information
              </p>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 rounded-lg bg-white p-1 shadow-sm">
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#4D5461] hover:bg-gray-100 hover:text-[#131927]">
                Profile
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Socials
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Notifications
              </button>
              <button className="rounded-md px-4 py-1.5 text-sm font-semibold text-[#525866] hover:bg-gray-100 hover:text-[#131927]">
                Privacy Security
              </button>
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl bg-white p-6">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Website */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#0E121B]">
                  Website <span className="text-[#525866]">(optional)</span>
                </label>
                <input
                  type="url"
                  defaultValue="https://websec.nl/"
                  className="w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]"
                />
                <p className="text-xs text-[#6D717F]">
                  Input your current website if you have
                </p>
              </div>

              {/* Twitter */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#0E121B]">
                  Twitter (X) <span className="text-[#525866]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Twitter (X)"
                  className="w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
                <p className="text-xs text-[#6D717F]">
                  https://twitter.com/name
                </p>
              </div>

              {/* Discord */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#0E121B]">
                  Discord channel{" "}
                  <span className="text-[#525866]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Link to channel"
                  className="w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
                <p className="text-xs text-[#6D717F]">
                  https://discord.com/name
                </p>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#0E121B]">
                  LinkedIn <span className="text-[#525866]">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Your LinkedIn"
                  className="w-full rounded-lg border border-[#E6E8EC] px-4 py-2 text-sm"
                />
                <p className="text-xs text-[#6D717F]">
                  https://linkedin.com/in/name
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
