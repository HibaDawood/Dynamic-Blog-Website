"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Field, Label, Switch } from "@headlessui/react";

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div
      className="isolate px-6 py-20 sm:py-32 lg:px-8 bg-cover bg-center h-[950px]"
      style={{ backgroundImage: `url('/picture/c.png')` }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <h2
          style={{
            fontFamily: "Lobster",
            fontWeight: 500,
          }}
          className="text-balance text-4xl font-semibold tracking-wide 
         -mt-20 xs:-mt-10 text-myDarkestPr sm:text-5xl"
        >
          Contact Us
        </h2>
        <p
          style={{
            fontFamily: "Saira",
            fontWeight: 500,
          }}
          className="mt-2 text-lg/8 text-myDarkPr"
        >
          Reach out to us for inquiries, support, or collaborations—your
          connection matters!
        </p>
      </div>
      <form
        style={{
          fontFamily: "Saira",
          fontWeight: 500,
        }}
        action="#"
        method="POST"
        className="mx-auto max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 ">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-myDarkestPr"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base
                 text-myDarkestPr outline outline-1 -outline-offset-1 outline-gray-300
                  placeholder:text-purple-600 focus:outline focus:outline-2 focus:-outline-offset-2
                   focus:outline-myLightPr"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base
                 text-myDarkestPr outline outline-1 -outline-offset-1 outline-gray-300
             placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2
              focus:outline-myLightPr"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-myDarkestPr"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base
                 text-myDarkestPr outline outline-1 -outline-offset-1 outline-gray-300
                  placeholder:text-purple-600 focus:outline focus:outline-2 focus:-outline-offset-2
                   focus:outline-myLightPr"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-myDarkestPr"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-purple-50 px-3.5 py-2 text-base text-myDarkestPr outline
                 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-purple-600 
                 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-myLightPr"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-myDarkestPr"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div
                className="flex rounded-md bg-purple-50 outline outline-1 -outline-offset-1
               outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 
               has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-myLightPr"
              >
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pl-3.5
                     pr-7 text-base text-myDarkestPr placeholder:text-purple-900 
                     focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-myLightPr sm:text-sm/6"
                  >
                    <option>PK</option>
                    <option>CN</option>
                    <option>US</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 xs:mx-auto size-5 self-center
                     justify-self-end
                     text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-myDarkestPr
                   placeholder:text-purple-900 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-myDarkestPr
                outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-purple-600 focus:outline
                 focus:outline-2 focus:-outline-offset-2 focus:outline-myLightPr"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-400 p-px ring-1
                 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-myLightPr
                  data-[checked]:bg-myDarkPr"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white shadow-sm ring-1
                   ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-myDarkPr">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10 mb-60">
          <button
            type="submit"
            className="block w-full rounded-md bg-myDarkPr px-3.5 py-2.5 text-center text-sm font-semibold text-white
             shadow-sm hover:bg-myDarkestPr focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-myWhite"
          >
            Lets talk
          </button>
        </div>
      </form>
    </div>
  );
}
