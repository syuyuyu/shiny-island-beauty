import { Banner } from "./Banner";
import { Navbar } from "./Navbar";

export const HeaderWrap = () => {
  return (
    <header className="main-header">
      <Banner />
      <Navbar />
    </header>
  );
};
