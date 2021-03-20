import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import { StarRating } from '#/components/star-rating';
import * as styled from './styles';
import type { StarRatingFilterProps } from './types';

const options = [
  {
    id: '1',
    name: '1 Star',
    value: 1,
  },
  {
    id: '2',
    name: '2 Star',
    value: 2,
  },
  {
    id: '3',
    name: '3 Stars',
    value: 3,
  },
  {
    id: '4',
    name: '4 Stars',
    value: 4,
  },
  {
    id: '5',
    name: '5 Stars',
    value: 5,
  },
];

export const StarRatingFilter = ({ onChange }: StarRatingFilterProps) => {
  return (
    <div>
      <Heading type="h3" as="h5" text="Rating" />
      <Spacer size="small" />
      <ul>
        {options
          .slice()
          .reverse()
          .map((option) => (
            <li key={option.id}>
              <styled.Label htmlFor={`rating-${option.value}`}>
                <styled.Checkbox
                  id={`rating-${option.value}`}
                  name="rating"
                  value={option.value}
                  type="checkbox"
                  onChange={onChange}
                />
                <StarRating rating={option.value} />
              </styled.Label>
            </li>
          ))}
      </ul>
    </div>
  );
};
