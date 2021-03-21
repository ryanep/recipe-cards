import { useFormik } from 'formik';
import { Spacer } from '#/components/spacer';
import { StarRatingFilter } from '#/components/star-rating-filter';
import * as styled from './styles';
import type { RecipeFiltersProps } from './types';

export const RecipeFilters = ({
  initialValues,
  onSubmit,
}: RecipeFiltersProps) => {
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
      <styled.Button type="submit">Apply filters</styled.Button>
    </form>
  );
};
