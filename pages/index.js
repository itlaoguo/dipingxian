import { Button } from 'react-bootstrap';
import Layout from '../components/Layout';
import Swiper from '../components/Swiper';
import './index.less';
import Router from 'next/router';
Router;
// import Header from '../components/header';
import { useState, useEffect } from 'react';
useState;
Button;
export default function Home() {
  useEffect(() => {});
  return (
    <Layout>
      <div className="swiper-box">
        <Swiper />
        <div className="banner-2">
          <video src="../static/banner2.mp4" autoPlay muted loop className="" />
          <div className="video-two-box">
            <p className="big-title">安全驾驶 美好出行</p>
            <p className="small-title">
              基于自主研发的征程系列边缘人工智能处理器及计算平台，地平线面向车外环境感知、车内多模态交互以及高精度地图建模等智能驾驶相关领域，为合作伙伴提供定制化的解决方案。
            </p>
            <p className="blue-link">了解更多 &gt;</p>
          </div>
        </div>
        <div className="banner-3">
          <img src="../static/banner3.png" />
          <div className="banner-3-box">
            <p className="big-title">用 “芯”创造 智能万物</p>
            <p className="small-title">
              基于创新的人工智能专用处理器架构
              BPU，自主设计研发面向智能驾驶的征程系列处理器和面向 AIoT
              的旭日系列处理器，以领先的边缘人工智能处理器技术赋能智能终端。
            </p>
            <p className="blue-link">了解更多 &gt;</p>
          </div>
        </div>
        <div className="banner-4">
          <div className="banner-4-box">
            <p className="big-title">赋能客户</p>
            <div className="banner-4-small">
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
            </div>
            <div className="banner-4-small">
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
              <div className="banner-4-small-img"></div>
            </div>
          </div>
        </div>
        {/* <Header /> */}
        {/* <div className="container">
          <main>
            <Button onClick={abc}>{count}</Button>
          </main> */}

        {/* <footer></footer> */}

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .logo {
            height: 1em;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
        {/* </div> */}
      </div>
    </Layout>
  );
}
