import React, { useState } from "react";
import {
  HeaderContainer,
  InnerWrapper,
  SearchBarSection,
  HeaderInfoSection,
  NotificationContainer,
  NotificationIcon,
  Ribbon,
  RibbonText,
  UserProfileContainer,
  UserProfilePreview,
  UserProfileImage,
} from "./header.styles";
import {
  MdDashboardCustomize as MenuIcon,
  // MdClose as CloseIcon,
} from "react-icons/md";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
// import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";
import { SearchBar } from "../SearchBar/searchBar.component";
import { BottomArrowIcon } from "../../assets/svg";
import ProfileImage from "../../assets/images/passport.jpg";

const Header = ({ smallDrawer, handleNoDrawer }) => {
  // const [displayNav, setDisplayNav] = useState(false);
  const [showMenu] = useState(undefined);
  // const toggleNav = () => {
  //   setDisplayNav(!displayNav);
  // };
  return (
    <HeaderContainer smallDrawer={smallDrawer}>
      <InnerWrapper showMenu={showMenu}>
        <FlexibleDiv className="major">
          <div className="rightArrow iconize" onClick={() => handleNoDrawer()}>
            <div className="ripple" />
            <MenuIcon size="20px" color={colors.white} />
          </div>
        </FlexibleDiv>
        <SearchBarSection>
          <SearchBar
            xl
            placeholder="Ask us any question"
            handleChange={() => {
              // handleNewCustomer();
            }}
            color={colors.black.strong}
          />
        </SearchBarSection>

        <HeaderInfoSection
          onClick={() => {
            console.log("Hello world");
          }}
        >
          <NotificationContainer>
            <NotificationIcon size="1.6rem" color={colors.white} />
            <Ribbon>
              <RibbonText>3</RibbonText>
            </Ribbon>
          </NotificationContainer>

          <UserProfileContainer>
            <UserProfilePreview>
              <UserProfileImage src={ProfileImage} alt="profile-Image" />
            </UserProfilePreview>
            <BottomArrowIcon />
          </UserProfileContainer>
        </HeaderInfoSection>

        {/* <div className="mobileOverlay" onClick={() => setShowMenu(!showMenu)} />*/}
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
