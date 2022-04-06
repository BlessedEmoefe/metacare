import React from "react";
import {
  AdminIcon,
  CustomerIcon,
  IOUIcon,
  FixedIcon,
  AgentIcon,
  HelpCenterIcon,
  AnalyticsIcon,
  TrainSAMIcon,
} from "../../assets/svg";

export const drawerItems = [
  {
    name: "Admin",
    logo: <AdminIcon width="16px" height="16px" color="black" />,
    path: "/overview",
  },
  {
    name: "Knowledge Base",
    logo: <TrainSAMIcon width="20px" height="20px" color="black" />,
    path: "/customers",
  },
  {
    name: "Train SAM",
    logo: <TrainSAMIcon width="20px" height="20px" color="black" />,
    path: "/iou",
  },
  {
    name: "Agent Inbox",
    logo: <AgentIcon width="20px" height="20px" color="black" />,
    path: "/fixed",
  },
  {
    name: "Help Center",
    logo: <HelpCenterIcon width="20px" height="20px" color="black" />,
    path: "/fixed",
  },
  {
    name: "Analytics",
    logo: <AnalyticsIcon width="20px" height="20px" color="black" />,
    path: "/fixed",
  },
  // {
  //   name: "Fixed",
  //   logo: <FixedIcon width="20px" height="20px" color="black" />,
  //   path: "/fixed",
  // },
  // {
  //   name: "Fixed",
  //   logo: <FixedIcon width="20px" height="20px" color="black" />,
  //   path: "/fixed",
  // },
  // {
  //   name: "Fixed",
  //   logo: <FixedIcon width="20px" height="20px" color="black" />,
  //   path: "/fixed",
  // },
  // {
  //   name: "Fixed",
  //   logo: <FixedIcon width="20px" height="20px" color="black" />,
  //   path: "/fixed",
  // },
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
