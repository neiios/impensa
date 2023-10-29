import React from "react";
import { LogoText } from "../../../components/Logo/index.jsx";
import ExpenseModal from "../../../components/ExpenseModal/index.jsx";

import {
  NavbarWrapper,
  NavbarContainer,
  NavMenu,
  UserCreds,
  Icon,
  UserName,
  PpContainer,
  PpCircle,
  NameFirstLetter,
  Span,
  ArrowIcon,
} from "./style.jsx";

export const Nav = ({ name, expenses, setExpenses, categories }) => {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LogoText />
        <NavMenu>
          {expenses.length === 0 ? (
            <>
              <Span>Add new expense</Span>
              <ArrowIcon className="fas fa-arrow-right fa-xl" />{" "}
            </>
          ) : null}
          <ExpenseModal
            categories={categories}
            setExpenses={setExpenses}
            component={"edit"}
          >
            <Icon className="fas fa-plus" />
          </ExpenseModal>
          <UserCreds>
            <UserName>{name}</UserName>
            <PpContainer>
              <PpCircle>
                <NameFirstLetter>{name[0]}</NameFirstLetter>
              </PpCircle>
            </PpContainer>
          </UserCreds>
        </NavMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Nav;
