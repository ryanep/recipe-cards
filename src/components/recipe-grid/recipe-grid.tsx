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
            isPriority
            isUnoptimized
            src={`/images/recipes/${recipe.imageUrl}`}
            width={300}
          />

          <div className="flex grow flex-col gap-2 p-3">
            <Heading as="h3" type="h2">
              {recipe.name}
            </Heading>

            <StarRating rating={recipe.rating} />
          </div>
        </Link>
      ))}
    </div>
  );
};
