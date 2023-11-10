import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BottomBlock = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section className="horizonBlock2">
        <section className="wrapper overFlowimg">
          <img data-aos="fade-right"
     data-aos-duration="1000" className="coffeebag" src="img/coffeebag.png" alt="咖啡包" />
          <img data-aos="fade-left"
     data-aos-duration="1000" data-aos-delay="300"  className="teacan" src="img/teacan.png" alt="茶葉罐" />
          <section className="openingInfo">
            <h2 className="h2Title">選購伴手禮</h2>
            <p>出遊不知道要帶什麼禮物回去送人嗎？來哈茶讚就對了，我們有精選單包裝的咖啡、茶葉，送禮方便，品質兼顧。</p>
            <Link to="/menu" className="linkButtom m_alignLeft">點我看品項</Link>
         </section>
          <img className="pileofcoffeebean" src="img/pileofcoffeebean.png" alt="咖啡豆" />
        </section>
    </section>
  )
}

export default BottomBlock