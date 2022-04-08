import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";

export const DrawerWrap = styled("div")`
  .desktopMainContainer {
    /*The width below stands for the width of the drawer when it opens and closes hence if there is more test in each list it can be increased*/
    width: ${({ smallDrawer }) => (smallDrawer ? "200px" : "50px")};
    height: 100%;
    background: ${({ background }) => (background ? background : "#fff")};
    position: fixed;
    border-right: 1px solid ${colors.shade};
    z-index: 10001;
    top: 0;
    transition: 300ms ease-in-out;
    overflow: hidden;

    @media (max-width: 600px) {
      display: none;
    }
  }

  .container {
    padding-top: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 5px 0;
      cursor: pointer;
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      .drawerItem {
        padding: 15px 12px;
        min-width: ${({ smallDrawer }) => smallDrawer && " 195px"};
        transition: 300ms ease-in-out;
        display: flex;
        justify-content: space-between;
        // background: blue;
        align-items: center;

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
        .iconTextWrapper {
          display: flex;
          justify-self: flex-start;
          // background: teal;
          width: auto;

          .logoMain {
            width: auto;
            margin-right: 13px;
            transition: 300ms ease-in-out;
          }
          span {
            font-size: 0.9rem;
            color: ${colors.black.regular};
            white-space: nowrap;
            transition: 300ms ease-in-out;
            min-width: ${({ smallDrawer }) => !smallDrawer && "80%"};
            animation: ${({ smallDrawer }) =>
              !smallDrawer && "fade 300ms forwards"};
          }
        }

        .iconWrapper {
          display: flex;
          justify-self: flex-end;
          // background: teal;
          width: auto;
        }
      }
      &:hover {
        background: ${colors.bg.lightBg};
        border-left: 3px solid ${colors.purple};
        span {
          color: ${colors.purple};
        }
      }
    }

    li > .isActive {
      background: ${colors.bg.darkBg};
      // border-left: 3px solid ${colors.primary};
      a span {
        color: ${colors.purple} !important;
        font-weight: 400;
      }
    }
    li > .dropDown {
      padding: 0 0 0 1.5rem;
      display: flex;
      height: auto;
      width: 100%;
      flex-direction: column;

      .dropDownNav {
        // background: blue;
        padding: 5px 2px;
        color: ${({ smallDrawer }) =>
          smallDrawer ? colors.purple : colors.black.regular};
        font-weight: ${({ smallDrawer }) =>
          smallDrawer ? fontWeights.medium : fontWeights.regular};
      }
      .dropDownNav:hover {
        cursor: pointer;
      }
    }
    li > .closeDropDown {
      display: none;
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
    // position: absolute;
    // left: ${({ smallDrawer }) => (!smallDrawer ? "0" : "15px")};
    // right: ${({ smallDrawer }) => (!smallDrawer ? "0" : "auto")};
    margin-left: ${({ smallDrawer }) => (smallDrawer ? "-2px" : "13px")};
    justify-content: center;
    top: 10px;
    padding: 10px 3px;
    width: 100%;
    height: auto;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      background: #88898c1a;
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
`;
