import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'


import layoutStyles from '../components/layout.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
   
      
          <>
            <nav className={layoutStyles.navbar}>
                <Link href="/">
                    <a className={layoutStyles.grails} >Grails</a>
                </Link>
                <Link href="/shop">
                    <a>Shop</a>
                </Link>
                
                <Image 
                src="/images/cart.png"
                height={25}
                width={25}
                />
                
            </nav>
          </>
        
   )
        
}