import { FunctionComponent } from "react";
import Header from "./header";
import Transition from "./transition";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Transition>
        <Header />
        <main className="mb-20">{children}</main>
      </Transition>
    </>
  );
};

export default Layout;
