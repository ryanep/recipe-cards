import Link from 'next/link';
import { Heading } from '#/components/heading';
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
            </styled.Info>
          </styled.Link>
        </Link>
      ))}
    </styled.Grid>
  );
};
