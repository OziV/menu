import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

function Home() {
  const [data, setData] = useState(items);
  // console.log(data);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories data={data} />
        <Menu items={data} />
      </section>
    </main>
  );
}

export default Home;
