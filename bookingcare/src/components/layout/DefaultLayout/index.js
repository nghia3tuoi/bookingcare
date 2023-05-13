import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
