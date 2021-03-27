export interface RecipeFiltersProps {
  initialValues: RecipeFiltersFormValues;
  onSubmit: (values: RecipeFiltersFormValues) => Promise<boolean>;
}

export interface RecipeFiltersFormValues {
  rating: number[];
}
