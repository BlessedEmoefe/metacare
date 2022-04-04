import React from /* { useContext }*/ "react";
import { DrawerWrap } from "./drawer.styles";
import { drawerItems } from "./drawerItems";
import { ListIcon, RightArrowIcon } from "../../assets/svg";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import Logo from "../../assets/images/logo.png";
import { generateID } from "../../infrastructure/lib/generateID";
// import { MODE } from "../../infrastructure/lib/constants";
// import { useMutation } from "@apollo/client";
// import { LOGOUT } from "../../infrastructure/lib/queries/index.gql";
import DrawerProfileCard from "./DrawerProfileCard";
// import { USER_LOGOUT } from "../../infrastructure/store/types/user";
// import AppContext from "../../infrastructure/store/context";
import { useNavigate, useLocation } from "react-router-dom";

export const Drawer = ({
  handleSmallDrawer,
  smallDrawer,
  noDrawer,
  background,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [onLogout] = useMutation(LOGOUT);
  // const { dispatch } = useContext(AppContext);
  const isActive = (href) => location.pathname === href;

  const handleLogout = () => {
    console.log(location.pathname);
  };

  return (
    <DrawerWrap
      smallDrawer={smallDrawer}
      noDrawer={noDrawer}
      background={background}
    >
      <div className="desktopMainContainer">
        <FlexibleDiv
          className="enlargeDrawer iconize"
          onClick={() => handleSmallDrawer()}
        >
          <div className="ripple" />
          <ListIcon width="20px" height="20px" color="#88898c" />
        </FlexibleDiv>
        <DrawerProfileCard smallDrawer={smallDrawer} />
        <div className="container">
          <ul>
            {drawerItems.map(({ path, logo, name }) => {
              if (name !== "Log Out") {
                return (
                  <li
                    onClick={() => navigate(path)}
                    key={generateID(20)}
                    className={`${isActive(path) ? "isActive" : ""}`}
                  >
                    <div className="drawerItem">
                      <div className="logoMain">{logo}</div>
                      <span>{name}</span>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    onClick={handleLogout}
                    key={generateID(20)}
                    className={`${isActive(path) ? "isActive" : ""}`}
                  >
                    <div className="drawerItem">
                      <div className="logoMain">{logo}</div>
                      <span>{name}</span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </DrawerWrap>
  );
};

export const ModalDrawer = ({
  smallDrawer,
  noDrawer,
  handleNoDrawer,
  background,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [onLogout] = useMutation(LOGOUT);
  // const {dispatch} = useContext(AppContext);
  const isActive = (href) => location.pathname === href;

  const handleLogout = async () => {
    console.log(location.pathname);
  };

  return (
    <DrawerWrap
      smallDrawer={smallDrawer}
      noDrawer={noDrawer}
      background={background}
    >
      <div
        className="modalMainContainerOverlay"
        onClick={() => handleNoDrawer()}
      />

      <div className="modalMainContainer">
        <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
          <div className="ripple" />
          <RightArrowIcon width="20px" height="20px" color="red" />
        </div>

        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" className="mainLogo" />
          </a>
        </div>

        <DrawerProfileCard smallDrawer={smallDrawer} />

        <div className="container">
          <ul>
            {drawerItems.map(({ path, logo, name }) => {
              if (name !== "Log Out") {
                return (
                  <li
                    onClick={() => navigate(path)}
                    key={generateID(20)}
                    className={`${isActive(path) ? "isActive" : ""}`}
                  >
                    <div className="drawerItem">
                      <div className="logoMain">{logo}</div>
                      <span>{name}</span>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li
                    onClick={handleLogout}
                    key={generateID(20)}
                    className={`${isActive(path) ? "isActive" : ""}`}
                  >
                    <div className="drawerItem">
                      <div className="logoMain">{logo}</div>
                      <span>{name}</span>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </DrawerWrap>
  );
};

// import React, { useContext } from "react";
// import { DrawerWrap } from "./drawer.styles";
// import { drawerItems } from "./drawerItems";
// import { ListIcon, RightArrowIcon } from "../../assets/svg";
// import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
// import Logo from "../../assets/images/logo.png";
// import { generateID } from "../../infrastructure/lib/generateID";
// import { MODE } from "../../infrastructure/lib/constants";
// import { useMutation } from "@apollo/client";
// import { LOGOUT } from "../../infrastructure/lib/queries/index.gql";
// import DrawerProfileCard from "./DrawerProfileCard";
// import { USER_LOGOUT } from "../../infrastructure/store/types/user";
// import AppContext from "../../infrastructure/store/context";
// import { useHistory, useLocation } from "react-router-dom";

// export const Drawer = ({ handleSmallDrawer, smallDrawer, noDrawer }) => {
//   const router = useHistory();
//   const location = useLocation();
//   // const [onLogout] = useMutation(LOGOUT);
//   const { dispatch } = useContext(AppContext);
//   const isActive = (href) => location.pathname === href;

//   const handleLogout = () => {
//     console.log(location.pathname);
//   };

//   return (
//     <DrawerWrap smallDrawer={smallDrawer} noDrawer={noDrawer}>
//       <div className="desktopMainContainer">
//         <FlexibleDiv
//           className="enlargeDrawer iconize"
//           onClick={() => handleSmallDrawer()}
//         >
//           <div className="ripple" />
//           <ListIcon width="20px" height="20px" color="#88898c" />
//         </FlexibleDiv>
//         <DrawerProfileCard smallDrawer={smallDrawer} />
//         <div className="container">
//           <ul>
//             {drawerItems.map(({ path, logo, name }) => {
//               if (name !== "Log Out") {
//                 return (
//                   <li
//                     onClick={() => router.push(path)}
//                     key={generateID(20)}
//                     className={`${isActive(path) ? "isActive" : ""}`}
//                   >
//                     <a className="drawerItem">
//                       <div className="logoMain">{logo}</div>
//                       <span>{name}</span>
//                     </a>
//                   </li>
//                 );
//               } else {
//                 return (
//                   <li
//                     onClick={handleLogout}
//                     key={generateID(20)}
//                     className={`${isActive(path) ? "isActive" : ""}`}
//                   >
//                     <a className="drawerItem">
//                       <div className="logoMain">{logo}</div>
//                       <span>{name}</span>
//                     </a>
//                   </li>
//                 );
//               }
//             })}
//           </ul>
//         </div>
//       </div>
//     </DrawerWrap>
//   );
// };

// export const ModalDrawer = ({ smallDrawer, noDrawer, handleNoDrawer }) => {
//   const router = useHistory();
//   const location = useLocation();
//   // const [onLogout] = useMutation(LOGOUT);
//   const { dispatch } = useContext(AppContext);
//   const isActive = (href) => location.pathname === href;

//   const handleLogout = async () => {
//     console.log(location.pathname);
//   };

//   return (
//     <DrawerWrap smallDrawer={true} noDrawer={noDrawer}>
//       <div
//         className="modalMainContainerOverlay"
//         onClick={() => handleNoDrawer()}
//       />

//       <div className="modalMainContainer">
//         <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
//           <div className="ripple" />
//           <RightArrowIcon width="20px" height="20px" color="#b3b3b9" />
//         </div>

//         <div className="logo">
//           <a href="/">
//             <img src={Logo} alt="logo" className="mainLogo" />
//           </a>
//         </div>

//         <DrawerProfileCard smallDrawer={smallDrawer} />

//         <div className="container">
//           <ul>
//             {drawerItems.map(({ path, logo, name }) => {
//               if (name !== "Log Out") {
//                 return (
//                   <li
//                     onClick={() => router.push(path)}
//                     key={generateID(20)}
//                     className={`${isActive(path) ? "isActive" : ""}`}
//                   >
//                     <a className="drawerItem">
//                       <div className="logoMain">{logo}</div>
//                       <span>{name}</span>
//                     </a>
//                   </li>
//                 );
//               } else {
//                 return (
//                   <li
//                     onClick={handleLogout}
//                     key={generateID(20)}
//                     className={`${isActive(path) ? "isActive" : ""}`}
//                   >
//                     <a className="drawerItem">
//                       <div className="logoMain">{logo}</div>
//                       <span>{name}</span>
//                     </a>
//                   </li>
//                 );
//               }
//             })}
//           </ul>
//         </div>
//       </div>
//     </DrawerWrap>
//   );
// };
