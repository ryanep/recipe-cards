import { Heading } from "#/components/heading";
import { Image } from "#/components/image";
import { Link } from "#/components/link";
import { StarRating } from "#/components/star-rating";

interface RecipeGridProps {
  readonly recipes: {
    id: string;
    imageUrl: string;
    ingredients: {
      id: string;
      name: string;
      quantity: number;
    }[];
    name: string;
    rating: number;
    tags: {
      id: string;
      name: string;
    }[];
  }[];
}

export const RecipeGrid = ({ recipes }: RecipeGridProps) => {
  return (
    // eslint-disable-next-line tailwindcss/no-arbitrary-value
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-5">
      {recipes.map((recipe) => (
        <Link
          className="flex flex-col overflow-hidden rounded-md bg-neutral-100 no-underline transition-colors hover:bg-neutral-200 dark:bg-black dark:text-white dark:hover:bg-neutral-950"
          href={`/recipe/${recipe.id}`}
          key={recipe.id}
        >
          <Image
            alt={recipe.name}
            className="aspect-square h-52 w-full object-cover"
            height={300}
            isUnoptimized
            src={`/images/recipes/${recipe.imageUrl}`}
            width={300}
          />

          <div className="flex grow flex-col gap-2 p-3">
            <Heading as="h5" type="h2">
              {recipe.name}
            </Heading>

            <StarRating rating={recipe.rating} />

            {recipes.length > 0 ? (
              <ul className="mt-auto flex gap-2 overflow-scroll">
                {recipe.tags.map((tag) => (
                  <li
                    className="whitespace-nowrap rounded-sm bg-neutral-800 px-2 py-1 text-xs font-bold uppercase"
                    key={tag.id}
                  >
                    {tag.name}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Link>
      ))}
    </div>
  );
};
