import React, {
  useState,
  // useEffect
} from "react";
import logo from "../../assets/images/logo.png";
import {
  HeaderContainer,
  InnerWrapper,
  LogoWrapper,
  Logo,
  UserProfileWrapper,
  UserName,
} from "./header.styles";

// import { GiHamburgerMenu as NavIcon } from "react-icons/gi";
import { FaUserCog as UserProfileIcon } from "react-icons/fa";
import {
  MdDashboardCustomize as MenuIcon,
  // MdClose as CloseIcon,
} from "react-icons/md";

// import { Link } from "react-router-dom";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { colors } from "../../infrastructure/theme/colors";

const Header = ({ smallDrawer, handleNoDrawer }) => {
  // const [displayNav, setDisplayNav] = useState(false);
  const [showMenu, setShowMenu] = useState(undefined);
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
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
        </LogoWrapper>

        <UserProfileWrapper
          onClick={() => {
            console.log("Hello world");
          }}
        >
          <UserProfileIcon size="1.6rem" color={colors.white} />
          <UserName
            fontSize={fontSizes.smallTitle}
            fontWeight={fontWeights.semiBold}
            color={colors.white}
            marginLeft="4px"
          >
            Gage Walker
          </UserName>
        </UserProfileWrapper>

        {/* <div className="mobileOverlay" onClick={() => setShowMenu(!showMenu)} /> */}
      </InnerWrapper>
    </HeaderContainer>
  );
};

export default Header;
