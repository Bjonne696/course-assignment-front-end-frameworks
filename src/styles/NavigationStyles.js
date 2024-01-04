import styled from "styled-components";

export const Navigation = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const NavList = styled.ul`
list-style: none;
display: flex;
align-items: center; 
`;

export const NavItem = styled.li`
margin: 0 10px;
`;

export const NavLink = styled.a`
color: white;
text-decoration: none;

&:hover {
  text-decoration: underline;
}
`;