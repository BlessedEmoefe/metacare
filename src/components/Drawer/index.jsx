import React, { useState } from "react";
import {
  DrawerWrap,
  DesktopMainContainer,
  Iconize,
  Ripple,
  Container,
  Ul,
  Li,
  DrawerItem,
  IconTextWrapper,
  LogoMain,
  Name,
  IconWrapper,
  DropDown,
  DropDownNav,
  ModalMainContainerOverlay,
  ModalMainContainer,
  RightArrow,
} from "./drawer.styles";
import { drawerItems } from "./drawerItems";
import { RightArrowIcon } from "../../assets/svg";
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
  const [pageSection, setPageSection] = useState("");
  const handlePageSection = (name) => {
    setPageSection(name);
    console.log(`Name: ${name}, PageSection: ${pageSection}`);
    return pageSection === name ? true : false;
  };
  const isActive = (href) => location.pathname === href;

  return (
    <DrawerWrap
      smallDrawer={smallDrawer}
      noDrawer={noDrawer}
      background={background}
    >
      <DesktopMainContainer smallDrawer={smallDrawer} background={background}>
        <Iconize
          smallDrawer={smallDrawer}
          className="enlargeDrawer"
          onClick={() => handleSmallDrawer()}
        >
          <Ripple />
          <UserLogoCard />
        </Iconize>
        {/* <DrawerProfileCard smallDrawer={smallDrawer} /> */}
        <Container>
          <Ul>
            {drawerItems.map(({ path, logo, name }) => {
              return (
                <Li
                  onClick={() => setPageSection(name)}
                  key={generateID(20)}
                  className={`${pageSection === name} ? "isActive" : ""}`}
                >
                  <DrawerItem smallDrawer={smallDrawer}>
                    <IconTextWrapper>
                      <LogoMain>{logo}</LogoMain>
                      <Name smallDrawer={smallDrawer}>{name}</Name>
                    </IconTextWrapper>
                    <IconWrapper>
                      <RightArrowIcon />
                    </IconWrapper>
                  </DrawerItem>
                  <DropDown
                  // `${
                  //   isActive(path) ? "dropDown" : "closeDropDown"
                  // }`
                  >
                    <DropDownNav
                      smallDrawer={smallDrawer}
                      onClick={() => navigate(path)}
                    >
                      Main
                    </DropDownNav>
                    <DropDownNav>Peace Maker</DropDownNav>
                    <DropDownNav>Instint Buys</DropDownNav>
                  </DropDown>
                </Li>
              );
            })}
          </Ul>
        </Container>
      </DesktopMainContainer>
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
      <ModalMainContainerOverlay
        noDrawer={noDrawer}
        background={background}
        onClick={() => handleNoDrawer()}
      />

      <ModalMainContainer noDrawer={noDrawer}>
        <RightArrow onClick={() => handleNoDrawer()}>
          <Ripple />
          <RightArrowIcon width="20px" height="20px" color="red" />
        </RightArrow>
        <UserLogoCard />
        <Container>
          <Ul>
            {drawerItems.map(({ path, logo, name }) => {
              if (name !== "Log Out") {
                return (
                  <Li
                    onClick={() => navigate(path)}
                    key={generateID(20)}
                    className={`${isActive(path) ? "isActive" : ""}`}
                  >
                    <DrawerItem>
                      <IconTextWrapper>
                        <LogoMain>{logo}</LogoMain>
                        <Name>{name}</Name>
                      </IconTextWrapper>
                      <IconWrapper>
                        <RightArrowIcon />
                      </IconWrapper>
                    </DrawerItem>
                  </Li>
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
          </Ul>
        </Container>
      </ModalMainContainer>
    </DrawerWrap>
  );
};
