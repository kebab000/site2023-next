import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Unsplash = () => {
  return (
    <section id="unsplashSection" className='unsplash__wrap section bg-blue nexon5'>
            <div className="unsplash__inner container">
                <div className="unsplash__text">
                    <h3>유용한 사진들</h3>
                    <p>unsplash에서는 다양한 이미지를 무료로 제공하고 있습니다.<br/> 다양한 사진들을 무료로 사용하세요!</p>
                    <Link href="#" className="button-blue">자세히 보기</Link>
                </div>
                <div className="unsplash__item">
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash01.png" alt="unsplash"/></Link>
                    </div>
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash02.png" alt="unsplash"/></Link>
                    </div>
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash03.png" alt="unsplash"/></Link>
                    </div>
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash04.png" alt="unsplash"/></Link>
                    </div>
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash01.png" alt="unsplash"/></Link>
                    </div>
                    <div>
                        <Link href="/"><Image width= {400} height= {226} src="/assets/images/unsplash/unsplash02.png" alt="unsplash"/></Link>
                    </div>
                </div>
            </div>
    </section>     
  )
}

export default Unsplash