import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const SearchBarWrapper = styled("div")`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ height, xl }) => (height ? height : xl ? "4rem" : "2.5rem")};
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  /* border: 1px solid ${colors.iconColor}; */
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  .svgWrapper {
    width: 30%;
    height: 100%;
    border-radius: 19px;
    cursor: pointer;
    background: ${colors.bg.lightBg};
    display: flex;
    justify-content: center;
    align-items: center;
    .svg {
      color: ${({ color }) => (color ? color : colors.primary)};
      font-size: ${({ xl }) => (xl ? "2rem" : "1.2rem")};
    }
  }

  input {
    border: none;
    color: ${({ color }) => (color ? color : colors.primary)};
    font-size: ${({ xl }) => (xl ? "1.3rem" : `${fontSizes.smallBody}`)};
    width: 100%;
    flex: 1;
    height: 100%;
    padding: 0.5rem;
    padding-left: 0.9rem;
    outline: 0;
    font-family: inherit;

    ::placeholder {
      color: ${({ color }) => (color ? color : colors.primary)};
      font-size: ${({ xl }) => (xl ? "1.3rem" : `${fontSizes.smallBody}`)};
    }
  }
`;
