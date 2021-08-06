import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import "./BusinessCards.css";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function BusinessCards() {
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick = (id) => ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id)

    setSelected((currentSelected) =>
      itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
    );
  }

  return (
    <div>
    <p className="heading">Bismillah Restuarant</p>
    <div className="inner">
     <p className="name">Business Cards</p>
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
        >
          {items.map(({ id }) => (
            <Card
              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
              className="cardbusiness"
            />)
          )}

        </ScrollMenu>
        </div>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext)

  return (
    <h1 disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      <IoIosArrowBack />
    </h1>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext)

  return (
    <h1 disabled={isLastItemVisible} onClick={() => scrollNext()}>
      <IoIosArrowForward />
    </h1>
  );
}

function Card({
  onClick,
  selected,
  title,
  itemId
}) {
  const visibility = React.useContext(VisibilityContext)
  const visible = visibility.isItemVisible(itemId);

  return (
    <div
      onClick={() => onClick(visibility)}
      style={{
        width: 'fit-content',
        padding: "70px",
        margin: '20px',
        borderRadius: '50%',
        backgroundColor: visible ? "white" : "transparent",
      }}
      tabIndex={0}
    >
      <div>
        <img style={{width: '400px', height: '210px', border: 'none'}} variant="none" src='\images\businessCard.png'/>
      </div>
      </div>
  );
}

export default BusinessCards;