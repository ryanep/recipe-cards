import Link from 'next/link';
import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import { StarRating } from '#/components/star-rating';
import * as styled from './styles';
import type { RecipeGridProps } from './types';

export const RecipeGrid = ({ recipes }: RecipeGridProps) => {
  return (
    <styled.Grid>
      {recipes.map((recipe) => (
        <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
          <styled.Link href={`/recipe/${recipe.id}`}>
            <styled.Image src={recipe.imageUrl} />
            <styled.Info>
              <Heading type="h2" as="h4" text={recipe.name} />
              <Spacer size="small" />
              <StarRating rating={recipe.rating} />
              <Spacer size="medium" />
              <styled.Tags>
                <styled.Tag>Tag</styled.Tag>
                <styled.Tag>Tag</styled.Tag>
                <styled.Tag>Tag</styled.Tag>
                <styled.Tag>Tag</styled.Tag>
              </styled.Tags>
            </styled.Info>
          </styled.Link>
        </Link>
      ))}
    </styled.Grid>
  );
};
