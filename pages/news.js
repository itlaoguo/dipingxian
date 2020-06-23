import './news.less';
import Router from 'next/router';
import { useState } from 'react';
let initList = [
  {
    id: 0,
    img: '/static/news1.png',
    title: '地平线公告 B 轮融资',
    date: '2019年2月1日',
    content:
      '2019 年 2 月 27 日，地平线（Horizon Robotics）公告由 SK 中国、SK Hynix 以及数家中国一线汽车集团（与旗下基金）联合领投的 B 轮融资，获得 6 亿美金左右的投资，估值达 30 亿美金…',
  },
  {
    id: 1,
    img: '/static/news2.png',
    title: '国家知识产权局赴地平线调研',
    date: '2019年2月1日',
    content:
      '2019 年 2 月 27 日，地平线（Horizon Robotics）公告由 SK 中国、SK Hynix 以及数家中国一线汽车集团（与旗下基金）联合领投的 B 轮融资，获得 6 亿美金左右的投资，估值达 30 亿美金…',
  },
];
export default function News() {
  const tabsList = [
    {
      name: '全部新闻',
      id: 0,
    },
    {
      name: '企业咨询',
      id: 1,
    },
    {
      name: '生态合作',
      id: 2,
    },
    {
      name: '产品技术',
      id: 3,
    },
    {
      name: '公司活动',
      id: 4,
    },
    {
      name: '下载中心',
      id: 5,
    },
  ];
  const [newsArr, setNewsArr] = useState(initList);
  setNewsArr;
  const handleClick = (item) => {
    console.log(item, 'tie');
  };
  const goDetail = (item) => {
    console.log(item, 'itme');
    const { id } = item;
    Router.push(`/news/[${id}]`);
  };
  return (
    <div className="main">
      <div className="main-bg">
        <div className="news-banner">
          <img src="/static/news-banner.png" />
          <p>新闻中心</p>
        </div>
        <div className="news-tabs">
          <div className="news-tabs-title">
            {tabsList.map((item) => {
              return (
                <span
                  className="news-tabs-a"
                  onClick={() => handleClick(item)}
                  key={item.id}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
          <div className="news-list">
            <div className="relevant-left">
              {newsArr.map((item) => {
                return (
                  <div
                    className="news-content"
                    onClick={() => goDetail(item)}
                    key={item.id}
                  >
                    <img className="news-left" src={item.img} />
                    <div className="news-right">
                      <p>{item.title}</p>
                      <span>{item.date}</span>
                      <em>{item.content}</em>
                    </div>
                  </div>
                );
              })}
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
      </div>
    </div>
  );
}
