import React from 'react'
import Style from '@/themes/login.module.css';
import NavBar from '@/modules/app/components/navbar/navBar';
import LoginContainer from '@/modules/app/components/loginContainer/loginContainer';

export default function login() {
  return (
    <div className={Style.mainContainer}>
      <NavBar />
      <LoginContainer />
    </div>
  )
}
