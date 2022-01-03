import styled from "styled-components"


const SearchBarContainer= styled.div`
    position: relative;
    width: 360px;
    height: 100%;
`
const Input=styled.input`
    display:inline;
    padding-left: 8px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    font-family: inherit;
    &:focus{
        outline: none;
        border-color:  rgb(35,116,225) ;
    }
`
const Button= styled.button`
    display:inline;
    position: absolute;
    width: 32px;
    max-height: 40px;
    height: 32px;
    font-size:18px;
    padding:0 !important;
    border:none;
    border-left: 1px solid black;
    margin-left: -40px;
    margin-top: 4px;
    background-color: white;
    cursor: pointer;
`

const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Input type="text" placeholder="Search for videos" />
            <Button>S</Button>
        </SearchBarContainer>
    )
}

export default SearchBar
