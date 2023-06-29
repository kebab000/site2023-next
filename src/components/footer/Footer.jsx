import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const links = [
  {
    id: 1,
    title : '사이트',
    url : {
      site : ['웹표준 사이트','반응형 사이트','패럴랙스 사이트','포트폴리오 사이트'],
      link :['/','/','/','/']
    },
  },{
    id: 2,
    title : '유형',
    url : {
      site : ['이미지 유형','카드 유형','이미지/텍스트 유형','배너 유형','텍스트 유형','푸터 유형'],
      link :['/','/','/','/','/','/']
    },
  },{
    id: 3,
    title : '스크립트',
    url : {
      site : ['검색 이펙트','퀴즈 이펙트','마우스 이펙트','슬라이드 이펙트','패랠랙스 이펙트','게임 이팩트'],
      link :['/','/','/','/','/','/']
    },
  },{
    id: 4,
    title : '레퍼런스',
    url : {
      site : ['CSS','FONTS','BLOG','REFERENCE'],
      link :['/','/','/','/']
    },
  }
]
const Footer = () => {
  return (
    <footer id="footer" className='footer__wrap section bg-blue nexon5' role="contentinfo">
            <div className="footer__inner container">
                <div className="footer__text">
                    <h5>kebab00</h5>
                    <p>
                        안녕하세요! <br /> 더 다양한 정보와 문의는 SNS와 이메일을 통해주세요 <br /> im.kebab00@gmail.com
                    </p>
                    <ul className="sns">
                        <li>
                            <Link href="/">
                                <Image width="20" height='20' src="../assets/images/footer/footer01.svg" alt="페이스북" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image  width="20" height='20' src="../assets/images/footer/footer02.svg" alt="인스타그램" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image width="20" height='20' src="../assets/images/footer/footer03.svg" alt="유튜브" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image width="20" height='20' src="../assets/images/footer/footer04.svg" alt="깃헙" />
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image width="20" height='20' src="../assets/images/footer/footer05.svg" alt="디스코드" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__menu">
                    {links.map((link) => (
                     <div key={link.id}>
                        <h4>{link.title}</h4>
                        <ul>
                            <li>
                                <Link href={link.url.link[0]}>{link.url.site[0]}</Link>
                            </li>
                            <li>
                                <Link href={link.url.link[1]}>{link.url.site[1]}</Link>
                            </li>
                            <li>
                                <Link href={link.url.link[2]}>{link.url.site[2]}</Link>
                            </li>
                            <li>
                                <Link href={link.url.link[3]}>{link.url.site[3]}</Link>
                            </li>
                        </ul>
                      </div>
                    ))}
                </div>
                <div className="footer__right">
                    <p>Copyright 2022. All Rights Reserved. - Designed by Webshrefryboy</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer