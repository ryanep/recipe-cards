import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { StarRatingFilter } from "#/components/star-rating-filter";
import * as styled from "./styles";

interface RecipeFiltersProps {
  readonly initialValues: RecipeFiltersFormValues;
  readonly onSubmit: (values: RecipeFiltersFormValues) => Promise<boolean>;
}

interface RecipeFiltersFormValues {
  rating: number[];
}

export const RecipeFilters = ({
  initialValues,
  onSubmit,
}: RecipeFiltersProps) => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        await onSubmit(values);
      } catch (error: unknown) {
        console.log("Form submit failed. Please try again.", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <styled.Label htmlFor="name">
        {t("filters:nameHeading")}
        <Spacer size="small" />
        <styled.Input
          autoComplete="off"
          id="name"
          name="name"
          onChange={formik.handleChange}
          type="text"
        />
      </styled.Label>
      <Spacer size="medium" />
      <Heading as="h5" text={t("filters:ratingHeading")} type="h3" />
      <Spacer size="small" />
      <StarRatingFilter onChange={formik.handleChange} />
      <Spacer size="medium" />
      <styled.Button type="submit">{t("filters:buttonText")}</styled.Button>
    </form>
  );
};
