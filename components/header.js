import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import './component.less';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import blue_logo from '../static/blue-logo.png';
import logo2x from '../static/logo2x.png';
NavDropdown;

//导航子项
function NavItem() {
  let list = [
    { name: '首页', url: '/', isHome: true },
    { name: '核心技术', url: '/middle' },
    { name: '智能驾驶', url: '/auto' },
    { name: '新闻中心', url: '/news' },
    { name: '关于我们', url: '/about' },
    { name: '加入我们', url: '/joinus' },
    { name: '开发者社区', url: '/development' },
  ];

  //判断当前路径，并加上进入状态
  useEffect(() => {
    const isRouter = Router.router.pathname.split('/')[1];
    list.forEach((item) => {
      if (item.url === '/' + isRouter) {
        item['mounseIn'] = true;
      }
    });
  });
  const [NavList, setNavList] = useState(list);
  const mounseEnter = (e, item, index) => {
    item['mounseIn'] = true;
    let arr = [...NavList];
    arr[index] = item;

    setNavList(arr);
  };
  const onMouseLeave = (e, item, index) => {
    const isRouter = Router.router.pathname.split('/')[1];
    if (item.url !== '/' + isRouter) {
      item['mounseIn'] = false;
      let arr = [...NavList];
      arr[index] = item;
      setNavList(arr);
    }
  };
  return (
    <Nav id="parent-Nav">
      {NavList.map((item, index) => {
        return (
          <Nav.Link
            key={index}
            href={item.url}
            prefetch="true"
            className={
              item['mounseIn'] && item['isHome']
                ? 'moutrue blue-link homeColor'
                : item['mounseIn']
                ? 'moutrue blue-link'
                : null
            }
            onMouseEnter={(event) => mounseEnter(event, item, index)}
            onMouseLeave={(event) => onMouseLeave(event, item, index)}
          >
            {item.name}
          </Nav.Link>
        );
      })}
    </Nav>
  );
}

//头部组件
export default function Header() {
  // console.log(Router, 'Router');
  const [isWhite, setIsWhite] = useState(false);
  const [transparent, setTransparent] = useState(0);
  useEffect(() => {
    Router.router.pathname === '/' ? setTransparent(1) : setIsWhite(true);
    window.addEventListener('scroll', handleScroll);
  }, []);
  const parentMouseIn = () => {
    Router.router.pathname === '/' ? setTransparent(0) : '';
    setIsWhite(true);
  };
  const parentMouseLeave = () => {
    if (Router.router.pathname === '/') {
      setTransparent(1);
      setIsWhite(false);
    }
  };
  const handleScroll = (e) => {
    // console.log(e.srcElement.scrollingElement.scrollTop, '浏览器滚动事件');
    if (e.srcElement.scrollingElement.scrollTop > 0) {
      setTransparent(0);
      setIsWhite(true);
    } else {
      if (Router.router.pathname === '/') {
        setTransparent(1);
        setIsWhite(false);
      }
    }
  };

  return (
    <div
      className={
        transparent === 1 ? 'Nav-parent is-transparent' : 'Nav-parent bg-white'
      }
    >
      <Navbar
        onMouseEnter={(event) => parentMouseIn(event)}
        onMouseLeave={(event) => parentMouseLeave(event)}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <Image className="logo" src={isWhite ? blue_logo : logo2x} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Featu</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <NavItem />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
