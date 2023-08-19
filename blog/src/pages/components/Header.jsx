import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.scss'
import { getCategories } from '@/services'



const Header = () => {
    const [categories, setCategories]= useState([])
    
    useEffect(()=>{
        getCategories()
        .then((newCategories)=> setCategories(newCategories))
    }, [])
    
    
  return (
    <div className={styles.HeaderContainer}>
     
        <div className={styles.LogoHeader}>
            <Link href="/" className={styles.LinkLogo}>
                <img src="/logo.png" width={90} height={30} alt="" />
            </Link>
        </div>
        <div className={styles.CategoriesHeader}>
            {categories.map((category)=>(
                <Link key={category.slug} href={`/category/${category.slug}`} className={styles.LinkCategories}>
                    <span>{category.name}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}
export default Header