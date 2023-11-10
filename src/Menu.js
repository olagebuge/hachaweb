import React, { useState, useEffect } from "react";

const groupByFoodType = (foods) => {
  const groupedFoods = {};
  foods.forEach((food) => {
    const {type} = food;
    if(!groupedFoods[type]) {
      groupedFoods[type] = [];
    }
    groupedFoods[type].push(food);
  });
  return groupedFoods;
}

const Menu = () => {
  const [hachaFoods, setHachaFoods] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({});

  useEffect(() => {
    fetch("https://test.mobuyashea.club/api/foods",{headers: { 
      'Referer': 'https://olagebuge.github.io/hachaweb/'
    }})
      .then((res) => res.json())
      .then((data) => setHachaFoods(data))
      .catch((err) => console.log(err));
  }, []);  
  
  const handleCategoryClick = (category) => {
    setSelectedCategories((prevSelected) => ({
      ...prevSelected,
      [category]: !prevSelected[category], // 切换选中状态
    }));
  };

  const filteredFoods = hachaFoods.filter(
    (food) => !selectedCategories[food.type]
  );

  const groupedFoods = groupByFoodType(filteredFoods);

  return (
    <section className="menu_wrapper">
      <section className="menu_select_block">
      <div className="attention"><a href="https://www.facebook.com/profile.php?id=100063732890876"><h3>菜單品項繁多</h3><p>當日供應品項及售價請以實際店面為主</p></a></div> 
      <ul className="menu_tabs">       
        <li
          className={selectedCategories["特製養生雞湯"] ? "minus" : ""}
          onClick={() => handleCategoryClick("特製養生雞湯")}
        >
          特製養生雞湯
        </li>       
        <li
          className={selectedCategories["飯、麵類"] ? "minus" : ""}
          onClick={() => handleCategoryClick("飯、麵類")}
        >
         飯、麵類
        </li>
        <li
          className={selectedCategories["湯品"] ? "minus" : ""}
          onClick={() => handleCategoryClick("湯品")}
        >
          湯品
        </li>
        <li
          className={selectedCategories["炸物"] ? "minus" : ""}
          onClick={() => handleCategoryClick("炸物")}
        >
         炸物
        </li>
        <li
          className={selectedCategories["熱炒"] ? "minus" : ""}
          onClick={() => handleCategoryClick("熱炒")}
        >
         熱炒
        </li>
        <li
          className={selectedCategories["海產類"] ? "minus" : ""}
          onClick={() => handleCategoryClick("海產類")}
        >
         海產
        </li>       
        <li
          className={selectedCategories["土雞類"] ? "minus" : ""}
          onClick={() => handleCategoryClick("土雞類")}
        >
         土雞
        </li> 
        
        <li
          className={selectedCategories["泡茶類"] ? "minus" : ""}
          onClick={() => handleCategoryClick("泡茶類")}
        >
         泡茶
        </li>
        <li
          className={selectedCategories["酒類、飲料"] ? "minus" : ""}
          onClick={() => handleCategoryClick("酒類、飲料")}
        >
         酒類、飲料
        </li>
        <li
          className={selectedCategories["單品咖啡"] ? "minus" : ""}
          onClick={() => handleCategoryClick("單品咖啡")}
        >
         單品咖啡
        </li>
      </ul>
      </section>
      
      <section className="menu-content">
        {Object.entries(groupedFoods).map(([foodType, foods]) => (
          <div className="food-type-container" key={foodType}>
            <h3 className="food-type">{foodType}</h3>
            {foods.map((food) => (
              <div className="menu-item noRow" key={food.id}>
                <h4>{food.name}</h4>
                <div>
                  <p>{food.priceA}</p>
                  <p>{food.priceB}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </section>
  );
};

export default Menu;
