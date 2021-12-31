import { useRef, useState,useEffect, FC } from "react"
import styled, { css } from "styled-components"
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import Video from "../video"
import { ITEM_WIDTH, MAX_ITEM } from "../../variables"


const SliderContainer = styled.div`
    position: relative;
    overflow:hidden;
    margin-bottom:64px;
    
`
const CateTitle= styled.div`
    color: white;
    font-size: xx-large;
    padding:16px;
    padding-left: 0;
`
const ListContainer = styled.div`
    overflow: hidden;

`
const List = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap:5px;
margin-top:5px;
transition: all 0.5s ease;
`
const Button = styled.div<{left?:boolean}>`
    position: absolute;
    z-index: 999;
    user-select:none;
    cursor: pointer;
    height:100px;
    width: 100px;
    background-color: rgba(149,182,208,1);
    border-radius: 20px;
    top:47%;
    ${({left})=>left?css`
        left:-50px;
        transform: rotate(-45deg);
    `:css`
        right: -50px;
        transform: rotate(45deg);
    `}
`
const ButtonIcon=styled.div<{left?:boolean}>`
    position: absolute;
    z-index: 9999;
    color:white;
    user-select:none;
    cursor: pointer;
    font-size: 64px;
    top: 50%;
    ${({left})=>!left?css`
        right: 10px;
    `:css`
        left: 10px;
`}
`
interface IProps {
    videos:{title:string, thumbnail:string}[]
}
const Slider:FC<IProps> = ({videos}) => {
    const scrollRef = useRef<HTMLInputElement>(null)
    const scrollRef2 = useRef<HTMLInputElement>(null)
    const [ScrolledItems, setScrolledItems] = useState(0)
    const [itemPerRow, setItemPerRow]=useState(5)
    const [itemWidth, setItemWidth]=useState(ITEM_WIDTH.lg)

const [Data, setData] = useState(videos.slice(0,15))
    //xu ly left right
    const rightClickHandler= ()=>{
        if(MAX_ITEM/2-2*itemPerRow>=ScrolledItems)
        setScrolledItems(ScrolledItems+itemPerRow)
    }
    const leftClickHandler= ()=>{
        if(ScrolledItems>=itemPerRow)
        setScrolledItems(ScrolledItems-itemPerRow)
    }
    //xu ly slide
    useEffect(()=>{
        if(scrollRef.current){
            scrollRef.current.style.transform=`translateX(-${itemWidth*ScrolledItems}vw) translateX(-${5*ScrolledItems}px)`
        }
        if(scrollRef2.current){
            scrollRef2.current.style.transform=`translateX(-${itemWidth*ScrolledItems}vw)translateX(-${5*ScrolledItems}px)`
        }
    },[ScrolledItems])
    return (
       <SliderContainer style={{width:`calc(${itemWidth*itemPerRow}vw + ${5*itemPerRow}px)`}}>
           <CateTitle>
               Cate
           </CateTitle>
           <Button left style={ScrolledItems<=0?{visibility:"hidden"}:{}} onClick={leftClickHandler} />
           <ButtonIcon style={ScrolledItems<=0?{visibility:"hidden"}:{}} left onClick={leftClickHandler}>
            <FontAwesomeIcon icon={faAngleLeft} />
           </ButtonIcon>
           <ListContainer >
               <List  ref={scrollRef} >
                  {Data.map((video,indx)=>{
                      return <Video key={indx} title={video.title}  thumbnail={video.thumbnail} />
                  })}
               </List>
               <List  ref={scrollRef2}>
               {Data.map((video,indx)=>{
                      return <Video key={indx} title={video.title}  thumbnail={video.thumbnail} />
                  })}
               </List>
           </ListContainer>
           <Button onClick={rightClickHandler} />
           <ButtonIcon style={ScrolledItems>MAX_ITEM/2-2*itemPerRow?{fontSize:"18px",top:"55%",textDecoration:"underline",fontWeight:"bold"}:{}} onClick={rightClickHandler}>
           {ScrolledItems>MAX_ITEM/2-2*itemPerRow?"More":<FontAwesomeIcon icon={faAngleRight} />} 
           </ButtonIcon>
       </SliderContainer>
    )
}

export default Slider
