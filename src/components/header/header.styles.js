import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { NotificationIcon as Icon } from "../../assets/svg";

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
export const SearchBarSection = styled.div`
  width: auto;
  min-width: 50%;
  height: auto;

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
export const HeaderInfoSection = styled.div`
  width: max-content;
  border: 1px solid ${colors.shade};
  border-radius: 8px;
  pading: 11px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
  }
`;
export const NotificationContainer = styled(FlexibleDiv)`
  padding: 0;
`;
export const NotificationIcon = styled(Icon)``;
export const Ribbon = styled(FlexibleDiv)`
  background: ${colors.red};
  height: max-content;
  width: max-content;
  padding: 0.2rem;
  border-radius: 4px;
  border: 1px solid ${colors.red};
`;
export const RibbonText = styled(Text)`
  font-size: ${fontSizes.small};
  margin: 0;
  color: ${colors.white};
  line-height: ${fontSizes.small};
`;

export const UserProfileContainer = styled("div")`
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

export const UserProfilePreview = styled(FlexibleDiv)``;

export const UserProfileImage = styled.img``;
