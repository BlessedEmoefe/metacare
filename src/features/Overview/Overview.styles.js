import styled from "styled-components";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";


export const TopSection = styled(FlexibleDiv)`
 background:${colors.white};
 justify-content: space-around;
 flex-direction:column;

`;
export const Wrapper = styled(FlexibleDiv)`
  justify-content: space-around;
  width:80%;
`;
export const BottomSection = styled(FlexibleDiv)`
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled(Text)`
font-size:${fontSizes.smallTitle};
color:${colors.iconColor};
`;

export const TimerText = styled(Text)`
font-size:${fontSizes.body};
color:${colors.black.strong};
font-weight: ${fontWeights.bold};
`;
export const SubText = styled(Text)`
  font-size: ${fontSizes.smallBody};
  color: ${colors.iconColor};
`;

