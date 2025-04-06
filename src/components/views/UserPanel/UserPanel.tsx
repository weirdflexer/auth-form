import { FC } from "react";
import classNames from "classnames";
import { useUserStore } from "../../../store/userStore";
import { useStatusStore } from "../../../store/statusStore";
import Button from "../../UI/Button/Button";
import "./UserPanel.scss";
import { useStore } from "zustand";

interface IUserPanel {
  className?: string;
  name: string;
  imgSrc?: string;
}

const UserPanel: FC<IUserPanel> = (props) => {
  const { className, name, imgSrc = "images/user.svg" } = props;
  const userStore = useUserStore();
  const statusStore = useStatusStore();

  const onSignOutButtonClick = () => {
    userStore.logOutUser();
    statusStore.addStatus({ label: "Logged out of your account." });
    window.location.reload();
  };

  return (
    <div className={classNames(className, "user-panel")}>
      <div className="user-panel__name" title={name}>
        {name}
      </div>
      <div className="user-panel__image-wrapper">
        <img
          className="user-panel__image"
          src={imgSrc}
          alt="Avatar"
          width="50"
          height="50"
          loading="lazy"
        />
      </div>
      <Button
        className="user-panel__sign-out-button"
        type="button"
        icon="sign-out"
        title="Sign Out"
        ariaLabel="Sign Out"
        onClick={onSignOutButtonClick}
      />
    </div>
  );
};

export default UserPanel;
