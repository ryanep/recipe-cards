import { Star } from "#/components/star";

interface StarRatingProps {
  readonly rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array.from({ length: rating });

  return (
    <div className="flex gap-0.5">
      {stars.map((_, index) => (
        /* eslint-disable-next-line react/no-array-index-key */
        <Star key={index} />
      ))}
    </div>
  );
};
