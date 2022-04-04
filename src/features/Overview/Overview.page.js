import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {
  TopSection,
  BottomSection,
  Wrapper,
  Title,
  TimerText,
  SubText,
} from "./Overview.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import SummaryCard from "../../components/summaryCards/summaryCards.component";
import { CustomerIcon } from "../../assets/svg";
import { Spacer } from "../../components/spacer/spacer.component";
import { IUOFixedCard } from "../../components/iouFixedCard/iouFixedCard.component";
import { colors } from "../../infrastructure/theme/colors";
import { ActivityHistorySection } from "../../components/activityHistory/activityHistory.component";

const Overview = () => {
  return (
    <GeneralLayout>
      <SubHeader />
      <Spacer />
      <TopSection paddingVertical="1.8rem">
        <Wrapper paddingVertical="0">
          <Title>Your Today's Summary</Title>
        </Wrapper>

        <Wrapper>
          <SummaryCard
            path={"/customerReached"}
            qoute={"Customer Reached"}
            icon={<CustomerIcon />}
            title={"10/100"}
            color={colors.primary}
          />
          <SummaryCard
            path={"/amountDeposited"}
            qoute={"Amount Deposited"}
            icon={<CustomerIcon />}
            title={"10/100"}
            color={colors.green}
          />
          <SummaryCard
            path={"/amountWithdrawn"}
            qoute={"Amount Withdrawn"}
            icon={<CustomerIcon />}
            title={"10/100"}
            color={colors.red}
          />
        </Wrapper>
        <Wrapper flexDirection="column" paddingVertical="0">
          <TimerText>24:00:00</TimerText>
          <SubText>Time to Refresh</SubText>
        </Wrapper>
      </TopSection>
      <Spacer size="small" />
      <BottomSection paddingVertical="0">
        <IUOFixedCard
          IOU
          color={colors.purple}
          totalAmount={"10,000"}
          totalCustomers={"80"}
        />
        <IUOFixedCard
          Fixed
          color={colors.teal}
          totalAmount={"15,000"}
          totalCustomers={"80"}
        />
        <ActivityHistorySection />
      </BottomSection>
    </GeneralLayout>
  );
};

export default Overview;
