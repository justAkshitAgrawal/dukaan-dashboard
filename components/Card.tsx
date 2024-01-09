import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white w-full  p-[20px] rounded-lg shadow-md shadow-[#1A181E0A]">
      <p className="text-black/30 text-[16px]">{title}</p>
      <p className="text-[32px] font-medium">{description}</p>
    </div>
  );
};

export default Card;
