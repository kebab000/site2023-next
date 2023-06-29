import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Member = () => {
  return (
    <section id="memberSection" class='members__wrap section center nexon5'>
    <h3>멤버소개</h3>
    <p>함께 공부한 웹쓰 30기 멤버들 입니다.</p>
    <div class="member__inner container">
        <div class="member">
            <figure class="member__header">
                <Image width= {230} height= {290} src="./assets/images/member/member80.svg" alt="땡땡님"/>
            </figure>
            <div class="member__body">
                <h4 class="title">웹쓰30기</h4>
                <p class="desc">진현미</p>
                <Link href="/" class="btn"></Link>
            </div> 
        </div>
        <div class="member">
            <figure class="member__header">
                <Image width= {230} height= {290} src="./assets/images/member/member02.svg" alt="땡땡님"/>
            </figure>
            <div class="member__body">
                <h4 class="title">웹쓰30기</h4>
                <p class="desc">김도현</p>
                <Link href="/" class="btn"></Link>
            </div> 
        </div>
        <div class="member">
            <figure class="member__header">
                <Image width= {230} height= {290} src="./assets/images/member/member03.svg" alt="땡땡님"/>
            </figure>
            <div class="member__body">
                <h4 class="title">웹쓰30기</h4>
                <p class="desc">이양구</p>
                <Link href="/" class="btn"></Link>
            </div> 
        </div>
    </div>
</section>    
  )
}

export default Member