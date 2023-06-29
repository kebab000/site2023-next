import Link from 'next/link'
import React from 'react'
import style from './header.module.css';
const links = [
    {
      id: 1,
      title : '소개',
      url : '/intro',
    },{
      id: 2,
      title : '멤버',
      url : '/member',
    },{
      id: 3,
      title : '포트폴리오',
      url : '/port',
    },{
      id: 4,
      title : '유튜브',
      url : '/youtube',
    }
    ,{
      id: 5,
      title : '영화',
      url : '/movie',
    },{
      id: 6,
      title : '이미지',
      url : '/unsplash'
    }
]
const Header = () => {
  return (
    <header id="header" className="header__wrap gmarket5 bg-blue" role="heading" aria-level="1">
    <div className={style.header__inner}>
        <h1 className={style.header__logo}>
            <Link href="/">
                web <em>site</em>
            </Link>
        </h1>
        <nav className={style.header__nav} role="navigation">
            <ul>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link href={link.url}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
</header>
  )
}

export default Header