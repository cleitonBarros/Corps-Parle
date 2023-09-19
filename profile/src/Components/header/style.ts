import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
