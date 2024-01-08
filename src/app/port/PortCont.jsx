import Image from 'next/image';
import React from 'react';
import style from "./page.module.scss"

const ports = [
    {
        name: '이요셉',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port00-min.png',
        url: 'https://kebab00-portfolio2023.netlify.app/',
        profileImg: 'member106.svg',
    },
    {
        name: '진현미',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port01-min.png',
        url: 'https://portfolio-hyunmi.netlify.app/',
        profileImg: 'member80.svg',
    },
    {
        name: '천설희',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port05-min.png',
        url: 'https://portfolio-313.web.app/',
        profileImg: 'member05.svg',
    },
    {
        name: '장진용',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port02-min.png',
        url: 'https://portfolio-cc509.web.app/',
        profileImg: 'member02.svg',
    },
    {
        name: '김도현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port03-min.png',
        url: 'https://kdh-portfolio.netlify.app',
        profileImg: 'member03.svg',
    },
    {
        name: '이양구',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port04-min.png',
        url: 'https://leeyanggoo-portfolio.web.app/',
        profileImg: 'member04.svg',
    },
    {
        name: '이승연',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port06-min.png',
        url: 'https://dkdlelw-portfolio.web.app/',
        profileImg: 'member06.svg',
    },
    {
        name: '김현빈',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port07-min.png',
        url: 'https://portfolio-hyenobeen.netlify.app/',
        profileImg: 'member07.svg',
    },
    {
        name: '정황우',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port08-min.png',
        url: 'https://jhwportfolio.netlify.app/',
        profileImg: 'member08.svg',
    },
    {
        name: '여다슬',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port09-min.png',
        url: 'https://portfolio-jjul.web.app/',
        profileImg: 'member09.svg',
    },
    {
        name: '이은지',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port10-min.png',
        url: 'https://my-portfolio-vite.web.app/',
        profileImg: 'member10.svg',
    },
    {
        name: '노지영',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port11-min.png',
        url: 'https://noji-portfolio.netlify.app/',
        profileImg: 'member11.svg',
    },
    {
        name: '이훈규',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port12-min.png',
        url: 'https://hoongportfolio.netlify.app/',
        profileImg: 'member107.svg',
    },
    {
        name: '신동진',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port13-min.png',
        url: 'https://sdj-portfolio-5a461.web.app/',
        profileImg: 'member13.svg',
    },
    {
        name: '김도현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port15-min.png',
        url: 'https://portfolio-45429.web.app/',
        profileImg: 'member15.svg',
    },
    {
        name: '변우현',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port16-min.png',
        url: 'https://fitalux-portfolio-vite-2023.netlify.app/',
        profileImg: 'member16.svg',
    },
    {
        name: '안교남',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port17-min.png',
        url: 'https://portfolio-18b72.web.app/',
        profileImg: 'member17.svg',
    },
    {
        name: '전윤기',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port18-min.png',
        url: 'https://myportpolio-e7f37.web.app',
        profileImg: 'member18.svg',
    },
    {
        name: '권현정',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port19-min.png',
        url: '#',
        profileImg: 'member19.svg',
    },
    {
        name: '정희석',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port20-min.png',
        url: 'https://getgrovy-port.web.app/',
        profileImg: 'member20.svg',
    },
    {
        name: '이유나',
        desc: '프론트앤드 개발자 포트폴리오',
        portImg: 'port21-min.png',
        url: 'https://yuna-portfolio.web.app/',
        profileImg: 'member21.svg',
    },
];
const PortItem = port => {
    return (
        <div className="port">
            <figure className="port__header">
                <a href={port.port.url} target="_blank" rel="noreferrer">
                    <Image width={400} height={272}
                        src={`/assets/images/port/${port.port.portImg}`}
                        alt={`${port.port.name}포트폴리오`}
                    />
                </a>
            </figure>
            <div className="port__body">
                <span>
                    <Image width={50} height={50}
                        src={`/assets/images/member/${port.port.profileImg}`}
                        alt={port.port.name}
                    />
                </span>
                <div>
                    <h4>{port.port.name}</h4>
                    <p>{port.port.desc}</p>
                </div>
            </div>
        </div>
    );
};

const PortCont = () => {
    return (
        <section id="portCont" className="ports__item section center bg-blue">
            <h3>포트폴리오 소개</h3>
            <p>웹쓰 30기 포트폴리오 모음집입니다.</p>
            <div className="port__inner container">
                <div className={`port__cont container`}>
                    {ports.map((port, index) => (
                        <PortItem key={index} port={port} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortCont;
