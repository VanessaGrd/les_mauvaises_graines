interface IButtonProps {
  buttonTitle: string;
  buttonClassName?: string; 
}

const Button = ({ buttonTitle, buttonClassName }: IButtonProps) => {
  const defaultClassName =
    "text-secondary-50 bg-primary-50 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center";

  
  const className = buttonClassName ? `${defaultClassName} ${buttonClassName}` : defaultClassName;

  return (
    <button type="submit" className={className}>
      {buttonTitle}
    </button>
  );
};

export default Button;