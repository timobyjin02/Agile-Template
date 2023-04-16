import Header from "./Header";
import Footer from "./Footer";

interface childrenProps {
  children: React.ReactNode;
}

function Layout({ children }: childrenProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
