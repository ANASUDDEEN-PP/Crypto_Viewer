import React from 'react';
import Style from './navbar.module.css';
import Image from 'next/image';
import Logo from '../images/CoinGecko_logo.png';
import DashboardIcon from '../images/menu.png';
import Link from 'next/link';

function NavBar() {
  return (
    <div>
      <div className={Style.mainHeader}>
        <Link href="/">
          <Image src={Logo} alt='Logo' className={Style.mainLogo} />
        </Link>
        <div className={Style.navBarContents}>
            
        </div>
      </div>
    </div>
  )
}


export default NavBar;