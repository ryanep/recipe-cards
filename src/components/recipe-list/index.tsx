import Link from 'next/link';
import { useState } from 'react';
import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import * as styled from './styles';
import type { RecipeListProps } from './types';

export const RecipeList = ({ recipes }: RecipeListProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleClick = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <styled.Container isVisible={isVisible}>
      <Heading type="h2" text="Recipes" />
      <Spacer size="medium" />
      <styled.List>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.id}>
              <Link href={`/recipe/${recipe.id}`}>
                <styled.Link href={`/recipe/${recipe.id}`}>
                  {recipe.name}
                </styled.Link>
              </Link>
            </li>
          );
        })}
      </styled.List>
      <styled.ButtonLink
        href="https://recipe-cards.sanity.studio/desk"
        target="_blank"
        rel="noopener"
      >
        Sign In
      </styled.ButtonLink>
      <styled.Toggle onClick={handleToggleClick}>❯</styled.Toggle>
    </styled.Container>
  );
};
