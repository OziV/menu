import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

function Home() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [data, setData] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filter = (category) => {
    if (category === "all") {
      setData(items);
      return;
    }
    const newList = items.filter((item) => item.category === category);
    setData(newList);
    return;
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filter} categories={categories} />
        <Menu items={data} />
      </section>
    </main>
  );
}

export default Home;
