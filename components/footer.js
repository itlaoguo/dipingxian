import './footer.less';
import { Accordion, Card } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="boot">
      <div className="footer">
        <div className="footer-box">
          <div className="isLeft">
            <p className="footer-p">我们的愿景：</p>
            <span className="footer-span">边缘人工智能芯片的全球领导者</span>
            <p className="footer-p">我们的使命：</p>
            <span className="footer-span">
              赋能万物，让每个人的生活更安全，更美好
            </span>
          </div>
          <div className="isRight">
            <div className="right-box">
              <div className="right-box-small">
                <p className="footer-p">公司业务</p>
                <span className="footer-span">智能驾驶</span>
              </div>
              <div className="right-box-small">
                <p className="footer-p">公司产品</p>
                <span className="footer-span">征程处理器</span>
                <span className="footer-span">旭日处理器</span>
                <span className="footer-span">地平线Matrix</span>
              </div>
              <div className="right-box-small">
                <p className="footer-p">关于我们</p>
                <span className="footer-span">公司介绍</span>
                <span className="footer-span">使命愿景</span>
                <span className="footer-span">发展历程</span>
                <span className="footer-span">投资者</span>
                <span className="footer-span">联系我们</span>
              </div>
              <div className="right-box-small last">
                <p className="footer-p">联系我们</p>
                <span className="footer-span">业务合作：db@horizon.ai</span>
                <span className="footer-span">其他合作：mkt@horizon.ai</span>
                <span className="footer-span">简历投递：dream@horizon.ai</span>
              </div>
            </div>
          </div>
          <div className="min-footer">
            <MinFooter />
          </div>
        </div>
        <div className="cbfixed"></div>
      </div>
      <div className="boot-bottom">
        <div className="boot-bottom-box">
          <div className="bottom-right">
            <div className="boot-btn">
              <img src="/static/wx-logo.png" />
              <span>地平线官微</span>
            </div>
            <div className="boot-btn">
              <img src="/static/wx-logo.png" />
              <span>地平线招聘号</span>
            </div>
            <div className="cbfixed"></div>
          </div>

          <div className="bottom-left">
            <p>Copyright 2020 地平线官网 京ICP备17020905号</p>
          </div>
          <div className="cbfixed"></div>
        </div>
      </div>
    </div>
  );
}
function MinFooter() {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <span>公司业务</span>
          <img src="/static/upimg.png" className="upimg" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <a href="#">智能驾驶</a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <span>公司产品</span>
          <img src="/static/upimg.png" className="upimg" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <a href="#">远征处理器</a>
            <a href="#">旭日处理器</a>
            <a href="#">地平线Matrix</a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <span>关于我们</span>
          <img src="/static/upimg.png" className="upimg" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <a href="#">公司介绍</a>
            <a href="#">使命愿景</a>
            <a href="#">发展历程</a>
            <a href="#">投资者</a>
            <a href="#">联系我们</a>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          <span>联系我们</span>
          <img src="/static/upimg.png" className="upimg" />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            <span className="footer-span">业务合作：db@horizon.ai</span>
            <span className="footer-span">其他合作：mkt@horizon.ai</span>
            <span className="footer-span">简历投递：dream@horizon.ai</span>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
