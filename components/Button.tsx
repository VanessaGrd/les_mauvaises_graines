interface IButtonProps {
  buttonTitle: string;
  buttonClassName?: string; 
}

const Button = ({ buttonTitle, buttonClassName }: IButtonProps) => {
  const defaultClassName =
    "text-secondary-50 bg-primary-50 hover:bg-primary-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center";

  
  const className = buttonClassName ? `${defaultClassName} ${buttonClassName}` : defaultClassName;

  return (
    <button type="submit" className={className}>
      {buttonTitle}
    </button>
  );
};

export default Button;