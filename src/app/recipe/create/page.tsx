import { Button } from "#/components/button";
import { Heading } from "#/components/heading";
import { Input } from "#/components/input";
import { Select } from "#/components/select";
import { Textarea } from "#/components/textarea";
import { createRecipeAction } from "./actions";

const ratingOptions = [
  {
    label: "5 stars",
    value: "5",
  },
  {
    label: "4 stars",
    value: "4",
  },
  {
    label: "3 stars",
    value: "3",
  },
  {
    label: "2 stars",
    value: "2",
  },
  {
    label: "1 star",
    value: "1",
  },
];

const CreateRecipePage = () => {
  return (
    <div>
      <Heading type="h1">Create recipe</Heading>

      <form action={createRecipeAction} className="flex flex-col gap-2">
        <label className="block" htmlFor="name">
          <span className="block">Recipe name</span>

          <Input id="name" name="name" type="text" />
        </label>

        <label className="block" htmlFor="description">
          <span className="block">Description</span>

          <Textarea id="description" name="description" />
        </label>

        <label className="block" htmlFor="image">
          <span className="block">Image</span>

          <Input id="image" name="iamge" type="file" />
        </label>

        <label className="block" htmlFor="rating">
          <span className="block">Rating</span>

          <Select
            id="rating"
            isRequired
            name="rating"
            options={ratingOptions}
          />
        </label>

        <Button type="submit">Create recipe</Button>
      </form>
    </div>
  );
};

export default CreateRecipePage;
