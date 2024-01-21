import { css } from "@emotion/react";

interface TextFieldProps {
  htmlFor: string;
  label: string;
  inputType: string;
  inputName: string;
  id: string;
  placeholder: string;
  isRequired: boolean;
}

// font-size: 0.875rem; text-sm
// font-weight: medium; font-medium
// color: #1a202c; ext-gray-900
const TextFieldLabelCss = css`
  display: block;
  margin-bottom: 2px;
  font-size: 0.875rem;
  font-weight: medium;
  color: #1a202c;
`;

// background-color: #f9fafb; /* bg-gray-50 */
// border: 1px solid #d2d6dc; /* border-gray-300 */
// color: #1a202c; /* text-gray-900 */
// font-size: 0.875rem; /* text-sm */
// border-radius: 0.375rem; /* rounded-lg */
// focus: {
//   outline: none;
//   ring: 2px solid #3b82f6; /* focus:ring-blue-500 */
//   border: 1px solid #3b82f6; /* focus:border-blue-500 */
// }
// display: block;
// width: 100%; /* w-full */
// padding: 0.625rem; /* p-2.5 */
const TextFieldInputCss = css`
  background-color: #f9fafb;
  border: 1px solid #d2d6dc;
  color: #1a202c;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  focus: {
    outline: none;
    ring: 2px solid #3b82f6;
    border: 1px solid #3b82f6;
  }
  display: block;
  width: 100%;
  padding: 0.625rem;
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
        css={TextFieldLabelCss}
      >
        {label}
      </label>
      <input
        type={inputType}
        name={inputName}
        id={id}
        css={TextFieldInputCss}
        placeholder={placeholder}
        required={isRequired}
      />
    </>
  );
};
