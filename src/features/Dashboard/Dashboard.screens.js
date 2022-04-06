import React from "react";
import GeneralLayout from "../../components/Layout/GeneralLayout";
import {} from "./Dashboard.styles";
import { SubHeader } from "../../components/subHeader/subHeader.component";
import { Spacer } from "../../components/spacer/spacer.component";
// import { colors } from "../../infrastructure/theme/colors";
// import { UserLogoCard } from "../../components/userLogoCard/userLogoCard.component";
// import CustomTable from "../../components/Table";

const Dashboard = () => {
  return (
    <GeneralLayout>
      <SubHeader subDirectory={"Amount Deposited"} searchBar />
      <Spacer />
    </GeneralLayout>
  );
};

export default Dashboard;
