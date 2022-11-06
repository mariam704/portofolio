import React, { useState } from 'react';
import Categories from './Categories';
import Menu from './Menu';
import items from './data';
import './Hstory.css';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


const Hstory = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      // console.log()
      return ;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
    // console.log(category.includes('project'))
  };
  return (
    <main>
    <section className="menu section">
      <div className="title">
        <h2>our portoflo</h2>
        <div className="underline"></div>
      </div>
      {/* <categories categories={categories} filterItems={filterItems} /> */}
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>
  )
}

export default Hstory