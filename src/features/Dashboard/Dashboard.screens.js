import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import { AnalyticsSection } from "./Dashboard.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { TabHeader } from "../../components/tabHeader/tabHeader.component";
import { AnalyticsCard } from "../../components/analyticsCard/analyticsCard.component";
import { ChartData } from "./data";

const Dashboard = () => {
  return (
    <GeneralLayout>
      <TabHeader />
      <SubHeader
        directory={"Efficiency Analytics"}
        searchBar
        btnText={"Export"}
      />
      <SubHeader
        directory={"Efficiency Analytics"}
        searchBar
        btnText={"Export"}
      />
      <SubHeader
        directory={"Efficiency Analytics"}
        searchBar
        btnText={"Export"}
      />
      <SubHeader
        directory={"Efficiency Analytics"}
        searchBar
        btnText={"Export"}
      />
      <AnalyticsSection>
        {ChartData.map((item) => (
          <>
            <AnalyticsCard chartData={item} />
            <Spacer size="small" />
          </>
        ))}
      </AnalyticsSection>
      <Spacer />
    </GeneralLayout>
  );
};

export default Dashboard;
