import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <section id="portSection" class="ports__wrap section center bg-blue">
    <h3>포트폴리오 소개</h3>
    <p>웹쓰 30기 포트폴리오 모음집입니다.</p>
    <div class="port__inner container">
        <div class="port__btn"></div>
        <div class="port__cont">
            <div class="port">
                <figure class="port__header">
                    <a href="/"><Image width= {373} height= {272} src="/assets/images/port/port01.png" alt="포트폴리오"/></a>
                </figure>
                <div class="port__body">
                    <span>
                        <Image width= {230} height= {272} src="/assets/images/member/member80.svg" alt="김땡땡"/>
                    </span>
                    <div>
                        <h4>진현미 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
            <div class="port">
                <figure class="port__header">
                    <Image width= {373} height= {272} src="/assets/images/port/port02.png" alt="포트폴리오"/>
                </figure>
                <div class="port__body">
                    <span>
                        <a href="/"><Image width= {230} height= {272} src="/assets/images/member/member02.svg" alt="포트폴리오"/></a>
                    </span>
                    <div>
                        <h4>김도현 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
            <div class="port">
                <figure class="port__header">
                    <a href="/"><Image width= {373} height= {272} src="/assets/images/port/port03.png" alt="포트폴리오"/></a>
                </figure>
                <div class="port__body">
                    <span>
                        <Image width= {230} height= {272} src="/assets/images/member/member03.svg" alt="김땡땡"/>
                    </span>
                    <div>
                        <h4>이양구 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
            <div class="port">
                <figure class="port__header">
                    <a href="/"><Image width= {373} height= {272} src="/assets/images/port/port04.png" alt="포트폴리오"/></a>
                </figure>
                <div class="port__body">
                    <span>
                        <Image width= {230} height= {272} src="/assets/images/member/member04.svg" alt="김땡땡"/>

                    </span>
                    <div>
                        <h4>천설희 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
            <div class="port">
                <figure class="port__header">
                    <a href="/"><Image width= {373} height= {272} src="/assets/images/port/port05.png" alt="포트폴리오"/></a>
                </figure>
                <div class="port__body">
                    <span>
                        <Image width= {230} height= {272} src="/assets/images/member/member05.svg" alt="김땡땡"/>

                    </span>
                    <div>
                        <h4>이승연 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
            <div class="port">
                <figure class="port__header">
                    <a href="/"><Image width= {373} height= {272} src="/assets/images/port/port06.png" alt="포트폴리오"/></a>
                </figure>
                <div class="port__body">
                    <span>
                        <Image width= {230} height= {272} src="/assets/images/member/member10.svg" alt="김땡땡"/>
                    </span>
                    <div>
                        <h4>김현빈 포트폴리오</h4>
                        <p>프론트앤드 개발자 포트폴리오</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>    
  )
}

export default Portfolio