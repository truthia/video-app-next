import React from 'react'
import styled from 'styled-components'
import Logo from './logo'
import Menu from './menu'
import SearchBar from './searchBar'

const NavbarContainer= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const TopContainer= styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 15px 2%;
    padding-bottom:5px;
    justify-content: space-between;
    align-items: center;
`

const Navbar = () => {
    return (
       <NavbarContainer>
         <TopContainer>
             <Logo />
             <SearchBar />
         </TopContainer>
         <Menu />
       </NavbarContainer>
    )
}

export default Navbar
