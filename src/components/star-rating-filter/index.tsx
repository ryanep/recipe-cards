import { useTranslation } from 'react-i18next';
import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import * as styled from './styles';
import type { StarRatingFilterProps } from './types';

const options = [5, 4, 3];

export const StarRatingFilter = ({ onChange }: StarRatingFilterProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <Heading type="h3" as="h5" text={t('filters:ratingHeading')} />
      <Spacer size="small" />
      <styled.Options>
        {options
          .sort((a, b) => b - a)
          .map((option) => (
            <li key={option}>
              <styled.Label htmlFor={`rating-${option}`}>
                <styled.Checkbox
                  id={`rating-${option}`}
                  name="rating"
                  value={option}
                  type="checkbox"
                  onChange={onChange}
                />
                {t('common:rating', { count: option })}
              </styled.Label>
            </li>
          ))}
      </styled.Options>
    </div>
  );
};
