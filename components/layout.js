import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'


import layoutStyles from '../components/layout.module.css'
import Link from 'next/link'


export default function Layout({ children, home }) {
  return (
   
      
          <>
            <nav className={layoutStyles.navbar}>
                <Link href="/">
                    <a className={layoutStyles.grails} >Grails</a>
                </Link>
                <div className={layoutStyles.rightNav} >
                <Link href="/shop">
                    <a>Shop</a>
                </Link>
                <Link href="/cart">
                  <a>Cart</a>
                </Link>
                </div>
                
            </nav>
          
          <main className={layoutStyles.mainBody}>{children}</main>

          <footer className={layoutStyles.footer}>
          I am footer

          </footer>
          </>
        
   )
        
}