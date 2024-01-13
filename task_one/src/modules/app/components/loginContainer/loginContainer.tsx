import React from 'react'
import Style from './logincntr.module.css'
import Image from 'next/image'

import MainLogo from '../images/CoinGecko_logo.png'

export default function LoginContainer() {
  return (
    <div className={Style.mainSection}>
      <div className={Style.sectionOne}>
        <Image src={MainLogo} alt='Logo' className={Style.mainImage} />
      </div>
      <div className={Style.sectionTwo}>
        <div className={Style.Forms}>
            <h1 className={Style.formTitle}>Login</h1>
            <input
                type='text'
                placeholder='Username...'
                className={Style.loginInput}
            />
            <input
                type='password'
                placeholder='Password'
                className={Style.loginInput}
            />
            <button className={Style.formButton}>Signin</button>
        </div>
      </div>
    </div>
  )
}
