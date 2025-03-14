import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SideNavContextValue {
  isSideNavOpen: boolean;
  toggleSideNav: () => void;
}

const SideNavContext = createContext<SideNavContextValue>({
  isSideNavOpen: true,
  toggleSideNav: () => {},
});

export const SideNavProvider = ({ children }: { children: ReactNode }) => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSideNavOpen(true);
      } else if (window.innerWidth >= 768) {
        setIsSideNavOpen(false);
      } else {
        setIsSideNavOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSideNav = () => {
    setIsSideNavOpen(prev => !prev);
  };

  return (
    <SideNavContext.Provider value={{ isSideNavOpen, toggleSideNav }}>
      {children}
    </SideNavContext.Provider>
  );
};

export const useSideNav = () => useContext(SideNavContext);
