import React from 'react'
interface LabelProps{
  text?: string;
}
const Label: React.FC<LabelProps> = ({text}) => {
  return (
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              {text}
            </label>
  )
}

export default Label