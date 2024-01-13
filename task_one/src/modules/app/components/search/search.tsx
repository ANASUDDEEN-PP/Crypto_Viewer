import React from 'react'
import Style from './search.module.css';
import Link from 'next/link';

export default function Search() {
  return (
    <div className={Style.header}>
      <div className={Style.headerElement}>
        <input type='text' placeholder='Search...' className={Style.searchInput}/>
        <button className={Style.searchButton} >Search</button>
      </div>
      <div className={Style.userButtons}>
        <Link href="/login">
            <button className={Style.Login}>Login</button>
        </Link>
      </div>
    </div>
  )
}
