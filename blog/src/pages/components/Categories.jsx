import React, { useEffect, useState } from 'react'
import  {getCategories} from '@/services'
import Link from 'next/link'
import styles from '@/styles/Categories.module.scss'
 const Categories = () => {
  const [categories, setCategories] = useState([])

  useEffect(()=>{
getCategories()
.then((newCategories)=> setCategories(newCategories))
  }, [])
  return (
    <div className={styles.CategoriesContainer}>
      <h3>Categories</h3>
      <div className={styles.CategoryNameContainer}>
      {categories.map((category)=>{
        return(
          
        <Link key={category.slug} href={`/category/${category.slug}`} className={styles.CategoryName}>
        <span >
          {category.name}
        </span>
      </Link>
      
      )
      })}
      </div>
    </div>
  )
}

export default Categories