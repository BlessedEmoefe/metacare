import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";

const drawer = "200px";

export const HeaderContainer = styled.div`
  width: ${({ smallDrawer }) =>
    smallDrawer ? `calc(100% - ${drawer})` : " calc(100% - 50px)"};
  background-color: ${colors.primary};
  padding: 1rem 3%;
  z-index: 100;
  transition: 300ms ease-in-out;
  display: flex;
  height: 60px;
  top: 0;
  right: 0;
  left: 0;
  margin: 0 0 0 auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
  }

  .major {
    width: auto;
    height: max-content;
    @media (max-width: 800px) {
      width: max-content;
    }
    @media (min-width: 600px) {
      display: none;
    }
    @keyframes rippleforward {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
        background: transparent;
      }
    }
    @keyframes rippleBack {
      0% {
        transform: scale(1);
      }
      100% {
        background: transparent;
        transform: scale(0);
      }
    }

    .iconize {
      position: relative;
      left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
      right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 35px;
      width: 35px;
      overflow: hidden;
      cursor: pointer;
      .ripple {
        width: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        background: ${({ smallDrawer }) => !(smallDrawer === true) && "red"};
        animation: ${({ smallDrawer }) =>
          smallDrawer
            ? " rippleforward 300ms ease-in-out forwards"
            : "rippleBack 300ms ease-in-out forwards"};
        position: absolute;
        border-radius: 50%;
      }
      &:hover {
        background: #88898c1a;
      }
      @media (min-width: 600px) {
        display: none;
      }
    }
  }
`;
export const LogoWrapper = styled.div`
  width: auto;
  height: 2rem;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 50px;
    display: none;
  }
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
  }
`;
export const UserProfileWrapper = styled.div`
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
  }
`;
export const UserName = styled(Text)``;

export const Icon = styled("div")`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  transition: background 0.1s ease-in-out;

  &:hover {
    background: #ddd;
  }

  svg {
    font-size: 1.5rem;
    color: #a85d2a;
  }
`;
