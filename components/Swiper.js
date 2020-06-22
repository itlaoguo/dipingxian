import Swiper from 'swiper';
import './Swiper.less';
import { useEffect } from 'react';

export default function MySwiper() {
  useEffect(() => {
    // 初始化
    const swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        loop: true,
        loopFillGroupWithBlank: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });
    swiper;
  });
  return (
    <div className="swiper-wrap">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <video src="../static/banner1.mp4" autoPlay muted loop />
            <div className="swiper-title">
              <p>AI on Horizon，Journe</p>
              <p className="small-p">芯无止境 开放赋能</p>
            </div>
          </div>
          <div className="swiper-slide">
            <video src="../static/banner1.mp4" autoPlay muted loop />
            <div className="swiper-title">
              <p>AI on Horizon，Journe</p>
              <p className="small-p">芯无止境 开放赋能</p>
            </div>
          </div>
          <div className="swiper-slide">
            <video src="../static/banner1.mp4" autoPlay muted loop />
            <div className="swiper-title">
              <p>AI on Horizon，Journe</p>
              <p className="small-p">芯无止境 开放赋能</p>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
