import React from "react";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        style={{
          color: i <= rating ? "#FF6B08" : "#6d7a8d",
          fontSize: "17px",
        }}>
        ★
      </span>
    );
  }

  return <div>{stars}</div>;
};
