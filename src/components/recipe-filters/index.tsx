import { useFormik } from 'formik';
import { StarRatingFilter } from '#/components/star-rating-filter';
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

      <button type="submit">Filter</button>
    </form>
  );
};
