import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import { AnalyticsSection } from "./Dashboard.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
import { TabHeader } from "../../components/tabHeader/tabHeader.component";
import { AnalyticsCard } from "../../components/analyticsCard/analyticsCard.component";
// import { colors } from "../../infrastructure/theme/colors";
// import { UserLogoCard } from "../../components/userLogoCard/userLogoCard.component";
// import CustomTable from "../../components/Table";

const Dashboard = () => {
  return (
    <GeneralLayout>
      <TabHeader />
      <SubHeader
        directory={"Efficiency Analytics"}
        searchBar
        btnText={"Export"}
      />

      <AnalyticsSection>
        <AnalyticsCard />
      </AnalyticsSection>
      <Spacer />
    </GeneralLayout>
  );
};

export default Dashboard;
