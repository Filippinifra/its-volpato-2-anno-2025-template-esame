import { buttonClass } from "./style.css";

export const Button = ({ children, onClick, icon }) => {
  return (
    <button onClick={onClick} className={buttonClass}>
      {icon}
      {children}
    </button>
  );
};
