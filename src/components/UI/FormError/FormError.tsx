import { FC, ReactNode } from "react";
import classNames from "classnames";
import "./FormError.scss";

interface IFormError {
  className?: string;
  children: ReactNode;
}

const FormError: FC<IFormError> = (props) => {
  const { className, children } = props;

  return <div className={classNames(className, "form-error")}>{children}</div>;
};

export default FormError;
