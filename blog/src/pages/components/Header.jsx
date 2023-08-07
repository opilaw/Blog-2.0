import React, {useContext} from 'react'
import Link from 'next/link'

const categories= [{name: 'blabla', slug: 'blabak'}, {name: 'kjd', slug: 'kjwed'} ]

const Header = () => {
  return (
    <div>
        <div>
            <Link href="/">
                <span>o.w.k.a</span>
            </Link>
        </div>
        <div >
            {categories.map((category)=>(
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span>{category.name}</span>
                </Link>
            ))}
        </div>
    </div>
  )
}
export default Header