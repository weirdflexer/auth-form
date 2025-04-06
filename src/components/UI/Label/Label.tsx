import { FC, ReactNode } from "react";
import classNames from "classnames";
import "./Label.scss";

interface ILabel {
  className?: string;
  children: ReactNode;
  htmlFor?: string;
}

const Label: FC<ILabel> = (props) => {
  const { className, children, htmlFor } = props;

  return (
    <label className={classNames(className, "label")} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
