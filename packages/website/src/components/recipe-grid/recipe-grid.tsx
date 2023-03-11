import Link from "next/link";
import { Heading } from "#/components/heading";
import { Spacer } from "#/components/spacer";
import { StarRating } from "#/components/star-rating";
import * as styled from "./styles";
import type { RecipeGridProps } from "./types";

export const RecipeGrid = ({ recipes }: RecipeGridProps) => {
  return (
    <styled.Grid>
      {recipes.map((recipe) => (
        <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
          <styled.Link href={`/recipe/${recipe.id}`}>
            <styled.Image alt={recipe.name} src={`${recipe.imageUrl}?w=300`} />
            <styled.Info>
              <Heading as="h3" text={recipe.name} type="h2" />
              <Spacer size="small" />
              <StarRating rating={recipe.rating} />
              <Spacer size="medium" />
              {recipes.length > 0 ? (
                <styled.Tags>
                  {recipe.tags.map((tag) => (
                    <styled.Tag key={tag.id}>{tag.name}</styled.Tag>
                  ))}
                </styled.Tags>
              ) : null}
            </styled.Info>
          </styled.Link>
        </Link>
      ))}
    </styled.Grid>
  );
};
