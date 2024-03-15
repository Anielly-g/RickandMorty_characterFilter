import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        
      </header>
      <main>{children}</main>
      <footer>
        
      </footer>
    </div>
  );
};

export default Layout;
