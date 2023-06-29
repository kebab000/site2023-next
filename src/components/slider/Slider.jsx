import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Slider = () => {
  return (
    <section id="sliderSection" className='slider__wrap nexon5'>
        <div className="slider__inner">
            <h2 className="blind">배너 슬라이드</h2>
            <div className="slider__img">
            <section id="sliderSection" class="slider__wrap section">
            <div class="slider__inner">
                <h2 class="blind">배너 슬라이드</h2>
                <div class="slider__img">
                    <div class="slider s1 container">
                       <div class="text">
                            <h3>My <br/>portfolio</h3>
                            <p>재능은! 노력 끝에서 발견된다. <br/> 어떤 일이라도 노력하고 즐기면 그 결과는 빛을 바란다고 생각합니다.</p>
                            <a href="#" class="more button-blue">더 알아보기</a>
                       </div>
                       <div class="img" aria-label="hidden">
                                <Image width={300} height={300} src="/assets/images/slider/slider02.png" alt="이미지02"/>
                                <Image width={300} height={300} src="/assets/images/slider/slider03.png" alt="이미지3"/>
                                <Image width={300} height={300} src="/assets/images/slider/slider05.png" alt="이미지1"/>
                       </div>
                       <div class="circle" aria-label="hidden">
                            <span class="circle c1"></span>
                            <span class="circle c2"></span>
                            <span class="circle c3"></span>
                            <span class="circle c4"></span>
                            <span class="circle c5"></span>
                       </div>
                    </div>
                </div>
                <div class="slider__btn">
                    <Link href="#" class="left"><span class="ir">이전이미지</span></Link>
                    <Link href="#" class="right"><span class="ir">다음이미지</span></Link>
                </div>
                <div class="slider__dot">
                    <Link href="#" class="dot active"><span class="ir">1번 이미지</span></Link>
                    <Link href="#" class="dot"><span class="ir">2번 이미지</span></Link>
                    <Link href="#" class="dot"><span class="ir">3번 이미지</span></Link>
                </div>
            </div>
        </section>    
            </div>
        </div>
    </section>
  )
}

export default Slider