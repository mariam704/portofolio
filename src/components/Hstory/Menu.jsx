import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id,image, desc ,title} = menuItem;
        return (
          <article key={id} className='row'>
           <div className="columan">
            <div className="effect">
               <div className="effect-img">
                <img src={image} alt={title} ></img>
              </div>
            <div className="effect-text">
                <div className="effect-btn">
                  <button> <a href={desc}> Demo</a> </button>
                
              </div>
            </div>
            </div>

           </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
