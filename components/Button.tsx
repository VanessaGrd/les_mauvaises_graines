import React from 'react'
import { Interface } from 'readline';

interface IButtonProps {
  buttonTitle: string;
}

const Button = ({buttonTitle} : IButtonProps) => {
  return (
    <button
      type="submit"
      className="text-secondary-50 bg-primary-50 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      
    >
      {buttonTitle}
    </button>
  );
}

export default Button
