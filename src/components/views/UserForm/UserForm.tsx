import { FC, ReactNode, useState } from "react";
import { useUserForm } from "../../../hooks/useUserForm";
import { useFormik } from "formik";
import { AppRoute, AuthStatus } from "../../../types/const";
import { UserCredential, Auth } from "@firebase/auth";
import { getAuth } from "firebase/auth";
import { useUserStore } from "../../../store/userStore";
import { useStatusStore } from "../../../store/statusStore";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import Grid from "../../UI/Grid/Grid";
import GridItem from "../../UI/Grid/GridItem";
import FormItem from "../../UI/FormItem/FormItem";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import Loader from "../../UI/Loader/Loader";
import "./UserForm.scss";

interface IUserForm {
  className?: string;
  fetchFirebase: (
    auth: Auth,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  fetchFirebaseSuccessStatus: string;
  submitButtonLabel: string;
  submitButtonIcon: string;
  notice?: ReactNode;
  hasPasswordAutoComplete?: boolean;
  hasPasswordConfirmField?: boolean;
}

const UserForm: FC<IUserForm> = (props) => {
  const {
    className,
    fetchFirebase,
    fetchFirebaseSuccessStatus,
    submitButtonLabel,
    submitButtonIcon,
    notice = null,
    hasPasswordAutoComplete = false,
    hasPasswordConfirmField = false,
  } = props;

  const userStore = useUserStore();
  const statusStore = useStatusStore();
  const navigate = useNavigate();
  const { initialValues, validationSchema } = useUserForm(
    hasPasswordConfirmField
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, values, touched, errors, handleChange, handleBlur } =
    useFormik({
      onSubmit(values, formikHelpers) {
        const { email, password } = values;
        const { setErrors } = formikHelpers;
        const auth = getAuth();

        setIsLoading(true);
        fetchFirebase(auth, email, password)
          .then((response) => {
            const { user } = response;
            const { email, uid: id } = user;
            // @ts-ignore
            const { accessToken: token = null } = user;

            userStore.setUser({ email, token, id });
            statusStore.addStatus({ label: fetchFirebaseSuccessStatus });
            navigate(AppRoute.index, { replace: true });
          })
          .catch(({ code }) => {
            let label = "";

            switch (code) {
              case AuthStatus.emailAlreadyInUse: {
                label = `Email '${email}' is already use! Please, use another email address.`;
                setErrors({ email: label });
                break;
              }
              case AuthStatus.wrongPassword: {
                label = "Password is wrong!";
                setErrors({ password: label });
                break;
              }
              case AuthStatus.userNotFound: {
                label = `User with email '${email}' is not found!`;
                setErrors({ email: label });
                break;
              }
              case AuthStatus.tooManyRequests: {
                label = "Too many attempts. Please, try again a bit later!";
                break;
              }
              case AuthStatus.invalidCredential: {
                label = "Invalid email or password!";
                setErrors({ email: label });
                break;
              }
              default: {
                break;
              }
            }

            if (label) {
              statusStore.addStatus({ label });
            }
          })
          .finally(() => setIsLoading(false));
      },
      validationSchema,
      initialValues,
    });

  return (
    <form
      className={classNames(className, "user-form")}
      onSubmit={handleSubmit}
    >
      <Grid>
        <GridItem>
          <FormItem>
            <Input
              id="email"
              name="email"
              type="text"
              inputMode="email"
              autoComplete="email"
              value={values.email}
              error={touched.email ? errors.email : ""}
              label="Email"
              placeholder="example@mail.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </GridItem>
        <GridItem>
          <FormItem>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete={
                hasPasswordAutoComplete ? "current-password" : "off"
              }
              value={values.password}
              error={touched.password ? errors.password : ""}
              label="Password"
              placeholder="Your password"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
        </GridItem>
        {hasPasswordConfirmField && (
          <GridItem>
            <FormItem>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                type="password"
                value={values.passwordConfirm || ""}
                error={touched.passwordConfirm ? errors.passwordConfirm : ""}
                label="Confirm password"
                placeholder="Repeat your password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </FormItem>
          </GridItem>
        )}
        <GridItem>
          <Button
            className="user-form__submit-button"
            type="submit"
            icon={submitButtonIcon}
          >
            {submitButtonLabel}
          </Button>
          {Boolean(notice) && <div className="user-form__notice">{notice}</div>}
        </GridItem>
      </Grid>
      <Loader isShown={isLoading} />
    </form>
  );
};

export default UserForm;
