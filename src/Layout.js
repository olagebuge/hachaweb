import { Outlet, Link } from "react-router-dom";
import React, {useRef,useEffect, useState} from "react";
 

const Layout = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navBugerRef = useRef(null);
  const mainMenuRef = useRef(null);

  const handleNavBugerClick = () => {
    navBugerRef.current.classList.toggle("active");
    mainMenuRef.current.classList.toggle("hidden");
  };
  return (
    <div>
       <img className="headerleaf1" src="img/headerleaf1.png" alt="header葉子1" />
       <img className="headerleaf2" src="img/headerleaf2.png" alt="header葉子2" />
      <header style={{ top: visible ? "0" : "-80px" }}>       
        <Link to="/">
          <img className="logoIMG" src="img/hacha_logo.png" alt="logo" />
        </Link>
        <div  ref={navBugerRef} className="navBuger" onClick={handleNavBugerClick}></div>
        <nav ref={mainMenuRef} className="mainMenu hidden">
          <ul>
            <li>
              <Link to="/about">關於我們</Link>
            </li>
            <li>
              <Link to="/menu">熱炒美食</Link>
            </li>
            <li>
              <Link to="/store">零售商品</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer>
        <ul className="storeInfo">
          <li>
            <a href="https://goo.gl/maps/ixqvoiqrD7AzuSGM8" target="_blank">
              <i class="fa-solid fa-location-dot"></i> 彰化縣彰化市大彰路20號
            </a>
          </li>
          <li>
            <a href="tel:+88647389719">
              <i class="fa-solid fa-phone"></i> 04-7389719
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100063732890876"
              target="_blank"
            >
              <i class="fa-brands fa-facebook"></i> 星期一公休｜周二到周六16:30-22:00｜週日16:30-23:00
            </a>
          </li>
        </ul>
        <div className="copyrightBlock">
          <img className="mountainIMG" src="img/footer_moutain.png" alt="footer山" />
          <h3>©2023 哈茶讚</h3>
          <ul className="SNSicons">
            <li><a
                href="https://www.facebook.com/profile.php?id=100063732890876"
                target="_blank"
              >
                <img src="img/facebook.png"/>
              </a>
            </li>
            <li><a
                href="https://www.facebook.com/profile.php?id=100063732890876"
                target="_blank"
              >
                <img src="img/instagram.png"/>
              </a>
            </li>
            <li><a
                href="https://www.facebook.com/profile.php?id=100063732890876"
                target="_blank"
              >
                <img src="img/map.png"/>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );

}
export default Layout;
