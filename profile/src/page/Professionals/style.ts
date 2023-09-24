import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  max-width: 80rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 2rem;

  figure {
    display: block;

    min-width: 16rem;
    width: 60%;
    height: auto;

    img {
      width: 100%;
      height: auto;
    }
  }
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
    }
  }
  article {
    > div {
      span {
        display: none;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    figure {
      display: block;

      min-width: 16rem;
      width: 60%;
      height: auto;

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    background-color: ${({ theme }) => theme.COLORS["WHITE-900"]};
    flex-direction: row;

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
    }

    figure {
      min-width: 300px;
      max-width: 350px;
    }
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
    gap: 0;
  }
`;
