import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import StatusBar from "../StatusBar/StatusBar";

const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
      <StatusBar />
    </>
  );
};

export default Layout;
