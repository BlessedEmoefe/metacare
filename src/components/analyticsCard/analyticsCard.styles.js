import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import { CalendarIcon as Icon } from "../../assets/svg";

export const AnalyticsCardContainer = styled(FlexibleDiv)`
  background: red;
  width: 100%;
  border: 1px solid ${colors.shade};
  border-radius: 10px;
  background: ${colors.white};
  padding: 0;
`;

export const ChartSection = styled(FlexibleDiv)`
// background:red;
width:80%;
border:1px solid ${colors.shade};
border-radius:10px;
background:${colors.white};
padding;0;
`;

export const ChartTools = styled(FlexibleDiv)`
  // background: red;
  width: 100%;
  padding: 0;
`;

export const LeftTopSection = styled(FlexibleDiv)`
  padding: 1rem 0;
  width: 40%;
  justify-content: space-around;
`;

export const ChartName = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  font-size: ${fontSizes.smallTitle};
`;

export const PercentageBtn = styled(FlexibleDiv)`
  padding: 0 12px;
  width: auto;
  background: rgba(37, 187, 135, 0.1);
  border-radius: 4px;
  cursor: pointer;
`;
export const PercentageBtnText = styled(Text)`
  color: ${colors.primary};
  font-weight: ${fontWeights.semiBold};
  font-size: ${fontSizes.smallBody};
`;
export const RightTopSection = styled(FlexibleDiv)`
  padding: 0;
  width: 40%;
  justify-content: space-around;
  align-items: center;
`;
export const HighPriority = styled(FlexibleDiv)`
  padding: 0;
  width: auto;
`;
export const Indicator = styled(FlexibleDiv)`
  padding: 0;
  width: 10px;
  height: 10px;
  margin-right: 0.7rem;
  background: yellow;
`;
export const HighPriorityText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.medium};
  font-size: ${fontSizes.smallBody};
`;

export const VerticalDivider = styled(FlexibleDiv)`
  height: 50%;
  padding: 1em 0;
  width: 1px;
  background: ${colors.shade};
`;
export const FilterButton = styled(FlexibleDiv)`
  padding: 0.5rem 1rem;
  width: auto;
  background: transparent;
  border: 1px solid ${colors.shade};
  border-radius: 8px;
  cursor: pointer;
`;

export const ButtonText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.regular};
  font-size: ${fontSizes.smallBody};
  margin-right: 1rem;
`;
export const CalendarIcon = styled(Icon)`
  padding: 0;
  width: auto;
  background: teal;
`;

export const CardSection = styled(FlexibleDiv)`
  // background: red;
  padding: 1rem;
  width: 20%;
  height: 100%;
  // align-items: center;
  justify-content: space-around;
  // flex: 1;
`;

export const Card = styled(FlexibleDiv)`
  border: 1px solid ${colors.shade};
  border-radius: 10px;
  background: ${colors.white};
  padding: 1.5rem 1rem;
  align-items: flex-start;
`;
export const ResponseTime = styled(Text)`
  color: ${colors.text.regular};
  font-size: ${fontSizes.smallBody};

  width: 100%;
`;

export const TimeStamp = styled(Text)`
  color: ${colors.text.black};
  font-size: ${fontSizes.title};
  font-weight: ${fontWeights.bold};
  width: 100%;
`;
