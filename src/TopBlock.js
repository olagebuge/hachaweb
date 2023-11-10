import React,{useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopBlock = () => {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="horizonBlock">
      <img className="tealeaf1" src="img/tealeaf1.png" />
      <section className="wrapper">
        
        <h1 className="slogan" data-aos="fade-up" data-aos-duration="2000">茶落喉快樂平安，<br></br>　　哈一杯心情真讚。</h1>
        <section className="brandimg">
          <div>因應物價上漲，即日起熱炒菜單價格調整。請參考臉書最新菜單。</div>
          <div className="holiday">端午節連假照常營業，歡迎提前預約。</div>
        </section>
        <section className="openingInfo">
          <h2>營業資訊</h2>
          <div className="openingInfo_frame">
            <div><img src="img/location_icon.png"/><span>彰化縣彰化市大彰路20號</span></div>
            <div><img src="img/open_icon.png"/><span>星期一公休<br></br>周二到周六16:30-22:00<br></br>週日16:30-23:00</span></div>
            <div><img src="img/phone_icon.png"/><span>04-7389719（歡迎來電預約）</span></div>
          </div>
        </section>
      </section>      
        
    </section>
  )
}

export default TopBlock;