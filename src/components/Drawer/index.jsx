import React from /* { useContext }*/ "react";
import { DrawerWrap } from "./drawer.styles";
import { drawerItems } from "./drawerItems";
import { RightArrowIcon } from "../../assets/svg";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { generateID } from "../../infrastructure/lib/generateID";
import { useNavigate, useLocation } from "react-router-dom";
import { UserLogoCard } from "../userLogoCard/userLogoCard.component";

export const Drawer = ({
  handleSmallDrawer,
  smallDrawer,
  noDrawer,
  background,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (href) => location.pathname === href;

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
          <UserLogoCard />
        </FlexibleDiv>
        {/* <DrawerProfileCard smallDrawer={smallDrawer} /> */}
        <div className="container">
          <ul>
            {drawerItems.map(({ path, logo, name }) => {
              return (
                <li
                  onClick={() => navigate(path)}
                  key={generateID(20)}
                  className={`${isActive(path) ? "isActive" : ""}`}
                >
                  <div className="drawerItem">
                    <div className="iconTextWrapper">
                      <div className="logoMain">{logo}</div>
                      <span>{name}</span>
                    </div>
                    <div className="iconWrapper">
                      <RightArrowIcon />
                    </div>
                  </div>
                  {/* <ul className="dropDown">
                      <div className="dropDownNav">
            
                        <span>{name}</span>
                      </div>
                    </ul> */}
                </li>
              );
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

        <UserLogoCard />

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
                      <div className="iconWrapper">
                        <div className="logoMain">{logo}</div>
                        <span>{name}</span>
                      </div>
                      <div className="iconWrapper">
                        <RightArrowIcon />
                      </div>
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