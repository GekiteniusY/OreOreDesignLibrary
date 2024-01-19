import { css } from "@emotion/react";
import React from "react";

interface TextFieldProps {
  htmlFor: string;
  label: string;
  inputType: string;
  inputName: string;
  id: string;
  placeholder: string;
  isRequired: boolean;
}

const style = css`
  color: hotpink;
`;

export const TextField: React.FC<TextFieldProps> = ({
  htmlFor,
  label,
  inputType,
  inputName,
  id,
  placeholder,
  isRequired,
}) => {
  return (
    <>
      <div></div>
      <label
        htmlFor={htmlFor}
        className='block mb-2 text-sm font-medium text-gray-900'
      >
        {label}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={id}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        placeholder={placeholder}
        required={isRequired}
      />
    </>
  );
};
