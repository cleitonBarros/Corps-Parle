import styled from "styled-components";

export const Bg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    background-color: ${({ theme }) => theme.COLORS["PINK-100"]};
  }
`;
export const container = styled.section`
  width: 100%;
  max-width: 80rem;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 2rem;
  .text-group {
    font-family: "Poppins", sans-serif;
    text-align: left;

    h2,
    p,
    a {
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 2px;
    }
    p {
      font-size: 1rem;
      font-weight: 400;
    }
    a {
      font-size: 1.125rem;
      font-weight: 600;
      transition: all 1s;
      text-transform: uppercase;

      &:hover {
        color: ${({ theme }) => theme.COLORS["PINK-900"]};
        transform: scale(1.1);
      }
    }
  }
  figure {
    min-width: 16rem;
    width: 60%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    margin-top: 0;

    min-height: 100vh;

    flex-direction: row;

    .text-group {
      max-width: 350px;
      h2 {
        font-size: 1.25rem;
      }
      p {
        font-size: 1.25rem;
      }
    }
    figure {
      width: 100%;
      max-width: 450px;
    }
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
    justify-content: space-evenly;
    .text-group {
      max-width: 500px;
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
