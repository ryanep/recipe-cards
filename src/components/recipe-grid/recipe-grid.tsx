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
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(230px,_1fr))] gap-5">
      {recipes.map((recipe) => (
        <Link
          className="flex flex-col overflow-hidden no-underline transition-colors hover:opacity-90 dark:text-white dark:hover:bg-neutral-950"
          href={`/recipe/${recipe.id}`}
          key={recipe.id}
        >
          <Image
            alt={recipe.name}
            className="mb-2 aspect-square w-full rounded-md object-cover"
            height={300}
            isPriority
            isUnoptimized
            src={`/images/recipes/${recipe.imageUrl}`}
            width={300}
          />

          <div className="flex grow flex-col gap-1">
            <h2 className="font-semibold">{recipe.name}</h2>

            <StarRating rating={recipe.rating} />
          </div>
        </Link>
      ))}
    </div>
  );
};
