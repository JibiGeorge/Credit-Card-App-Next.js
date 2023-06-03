import React from 'react'

interface FormInputProps {
  inputType: string
  inputName: string
  placeHolder?: string;
}
const FormInput: React.FC<FormInputProps> = ({ inputType, inputName, placeHolder }) => {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={inputType}
      name={inputName}
      placeholder={placeHolder} />
  )
}

export default FormInput