import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { StarRatingFilter } from "#/components/star-rating-filter";
import * as styled from "./styles";
import type { RecipeFiltersProps } from "./types";

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
      <label htmlFor="name">
        <Heading type="h3" as="h5" text={t("filters:nameHeading")} />
        <Spacer size="small" />
        <styled.Input
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          autoComplete="off"
        />
      </label>
      <Spacer size="medium" />
      <Heading type="h3" as="h5" text={t("filters:ratingHeading")} />
      <Spacer size="small" />
      <StarRatingFilter onChange={formik.handleChange} />
      <Spacer size="medium" />
      <styled.Button type="submit">{t("filters:buttonText")}</styled.Button>
    </form>
  );
};
