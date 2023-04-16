import Header from "./Header";
import Footer from "./Footer";

interface childrenProps {
  children: React.ReactNode;
}

function Layout({ children }: childrenProps) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
