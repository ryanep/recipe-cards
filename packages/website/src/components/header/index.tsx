import { Breadcrumbs } from "#/components/breadcrumbs";
import * as styled from "./styles";
import { HeaderProps } from "./types";

export const Header = ({ breadcrumbs }: HeaderProps) => {
  return (
    <styled.Header>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <styled.Dropdown>
        <styled.DropdownSummary>Settings</styled.DropdownSummary>
        <styled.DropdownList>
          <li>
            <styled.DropdownLink
              href="https://recipe-cards.sanity.studio"
              target="_blank"
              rel="noopener"
            >
              Manage recipes
            </styled.DropdownLink>
          </li>
        </styled.DropdownList>
      </styled.Dropdown>
    </styled.Header>
  );
};
