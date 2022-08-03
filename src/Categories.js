import React, { useEffect } from "react";

function Categories({ data }) {
  const buttonsList = [];
  //   console.log(buttonsList);
  const makeCategories = () => {
    for (let item of data) {
      if (!buttonsList.includes(item.category)) {
        buttonsList.push(item.category);
      }
    }
    return buttonsList;
  };

  useEffect(() => {
    makeCategories();
  }, []);

  return (
    <>
      {buttonsList.map((button) => {
        return <h1>{button}</h1>;
      })}
    </>
  );
}

export default Categories;
