import styled from "styled-components";

export const Box = styled.article`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  hgroup {
    h3 {
      font-size: 1.25rem;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 0.5rem;
      margin-bottom: 1rem;

      span {
        width: 10px;
        height: 25px;
        background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
      }
      h2 {
        text-transform: uppercase;
        font-size: 1.5rem;
        font-weight: 600;
        font-family: "Fira Sans", sans-serif;
        color: ${({ theme }) => theme.COLORS["BLACK-900"]};
      }
    }
  }

  p {
    line-height: 1.4;
    font-size: 1rem;
    font-weight: 600;
    text-align: justify;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
    width: 100%;
    span {
      background-color: ${({ theme }) => theme.COLORS["PINK-100-1"]};
      height: 8px;
      &:first-child {
        width: 100%;
      }
      &:nth-child(2) {
        width: 80%;
      }
      &:nth-child(3) {
        width: 60%;
      }
    }
  }
  @media (${({ theme }) => theme.DEVICE.mobile}) {
    max-width: 500px;
    > div {
      align-items: flex-start;
      width: 80%;
    }
  }
  @media (${({ theme }) => theme.DEVICE.tablet}) {
    max-width: 450px;
    min-width: 320px;
  }

  @media (${({ theme }) => theme.DEVICE.laptop}) {
    justify-content: space-evenly;

    hgroup {
      h3 {
        font-size: 2.5rem;
      }
      .title {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        margin-bottom: 1rem;

        span {
          width: 10px;
          height: 25px;
          background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
        }
        h2 {
          text-transform: uppercase;
          font-size: 1.5rem;
          font-weight: 600;
          font-family: "Fira Sans", sans-serif;
          color: ${({ theme }) => theme.COLORS["BLACK-900"]};
        }
      }
    }
  }
`;
