import Header from "./Header";
import Footer from "./Footer";

interface childrenProps {
  children: React.ReactNode;
  className?: string;
}

function Layout({ children, className }: childrenProps) {
  return (
    <div className="bg-primary">
      <Header />
      <div className={`container mx-auto ${className}`}>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
