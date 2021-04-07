import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Dropdown() {
  return (
    <DropDownList>
      <li>
        <DropdownLink to="/">Profile</DropdownLink>
      </li>
      <li>
        <DropdownLink to="/">Blog</DropdownLink>
      </li>
    </DropDownList>
  );
}

const DropDownList = styled.ul`
  list-style-type: none;
  margin: 1rem 0rem;
  padding: 0;
  position: absolute;
  top: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary_400};
  width: fit-content;
  > li {
    display: block;
    background-color: ${({ theme }) => theme.primary_400};
    width: max-content;
    padding: 1rem 1rem;
    width: 100%;
  }
  > li:hover {
    background-color: ${({ theme }) => theme.primary_600};
  }
`;

const DropdownLink = styled(NavLink)`
  text-decoration:  none;
  width: max-content;
  color: ${({ theme }) => theme.primary_text};
`;
