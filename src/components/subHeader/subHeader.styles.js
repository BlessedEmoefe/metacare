import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { Link } from "react-router-dom";

export const SubHeaderContainer = styled(FlexibleDiv)`
  justify-content: space-between;
`;
export const DirectorySection = styled(FlexibleDiv)`
  width: auto;
  min-width: 30%;
  justify-content: flex-start;
`;

export const SearchBarSection = styled(FlexibleDiv)`
  width: auto;
  min-width: 45%;
`;

export const ButtonSection = styled(FlexibleDiv)`
  width: auto;
  min-width: 20%;
`;

export const MainDirectory = styled(Link)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.title};
  font-weight: ${fontWeights.bold};
  text-decoration: none;
  cursor: pointer;
`;

export const Wrapper = styled(FlexibleDiv)`
  width: auto;
  height: auto;
  margin: 0 0.7rem;
`;

export const SubDirectory = styled(Link)`
  color: ${colors.black.strong};
  font-size: ${fontSizes.smallBody};
  font-weight: ${fontWeights.semiBold};
  text-decoration: none;
  cursor: pointer;
`;
