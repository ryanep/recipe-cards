import styled from "styled-components";

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    align-items: center;
    color: #cccccc;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const BreadcrumbSeparator = styled.svg`
  fill: #cccccc;
  font-size: 1.8rem;
`;
