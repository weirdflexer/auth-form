import { FC, ReactNode } from "react";
import classNames from "classnames";
import "./FormItem.scss";

interface IFormItem {
  className?: string;
  children: ReactNode;
}

const FormItem: FC<IFormItem> = (props) => {
  const { className, children } = props;

  return <div className={classNames(className, "form-item")}>{children}</div>;
};

export default FormItem;
