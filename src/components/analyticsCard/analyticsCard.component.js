import React from "react";
import {
  AnalyticsCardContainer,
  ChartSection,
  ChartTools,
  LeftTopSection,
  ChartName,
  PercentageBtn,
  PercentageBtnText,
  RightTopSection,
  HighPriority,
  Indicator,
  HighPriorityText,
  FilterButton,
  VerticalDivider,
  ButtonText,
  CalendarIcon,
  CardSection,
  Card,
  ResponseTime,
  TimeStamp,
} from "./analyticsCard.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Spacer } from "../spacer/spacer.component";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  // maintainAspectRatio: false,
  elements: {
    backgroundColor: "teal",
    borderWidth: "5px",
    borderColor: "green",
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
    tick: {},
  },
};

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 18, 48, 8, 42, 32, 45, 12],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "#fff",
    },
  ],
};

export const AnalyticsCard = () => {
  return (
    <AnalyticsCardContainer>
      <ChartSection>
        <ChartTools>
          <LeftTopSection>
            <ChartName>Average Response Time</ChartName>
            <PercentageBtn>
              <PercentageBtnText>+4.14%</PercentageBtnText>
            </PercentageBtn>
          </LeftTopSection>
          <RightTopSection>
            <HighPriority>
              <Indicator />
              <HighPriorityText>High Priority</HighPriorityText>
            </HighPriority>

            <VerticalDivider />

            <FilterButton>
              <ButtonText>This Month</ButtonText>
              <CalendarIcon />
            </FilterButton>
          </RightTopSection>
        </ChartTools>
        <Line
          data={data}
          options={options}
          redraw={true}
          height={"70px"}
        />
      </ChartSection>
      <CardSection>
        <Card flexDirection="column">
          <ResponseTime>Average Response Time</ResponseTime>
          <Spacer />
          <TimeStamp>30 Mins</TimeStamp>
        </Card>
        <Spacer size="small" />
        <Card flexDirection="column">
          <ResponseTime>Average Response Time</ResponseTime>
          <Spacer />
          <TimeStamp>30 Mins</TimeStamp>
        </Card>
      </CardSection>
    </AnalyticsCardContainer>
  );
};
