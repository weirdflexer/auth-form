import { FC } from "react";
import classNames from "classnames";
import { useStatusStore } from "../../../store/statusStore";
import "./StatusBar.scss";

const StatusBar: FC = () => {
  const items = useStatusStore((state) => state.statuses);

  if (!items.length) return null;

  const onLabelAnimationEnd = ({
    target,
  }: React.AnimationEvent<HTMLInputElement>) => {
    (target as HTMLInputElement).remove();
  };

  return (
    <div className="status-bar">
      <ul className="status-bar__list">
        {items.map(({ label, expirationTimeMS }, index) => {
          return (
            <li className="status-bar__item" key={index}>
              <div
                className="status-bar__label"
                style={
                  {
                    "--expirationMS": `${expirationTimeMS}ms`,
                  } as React.CSSProperties
                }
                onAnimationEnd={onLabelAnimationEnd}
              >
                {label}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatusBar;
