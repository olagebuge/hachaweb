import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MiddleBlock = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="horizonBlock2 overflow-x">
      <img className="tealeaf2" src="img/tealeaf2.png" alt="茶葉2" />
      <img className="microphone" src="img/microphone.png" alt="麥克風" />
      <section className="wrapper">
        <div className="anchorBtn">買點<br></br>伴手禮 <img src="img/totop.png" alt="小箭頭" /></div>
        <section className="openingInfo">
          <h2 className="h2Title">熱炒美食&卡拉OK</h2>
          <p>特製雞湯、熱炒海鮮、炸物、飲品，種類多樣，闔家皆宜。</p>
          <p>另有弘音投幣式卡拉OK機，一首歌10元，讓您享受美食的同時盡情歡唱。</p>
          <Link to="/menu" className="linkButtom">點我看菜單</Link>
        </section>
      </section>
      <img data-aos="fade-left" data-aos-delay="100"  data-aos-duration="1500" className="fried-rice" src="img/fried-rice.png" alt="炒飯" />
    </section>
  )
}

export default MiddleBlock