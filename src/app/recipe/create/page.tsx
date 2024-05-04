import { Heading } from "#/components/heading";
import { createRecipeAction } from "./actions";

const CreateRecipePage = () => {
  return (
    <div>
      <Heading type="h1">Create recipe</Heading>

      <form action={createRecipeAction}>
        <label className="block" htmlFor="name">
          <span className="block">Recipe name</span>

          <input className="text-black" id="name" name="name" type="text" />
        </label>

        <label className="block" htmlFor="description">
          <span className="block">Description</span>

          <input
            className="text-black"
            id="description"
            name="description"
            type="text"
          />
        </label>

        <label className="block" htmlFor="image">
          <span className="block">Image</span>

          <input className="text-black" id="image" name="image" type="file" />
        </label>

        <label className="block" htmlFor="rating">
          <span className="block">Rating</span>

          <select className="text-black" id="rating" name="rating">
            <option>Select rating</option>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>
        </label>

        <button className="bg-blue-600" type="submit">
          Create recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipePage;
