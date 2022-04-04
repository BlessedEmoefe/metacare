import styled from "styled-components";
import {colors} from "../../infrastructure/theme/colors"

export const DrawerWrap = styled("div")`
  .desktopMainContainer {
    /*The width below stands for the width of the drawer when it opens and closes hence if there is more test in each list it can be increased*/
    width: ${({ smallDrawer }) => (smallDrawer ? "200px" : "50px")};
    height: 100%;
    background: ${({ background }) => (background ? background : "#fff")};
    position: fixed;
    z-index: 10001;
    top: 0;
    transition: 300ms ease-in-out;
    overflow: hidden;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .modalMainContainerOverlay {
    width: ${({ noDrawer }) => (noDrawer ? "100%" : "0px")};
    height: 100%;
    background: ${({ background }) => (background ? background : "#06000061")};
    visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
    position: fixed;
    z-index: 10005;
    top: 0;
    @media (min-width: 600px) {
      display: none;
    }
  }
  .modalMainContainer {
    z-index: 10006;
    background: #fff;
    position: fixed;
    width: ${({ noDrawer }) => (noDrawer ? "200px" : "0px")};
    visibility: ${({ noDrawer }) => (noDrawer ? "visible" : "hidden")};
    height: 100%;
    top: 0;
    transition: 300ms ease-in-out;
    overflow: hidden;
    display: none;
    @media (max-width: 600px) {
      display: block;
    }
    .rightArrow {
      transform: rotate(180deg);
      top: 16px;
      left: auto;
      right: 10px;
    }

    .logo {
      width: 30%;
      top: 15px;
      left: 20px;
      margin: auto;
      position: absolute;
      cursor: pointer;
      .mainLogo {
        display: block;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .container {
    padding-top: 20px;
  }
  ul {
    /* margin-top: 40px; */
    list-style-type: none;
    padding: 0;
    li {
      margin: 5px 0;
      cursor: pointer;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      .drawerItem {
        padding: ${({ smallDrawer }) =>
          smallDrawer ? "15px 12px" : "15px 12px"};
        min-width: ${({ smallDrawer }) => smallDrawer && " 195px"};
        transition: 300ms ease-in-out;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .logoMain {
          margin-right: 13px;
          transition: 300ms ease-in-out;
        }
        @keyframes fade {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            visibility: collapse;
            opacity: 0;
          }
        }
        span {
          font-size: 0.8rem;
          color: ${colors.black.regular};
          white-space: nowrap;
          transition: 300ms ease-in-out;
          min-width: ${({ smallDrawer }) => !smallDrawer && "120px"};
          animation: ${({ smallDrawer }) =>
            !smallDrawer && "fade 300ms forwards"};
        }
      }
      &:hover {
        background: ${colors.bg.lightBg};
        border-left: 3px solid ${colors.primary};
        span {
          color: ${colors.primary};
        }
      }
    }
  }
  @keyframes rippleForward {
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
      transform: scale(0);
    }
    100% {
      background: transparent;
      transform: scale(1);
    }
  }
  .iconize {
    position: absolute;
    left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
    right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};

    margin-left: ${({ smallDrawer }) => (smallDrawer ? "-2px" : "13px")};
    top: 13px;
    padding: 8px;
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
      background: ${({ smallDrawer }) =>
        !(smallDrawer === "true") && "#6a666642"};
      animation: ${({ smallDrawer }) =>
        smallDrawer === undefined
          ? "none"
          : smallDrawer
          ? " rippleForward 300ms ease-in-out forwards"
          : "rippleBack 300ms ease-in-out forwards"};
      position: absolute;
      border-radius: 50%;
    }
    &:hover {
      background: #88898c1a;
    }
  }
  .isActive {
    background: ${colors.bg.lightBg};
    border-left: 3px solid ${colors.primary};
    a span {
      color: ${colors.primary} !important;
      font-weight: 400;
    }
  }
`;