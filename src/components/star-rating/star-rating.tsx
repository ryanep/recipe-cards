import { StarIcon } from "#/components/star-icon";

interface StarRatingProps {
  readonly rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  return (
    <div className="flex text-yellow-500">
      {Array.from({ length: rating }).map((_, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <StarIcon key={index} />;
      })}
    </div>
  );
};
