import React from "react";
import { SearchBar } from "../SearchBar/searchBar.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  SubHeaderContainer,
  DirectorySection,
  SearchBarSection,
  ButtonSection,
  MainDirectory,
  Wrapper,
  SubDirectory,
} from "./subHeader.styles";
import { Button } from "../button/button.component";
import { BsPlusCircle as AddIcon } from "react-icons/bs";
import { RightArrowIcon } from "../../assets/svg";

export const SubHeader = ({ subDirectory, searchBar, btnText }) => {
  const handleNewCustomer = () => {
    console.log("Hello New customer being created");
  };
  return (
    <SubHeaderContainer paddingVertical="0">
      <DirectorySection paddingVertical="0">
        <MainDirectory to="/overview">Overview</MainDirectory>
        {subDirectory ? (
          <Wrapper>
            <RightArrowIcon
              color={colors.black.strong}
              height={12}
              width={12}
            />
          </Wrapper>
        ) : null}

        {subDirectory ? <SubDirectory to="">{subDirectory}</SubDirectory> : null}
      </DirectorySection>
      {searchBar ? (
        <SearchBarSection paddingVertical="0">
          <SearchBar
            placeholder="Please input your search keywords"
            handleChange={() => {
              handleNewCustomer();
            }}
            color={colors.black.strong}
          />
        </SearchBarSection>
      ) : null}
      <ButtonSection paddingVertical="0">
        {btnText ? (
          <Button
            btnText={btnText}
            background="transparent"
            border={`1px solid ${colors.primary}`}
            btnColor={colors.primary}
            onClick={handleNewCustomer}
            LeftIcon={AddIcon}
          />
        ) : null}
      </ButtonSection>
    </SubHeaderContainer>
  );
};
