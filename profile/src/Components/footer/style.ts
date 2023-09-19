import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS["WHITE-500"]};
`;
export const Article = styled.article`
  padding: 1.25rem 16%;

  p {
    color: ${({ theme }) => theme.COLORS["BLACK-900"]};
    font-weight: 400;
    font-size: 1rem;
    font-family: "Poppins", sans-serif;

    a {
      font-weight: 600;
      &:hover {
        color: ${({ theme }) => theme.COLORS["BLACK-500"]};
      }
    }
  }
`;
