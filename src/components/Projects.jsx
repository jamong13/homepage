import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "./Projects.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const projects = [
  {
    id: "1",
    title: "Who is LEE HEE SOO?",
    date: "2025.11",
    number: "개인 프로젝트",
    content:
      "React Router를 사용한 페이지 전환이 적용된 사이트. SNS 느낌의 자기소개와 grid 형식으로 배치한 스킬 목록, Swiper를 사용한 썸네일 슬라이드 형식의 프로젝트 목록, 경력기술서를 정리한 사이트. 반응형 웹 디자인 적용.",
    skills: "Html, CSS, JavaScript, React, Vite, Figma",
    image: "/img/project1.JPG",
    image2: "",
    thumb: "/img/project1_thumb.jpg",
    web1: "https://www.figma.com/design/mZciKXhDr5rptdRvQSmNxO/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C%EC%84%9C-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=12-17&t=POpvSjsOtcyVjowE-1",
    web2: "https://homepage-lhs.vercel.app/",
  },
  {
    id: "2",
    title: "e-Sport 'SOO CURRENT'",
    date: "2025.12",
    number: "개인 프로젝트",
    content:
      "가상의 e-Sport 팀을 소개하는 사이트. AI를 활용하여 제작한 로고와 팀원 프로필 이미지, 팀의 경기 일정과 결과를 보여주는 페이지로 구성. 원스크롤 페이지로 제작. 반응형 웹 디자인 적용.",
    skills: "Html, CSS, JavaScript, React, Vite, Figma, AI",
    image: "/img/project2.jpg",
    image2: "",
    thumb: "/img/project2_thumb.jpg",
    web1: "https://www.figma.com/make/OW1ZJ2OAnHGRVnghIXoGHq/eSports-Team-Website?t=POpvSjsOtcyVjowE-1",
    web2: "https://e-sports-eight.vercel.app/",
  },
  {
    id: "3",
    title: "오늘 뭐하지?",
    date: "2025.12",
    number: "팀(4인) 프로젝트",
    content:
      "React Router를 사용한 페이지 전환이 적용된 사이트. 할일을 관리할 수 있는 오늘 뭐 하지? 페이지, 날씨 API를 활용하여 옷차림을 추천 받을 수 있는 오늘 뭐 입지? 페이지, 영화API를 활용하여 영화 추천 받는 페이지, 지도 API를 활용하여 원하는 지역의 맛집을 추천 받을 수 있는 페이지로 구성된 웹사이트. '오늘'이라는 주제에 집중하여 다양한 일상을 즐길 수 있도록 도움을 주는 사이트에서 할일을 관리하는 '오늘 뭐 하지?' 기능을 맡음. 할일 추가와 수정·완료·삭제 기능 구현. 홈 화면에서는 오늘의 할일만 필터링하여 보이도록 작성하였고 완료도 가능하게 작성. 반응형 웹 디자인 적용.",
    skills: "Html, CSS, JavaScript, React, Vite, Figma, API, AI",
    image: "/img/project3.JPG",
    image2: "/img/project3_2.JPG",
    thumb: "/img/project3_thumb.jpg",
    web1: "https://www.figma.com/design/JHyeciuBIETfb5LEhxr67D/Todo?node-id=0-1&t=POpvSjsOtcyVjowE-1",
    web2: "https://todo-team2.vercel.app/",
  },
  {
    id: "4",
    title: "의류 쇼핑몰 Loft",
    date: "2025.12",
    number: "개인 프로젝트",
    content: "의류 쇼핑몰을 디자인한 피그마 프로젝트.",
    skills: "Figma",
    image: "/img/project4.JPG",
    image2: "",
    thumb: "/img/project4_thumb.JPG",
    web1: "https://www.figma.com/design/vL0ljEu9K33iLWPtvFOYC6/Loft?node-id=0-1&t=nMR31h2EkYTMxrtQ-1",
    web2: "",
  },
];

export default function Projects() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="projects section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <div className="section-divider"></div>
        </div>
        <section className="projects-section">
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            watchSlidesProgress
            className="thumbnail-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="thumbnail-slide">
                  <img
                    src={project.thumb}
                    alt={`Thumbnail ${project.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "4px",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            className="main-thumbnail-swiper"
            breakpoints={{
              0: {
                navigation: false,
                thumbs: { swiper: null },
              },
              769: {
                navigation: true,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="slide-content">
                  <h2 className="project-title">{project.title}</h2>
                  <img
                    src={project.image}
                    className="slide-image"
                    alt={`Main Slide ${project.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  {project.image2 && (
                    <img
                      src={project.image2}
                      className="slide-image2"
                      alt={`Main Slide ${project.id}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  )}

                  <p className="project-date">{project.date}</p>
                  <p className="project-number">{project.number}</p>
                  <p className="project-content">{project.content}</p>
                  <p className="project-skills">{project.skills}</p>
                  {project.web1 && (
                    <a
                      className="project-web"
                      href={project.web1}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title} 피그마 바로가기
                    </a>
                  )}
                  <br />
                  {project.web2 && (
                    <a
                      className="project-web"
                      href={project.web2}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title} 사이트 바로가기
                    </a>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </div>
  );
}
