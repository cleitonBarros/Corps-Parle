import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.COLORS["WHITE-900"]};
`;
export const Text = styled.hgroup`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  article {
    width: 100%;
    background: ${({ theme }) => theme.COLORS["PINK-100"]};
    p {
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      font-family: "Montagu Slab", serif;
      font-weight: 400;
    }
  }
  .social-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem;

    .social-link {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }

  @media (${({ theme }) => theme.DEVICE.min}) {
    article {
      p {
        font-size: 0.75rem;
      }
    }
  }
  @media (${({ theme }) => theme.DEVICE.tablet}) {
    flex-direction: row;
    article {
      p {
        padding: 0.5rem 2rem;
      }
    }
    .social-group {
      background: ${({ theme }) => theme.COLORS["PINK-100"]};
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      padding: 0;

      .social-link {
        padding: 0.2rem 2rem;
        svg {
          width: 24px;
          height: 24px;
        }
      }
      .menu {
        display: none;
      }
    }
  }
`;
export const Middle = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.25rem 0;

  figure {
    width: 50%;
    height: auto;
    img {
      width: 100%;
    }
  }

  @media (${({ theme }) => theme.DEVICE.laptop}) {
    figure {
      width: 25%;
      img {
        width: 100%;
      }
    }
  }
`;
export const Nav = styled.nav`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1.25rem 10%;
  background-color: ${({ theme }) => theme.COLORS["WHITE-300"]};

  ul {
    width: 100%;
    max-width: 80rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 2rem;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 1rem;
        font-family: "poppins";
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS["BLACK-600"]};
        transition: all 0.2s ease-in;

        &:hover {
          color: ${({ theme }) => theme.COLORS["PINK-900"]};
        }
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    display: flex;
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
    padding: 1.25rem 12%;
    ul {
      li {
        a {
          font-size: 1.25rem;
        }
      }
    }
  }
`;