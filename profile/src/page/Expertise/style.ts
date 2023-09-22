import styled from "styled-components";

import fisio from "../../assets/png/fisio2.jpg";
import nutri from "../../assets/png/fruits.jpg";
import psique from "../../assets/png/psique2.jpg";

export const container = styled.section`
  width: 100%;
  max-width: 80rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  article {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;
    h2 {
      font-size: 1rem;
    }
    div {
      width: 40px;
      height: 8px;
      background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    article {
      flex-direction: row;
      h2 {
        font-size: 1.125rem;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    article {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
  }
`;

export const Slider = styled.ul`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    width: 100%;
    background: red;
    transition: all 1s;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    &.card-1 {
      background-image: url(${nutri});
    }
    &.card-2 {
      background-image: url(${fisio});
    }
    &.card-3 {
      background-image: url(${psique});
    }
    a {
      font-size: 1.75rem;
      font-weight: 600;
      font-family: "Nova Slim", cursive;
      padding: 1rem;
      background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
      color: ${({ theme }) => theme.COLORS["WHITE-600"]};
      text-align: center;
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    gap: 0;
    flex-direction: row;
    .card {
      height: 500px;
      width: 80%;
      flex: 1;

      &:hover {
        flex: 3;
      }

      a {
        font-size: 1.5rem;
      }
    }
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
  }
`;
