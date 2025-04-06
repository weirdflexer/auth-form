import { FC } from "react";
import classNames from "classnames";
import Container from "../../UI/Container/Container";
import "./Footer.scss";

interface IFooter {
  className?: string;
}

const Footer: FC<IFooter> = (props) => {
  const { className } = props;

  return (
    <footer className={classNames(className, "footer")}>
      <Container className="footer__inner">
        <a
          className="footer__copyright-link"
          href="https://github.com/weirdflexer"
          target="_blank"
        >
          @ weirdflexer, {new Date().getFullYear()}
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
