import React from "react";

const Card = ({ card }) => {
  return (
    <div className="max-w-[180px] min-w-[180px]  flex flex-col gap-0 items-center justify-center h-[180px] rounded-lg bg-[#F7F7F7] text-[#16162E]">
      <img src={card.imageUrl} className="w-[50px] h-auto" alt="png" />
      <p className="text-[18px]">
        {card.title.charAt(0).toUpperCase() + card.title.slice(1)}
      </p>
    </div>
  );
};

export default Card;
