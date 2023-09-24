import styled from "styled-components";

export const container = styled.section`
  width: 100%;
  max-width: 80rem;
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: 1rem;
    h2 {
      text-transform: uppercase;
      font-size: 1rem;
    }
    div {
      width: 40px;
      height: 8px;
      background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
    }
  }

  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 3rem;

    aside {
      max-width: 450px;
      hgroup {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        .title {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          span {
            background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
            width: 10px;
            height: 20px;
          }
        }
        h2,
        p {
          text-align: center;
          font-family: "Poppins", sans-serif;
          color: ${({ theme }) => theme.COLORS["BLACK-500"]};
        }
      }
      ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        li {
          display: flex;
          gap: 1rem;
          align-items: center;
          span {
            color: ${({ theme }) => theme.COLORS["BLACK-500"]};
          }
        }
      }
    }
    form {
      background-color: ${({ theme }) => theme.COLORS["WHITE-600"]};
      width: 100%;
      min-width: 400px;
      max-width: 450px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: none;
      border-radius: 10px;
      padding: 3rem 1rem;
      gap: 1.25rem;

      div {
        width: 70%;
        display: flex;
        flex-direction: column;
      }
      label {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 8px;
        font-size: 1rem;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
      }
      input,
      textarea {
        padding: 0 0.5rem;
        width: 100%;
        resize: none;
        height: 40px;
        border: none;
        border-radius: 4px;
        background-color: #3c3c3c0f;
      }
      textarea {
        height: 60px;
      }
    }
    button {
      cursor: pointer;
      width: 60%;
      height: 50px;
      font-size: 1.25rem;
      border: none;
      background-color: ${({ theme }) => theme.COLORS["PINK-900"]};
      color: ${({ theme }) => theme.COLORS["BLACK-900"]};
      transition: all 0.5s;
      border-radius: 4px;
      font-weight: 500;
      font-family: "Poppins", sans-serif;

      &:hover {
        background-color: ${({ theme }) => theme.COLORS["PINK-300"]};
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.mobile}) {
    header {
      flex-direction: row;
      h2 {
        font-size: 1.125rem;
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    min-height: 100vh;
    article {
      flex-direction: row;
      aside {
        hgroup {
          align-items: flex-start;
          h2,
          p {
            text-align: left;
          }
        }
      }
    }
    header {
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (${({ theme }) => theme.DEVICE.laptop}) {
  }
`;
