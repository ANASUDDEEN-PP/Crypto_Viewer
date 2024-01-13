import Image from 'next/image'
import { Inter } from 'next/font/google'
import Style from '@/themes/home.module.css';
import NavBar from '@/modules/app/components/navbar/navBar'
import MainContainer from '@/modules/app/components/mainContainer/mainContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={Style.homeContainer}>
      <NavBar/>
      <MainContainer />
    </div>
  )
}
