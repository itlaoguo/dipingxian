import './about.less';
import bgAbout from '../static/about-us.png';
export default function About() {
  return (
    <div className="main">
      <div className="about-bg">
        <img src={bgAbout} />
        <p>关于我们</p>
      </div>
      <div className="mini-nav">
        <div className="nav-display">
          <p>公司简介</p>
          <p>发展历程</p>
          <p>投资伙伴</p>
          <p>联系我们</p>
        </div>
      </div>
    </div>
  );
}
