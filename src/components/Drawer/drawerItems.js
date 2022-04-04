import React from "react";
import {
  OverviewIcon2,
  CustomerIcon,
  IOUIcon,
FixedIcon
} from "../../assets/svg";

export const drawerItems = [
  {
    name: "Overview",
    logo: <OverviewIcon2 width="16px" height="16px" color="black" />,
    path: "/overview",
  },
  {
    name: "My Customers",
    logo: <CustomerIcon width="20px" height="20px" color="black" />,
    path: "/customers",
  },
  {
    name: "IOU",
    logo: <IOUIcon width="20px" height="20px" color="black" />,
    path: "/iou",
  },
  {
    name: "Fixed",
    logo: <FixedIcon width="20px" height="20px" color="black" />,
    path: "/fixed",
  },
  // {
  //   name: "Class & Subjects",
  //   logo: <ElearningIcon width="20px" height="20px" color="black" />,
  //   path: "/dashboard/class-and-subject",
  // },
  // {
  //   name: "Parents & Learners",
  //   logo: <ParentLearnerIcon width="20px" height="20px" color="black" />,
  //   path: "/dashboard/parents-and-learners",
  // },
  // {
  //   name: "Settings",
  //   logo: <SettingsIcon width="20px" height="20px" color="black" />,
  //   path: "/dashboard/settings",
  // },
  // {
  //   name: "Log Out",
  //   logo: <LogoutIcon width="20px" height="20px" color="black" />,
  //   path: "/",
  // },
];
