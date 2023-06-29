import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Movie = () => {
  return (
    <section id="movieSection" className="movie__wrap section nexon5">
      <div className="movie__inner container">
          <div className="movie__text">
              <h3>개발자 추천 영화</h3>
              <p>개발에 관련된 영화 목록입니다.<br/> 영화를 보고 개발자에 대해 알아봅시다!</p>
              <Link href="/" className="button-green">자세히 보기</Link>
          </div>
          <div className="movie__item">
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie01.png" alt="movie"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie02.png" alt="movie"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie03.png" alt="movie"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie04.png" alt="movie"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie01.png" alt="movie"/></Link>
            </div>
            <div>
                <Link href="/"><Image width= {270} height= {413}src="/assets/images/movie/movie02.png" alt="movie"/></Link>
            </div>
          </div>
      </div>
    </section>   
  )
}

export default Movie