import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Spacer } from '#/components/spacer';
import { StarRatingFilter } from '#/components/star-rating-filter';
import * as styled from './styles';
import type { RecipeFiltersProps } from './types';

export const RecipeFilters = ({
  initialValues,
  onSubmit,
}: RecipeFiltersProps) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StarRatingFilter onChange={formik.handleChange} />
      <Spacer size="medium" />
      <styled.Button type="submit">{t('filters:buttonText')}</styled.Button>
    </form>
  );
};
