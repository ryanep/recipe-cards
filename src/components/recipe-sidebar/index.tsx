import { RecipeSidebarProps } from './types';
import * as styled from './styles';
import { Spacer } from '#/components/spacer';

export const RecipeSidebar = ({
  imageUrl,
  name,
  description,
}: RecipeSidebarProps) => {
  return (
    <div>
      <styled.Image src={imageUrl} />
      <styled.Content>
        <styled.Name>{name}</styled.Name>
        <Spacer size="medium" />
        <styled.Description>{description}</styled.Description>
      </styled.Content>
    </div>
  );
};
