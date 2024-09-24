import React from "react";
import { FormSchemaFields } from "../../../../dominio/interfaces/FormSchemaFields";
import { PiPushPinBold } from "react-icons/pi";
import { ButtonBack } from "../../buttons/ButtonBack";
import { ButtonSubmit } from "../../buttons/ButtonSubmit";

interface OptionsProps {
  fields: FormSchemaFields;
  options: {
    Submit: boolean;
    Back: boolean;
  };
}

export const FormOptions = ({ fields, options }: OptionsProps) => {
  const handleSubmit = () => {};
  return (
    <React.Fragment>
      <div className="flex flex-col gap-4 min-h-screen items-center justify-center w-full translate-y-[-6%] sm:translate-y-0">
        <form
          onSubmit={handleSubmit}
          className="rounded-lg bg-white dark:dark:bg-slate-800 p-6 dark:bg-opacity-20 shadow-lg flex flex-col w-72 sm:w-96"
        >
          <div className="block mb-8 flex flex-row items-center justify-start w-full text-sm font-medium text-slate-800 dark:text-white">
            <span className="flex items-center justify-center h-8 w-8 border rounded-full border-slate-300 mr-2">
              <PiPushPinBold />
            </span>
            <h1>Form to join the game</h1>
          </div>
          {Object.keys(fields).map((key) => {
            const field = fields[key];
            return (
              <div className="mb-4" key={key}>
                <label
                  htmlFor={field.label}
                  className="block mb-2 text-sm font-medium text-slate-800 dark:text-white"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="bg-gray-50 focus:outline-none focus:ring-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`Write your ${field.label.toLowerCase()}`}
                />
              </div>
            );
          })}
          <div className="block mb-4 flex flex-row items-center justify-between w-full text-sm font-medium text-slate-800 dark:text-white">
            {options.Back && <ButtonBack text="Back" />}
            {options.Back && <ButtonSubmit text="Next" />}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
