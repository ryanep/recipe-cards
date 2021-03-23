import { Breadcrumbs } from '#/components/breadcrumbs';
import * as styled from './styles';
import { HeaderProps } from './types';

export const Header = ({ breadcrumbs }: HeaderProps) => {
  return (
    <styled.Header>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </styled.Header>
  );
};
