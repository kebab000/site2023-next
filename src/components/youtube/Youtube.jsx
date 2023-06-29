import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Youtube = () => {
  return (
    <section id="youtubeSection" className='youtube__wrap section nexon5'>
    <div className="youtube__inner container">
        <div className="youtube__text">
            <h3>코딩 유튜브 추천</h3>
            <p>더 다양한 강의는 유튜브를 통해 제공하고 있습니다. <br/>구독과 좋아요 부탁드립니다!</p>
            <Link href="/" className="button-red">자세히 보기</Link>

        </div>
        <div className="youtube__item">
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube01.jpg" alt="youtube"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube02.jpg" alt="youtube"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube03.jpg" alt="youtube"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube04.jpg" alt="youtube"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube01.jpg" alt="youtube"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {400} height= {226} src="/assets/images/youtube/youtube02.jpg" alt="youtube"/></Link>
            </div>
        </div>
    </div>
</section>
  )
}

export default Youtube