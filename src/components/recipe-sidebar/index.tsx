import { Heading } from '#/components/heading';
import { ServingInput } from '#/components/serving-input';
import { Spacer } from '#/components/spacer';
import * as styled from './styles';
import { RecipeSidebarProps } from './types';

export const RecipeSidebar = ({
  imageUrl,
  name,
  description,
  servings,
  onServingChange,
}: RecipeSidebarProps) => (
  <div>
    <styled.Image src={imageUrl} />
    <styled.Content>
      <styled.Name>{name}</styled.Name>
      <Spacer size="medium" />
      <styled.Description>{description}</styled.Description>
      <Spacer size="large" />
      <Heading type="h2" as="h4" text="Servings" />
      <Spacer size="medium" />
      <ServingInput
        servings={servings}
        onChange={onServingChange}
        min={1}
        max={12}
      />
    </styled.Content>
  </div>
);
