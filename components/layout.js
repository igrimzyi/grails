import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import layoutStyles from '../components/layout.module.css'
import Link from 'next/link'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
   
      
          <>
            <nav className={layoutStyles.navbar}>
                <Link className="grails" href="/">
                    <a>Grails</a>
                </Link>
                <Link href="/">
                    <a>Apples</a>
                </Link>

            </nav>
          </>
        
   )
        
}