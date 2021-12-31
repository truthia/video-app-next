import styled from "styled-components"
import {createRipples} from "react-ripples"

const MyRipples= createRipples({
    color: "rgba(255,255,255,0.3)",
    during:500,
})

const Item=styled(MyRipples)`
    padding:15px 32px;
    user-select:none;
    cursor: pointer;
    color: white;
    font-size: large;
    &:hover{
        color: rgb(35,116,225);
        background-color: black;
    }
    transition:all 0.5s ease;
`

interface IProps{
    text:string
}

const MenuItem = (props: IProps) => {
    const {text}= props
    return (
       <Item>
           {text}
       </Item>
    )
}

export default MenuItem
