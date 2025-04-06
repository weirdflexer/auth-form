import { FC } from "react";
import PageTitle from "../components/UI/PageTitle/PageTitle";

const HomePage: FC = () => {
  return (
    <>
      <PageTitle>Home page</PageTitle>
      <p>
        The following libraries and technologies were used to create this
        application:
      </p>
      <ul>
        <li>
          <a
            href="https://vitejs.dev/"
            target="_blank"
            title="Go to an external website"
          >
            Vite
          </a>
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            title="Go to an external website"
          >
            TypeScript
          </a>
        </li>
        <li>
          <a
            href="https://reactjs.org/"
            target="_blank"
            title="Go to an external website"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            title="Go to an external website"
          >
            React Router
          </a>
        </li>
        <li>
          <a
            href="https://redux.js.org/"
            target="_blank"
            title="Go to an external website"
          >
            Zustand
          </a>
        </li>
        <li>
          <a
            href="https://formik.org/"
            target="_blank"
            title="Go to an external website"
          >
            Formik
          </a>{" "}
          +{" "}
          <a
            href="https://github.com/jquense/yup"
            target="_blank"
            title="Go to an external website"
          >
            Yup
          </a>
        </li>
        <li>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            title="Go to an external website"
          >
            Firebase
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JedWatson/classnames"
            target="_blank"
            title="Go to an external website"
          >
            ClassNames
          </a>
        </li>
        <li>
          <a
            href="https://sass-lang.com/"
            target="_blank"
            title="Go to an external website"
          >
            Scss
          </a>
        </li>
        <li>
          A small{" "}
          <a
            href="https://github.com/vbenjs/vite-plugin-svg-icons"
            target="_blank"
            title="Go to an external website"
          >
            plugin
          </a>{" "}
          for SVG icons
        </li>
      </ul>
    </>
  );
};

export default HomePage;
