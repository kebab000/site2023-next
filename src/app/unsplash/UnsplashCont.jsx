import React from 'react';
import Image from 'next/image'
import style from "./page.module.scss"


const UnsplashCont = ({ images }) => {
    return (
        <div className={style.unsplash__cont + " container"}>
            <ul>
                {images.map((image, index) => (
                    <UnsplashImg key={index} image={image} />
                ))}
            </ul>
        </div>
    );
};

const UnsplashImg = ({ image }) => {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${image.id}`}>
                <Image width={400} height={226} src={image.urls.regular} alt={image.alt_description} />
            </a>
        </li>
    );
};
export default UnsplashCont;
