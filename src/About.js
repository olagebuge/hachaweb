import React from "react";
import Slidershow from "./Slidershow";
import Map from "./Map";

const About = () => {
  return (
    <section className="horizonBlock3">
      <div className="topWrap">
        <section className="hachastory">
          <h1 className="h2Title">哈茶讚在彰化等你。</h1>
          <p>
            哈茶讚坐落在彰化銀行山，沿著台74縣往彰化快官霧峰線行駛，左轉中央公路即可抵達～
          </p>
          <p>
            本店供應熱炒美食、投幣式卡拉OK、茶葉、咖啡，讓您用餐時也能歡唱！除了小小的花園，
            還能瞭望到遠方的景色，山霧秀麗，景色宜人。附近有許多知名牧場景點，遊玩過後，
            也歡迎闔家攜伴前來，填飽您飢腸轆轆的胃，一同享受悠閒的假日時光。
          </p>
        </section>
        <Map />
      </div>

      <Slidershow />
    </section>
  );
};

export default About;
