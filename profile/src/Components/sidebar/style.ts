import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Sidebar = styled(Dialog.Content)`
  position: fixed;
  top: 2.75rem;
  left: 0;
  z-index: 100;
  width: 70%;
  min-height: 100vh;

  transition: all 0.5s;
  transform: translateX(-100%);

  background-color: ${({ theme }) => theme.COLORS["WHITE-900"]};
  &.open {
    transition: all 1s;
    transform: translateX(0);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    width: 55%;
  }
`;
export const Menu = styled.menu`
  padding: 0 3rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  .logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    p {
      font-size: 1.5rem;
      font-weight: 400;
      font-family: "Nova Slim", cursive;
      color: ${({ theme }) => theme.COLORS["BLACK-500"]};

      position: absolute;
      top: -12px;
      left: -5px;
    }
    h2 {
      font-family: "Nova Slim", cursive;
      font-size: 2rem;

      &::first-letter {
        color: ${({ theme }) => theme.COLORS["PINK-300"]};
      }
      span {
        color: ${({ theme }) => theme.COLORS["PINK-200"]};
      }
    }
  }
  ul {
    height: 22rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    li {
      a {
        color: ${({ theme }) => theme.COLORS["BLACK-900"]};
        font-size: 1.25rem;
        font-weight: 600;
        text-transform: uppercase;
        &.active {
          color: ${({ theme }) => theme.COLORS["PINK-300"]};
        }
        &:hover {
          color: ${({ theme }) => theme.COLORS["PINK-300"]};
        }
      }
    }
  }

  @media (${({ theme }) => theme.DEVICE.tablet}) {
    transform: translateX(-100%);
  }
`;
export const Hamburger = styled(Dialog.Trigger)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 30px;
    background: #111;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      top: 24px;
    }
  }

  &.open span:nth-child(1) {
    top: 18px;
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  &.open span:nth-child(3) {
    top: 18px;
    transform: rotate(-135deg);
  }
  @media (${({ theme }) => theme.DEVICE.tablet}) {
    display: none;
  }
`;
