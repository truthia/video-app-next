import styled from "styled-components"
import MenuItem from "./MenuItem"

const MenuContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    color: white;
    font-size: medium;
    background-color: rgb(30,30,30);
   
`

const Menu = () => {
    return (
       <MenuContainer>
           <MenuItem text="JAV CENSORED" />
           <MenuItem text="JAV UNCENSORED" />
           <MenuItem text="JAV SUB" />
           <MenuItem text="PORN" />
           <MenuItem text="CHINA AV" />
           <MenuItem text="KOREA AV" />
           <MenuItem text="OTHER" />
       </MenuContainer>
    )
}

export default Menu
