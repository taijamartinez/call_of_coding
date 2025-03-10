import Navbar from './Navbar';
// import Footer from './Footer'/

import { ReactNode } from 'react';

function NavFooterWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
        {children}
      {/* <Footer /> */}
    </>
  )
}

export default NavFooterWrapper