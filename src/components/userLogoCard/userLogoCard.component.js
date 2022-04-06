import React from "react";
import {
  UserLogoCardContainer,
  LogoText,
  UserMail,
} from "./userLogoCard.styles";

export const UserLogoCard = () => {
  return (
    <UserLogoCardContainer
      flexDirection="column"
      paddingVertical={"10px"}
      boxedLayout
    >
      <LogoText >Metacare</LogoText>

      <UserMail>blemo@gmail.com</UserMail>
    </UserLogoCardContainer>
  );
};
