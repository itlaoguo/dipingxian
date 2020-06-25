import Router from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import './newsid.less';
import bgimg from '../../static/Mask2x.png';
useRef;
export default function NewsId(prop) {
  console.log(prop['query'], 'props');
  console.log(Router, 'Router');

  return (
    <div className="main">
      <div className="main-box">
        <Breadcrumbs />
        <div className="news-left">
          <img src={bgimg} className="news-img" />
          <div className="news-p">
            <p>
              2019 年 2 月 27 日，地平线（Horizon Robotics）公告由 SK 中国、SK
              Hynix 以及数家中国一线汽车集团（与旗下基金）联合领投的 B
              轮融资，获得 6 亿美金左右的投资，估值达 30
              亿美金。参与本轮融资的其他机构与战略合作伙伴包括：中国泛海控股集团旗下泛海投资、民银资本、中信里昂旗下
              CSOBOR
              基金和海松资本等。同时，本轮融资还获得了包括晨兴资本、高瓴资本、云晖资本和线性资本等现有股东加持。这也是继
              2017 年下半年获得由 Intel 领投的超过 1 亿美金的 A+
              轮融资之后，成立仅三年多的地平线再次获得重量级投资。
              未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI
              赋能万物，让每个人的生活更安全，更美好！未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI
              赋能万物，让每个人的生活更安全，更美好！未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI
              赋能万物，让每个人的生活更安全，更美好！未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI
              赋能万物，让每个人的生活更安全，更美好！未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI
              赋能万物，让每个人的生活更安全，更美好！未来，地平线将继续向着“成为边缘人工智能芯片和计算平台的全球领导者”这一愿景不断迈进，让智能驾驶汽车、智能摄像头和智能机器人等各种智能终端“On
              the Horizon”，以 AI 赋能万物，让每个人的生活更安全，更美好！
            </p>
          </div>
        </div>
        <div className="relevant-right">
          <p className="relevant-title">相关文章</p>
          <div className="hr-style"></div>
          <div className="relevant-list">
            <div className="relevant-box">
              <img src="/static/news1.png" className="relevant-img" />
              <div className="relevant-details">
                <p>号外！！地平线喜提 CES 创新奖</p>
                <span>2019年2月21日</span>
              </div>
            </div>
          </div>
          <div className="hr-style"></div>
          <div className="relevant-list">
            <div className="relevant-box">
              <img src="/static/news1.png" className="relevant-img" />
              <div className="relevant-details">
                <p>号外！！地平线喜提 CES 创新奖</p>
                <span>2019年2月21日</span>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
const Breadcrumbs = () => {
  // let MenList = useRef(null);
  const [newsList, setNewsList] = useState([]);
  const [cureentClass, setCureentClass] = useState(null);
  const [currentTitle, setCurrentTitle] = useState(null);
  useEffect(() => {
    setCurrentTitle(localStorage.getItem('cureentTitle'));
    setNewsList(JSON.parse(localStorage.getItem('newsList')));
  }, []);
  useEffect(() => {
    newsList.forEach((item) => {
      console.log(localStorage.getItem('cureentid'));
      if (item.id == localStorage.getItem('cureentid')) {
        setCureentClass(item.name);
      }
    });
  }, [newsList]);
  return (
    <div className="bread">
      <Breadcrumb>
        <Breadcrumb.Item href="#" active>
          新闻中心
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/news">{cureentClass}</Breadcrumb.Item>
        <Breadcrumb.Item>{currentTitle}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};
