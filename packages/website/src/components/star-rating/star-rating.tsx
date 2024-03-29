import { Star } from "#/components/star";
import * as styled from "./styles";
import type { StarRatingProps } from "./types";

export const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array.from({ length: rating });

  return (
    <styled.Rating>
      {stars.map((star, index) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Star key={index} />
      ))}
    </styled.Rating>
  );
};
