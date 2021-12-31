import  Image from "next/image"
import styled from 'styled-components'
import {useRouter} from "next/router"
import { ITEM_WIDTH } from '../../variables'
import play from "../../assets/overlay_rich.png"


interface IProps{
    title:string
  //  category: string
    thumbnail:string
    // tags:string[]
    // desc:string
    // source:string
    // views:number
}

const VideoContainer= styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    width:${ITEM_WIDTH.lg}vw;
    min-width: ${ITEM_WIDTH.lg}vw;
    height:13vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    user-select:none;
    
`
const PlayButton = styled.div`
    padding-top:17%;
    padding-left: 36%;
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s ease;
    &:hover{
        opacity:1 ;
        background-color: rgba(255,255,255,0.3);
    }
`
const ImageContaner= styled.div`
    object-fit: contain;
    height: 100%;
    img{
     height: 100%;
    }
`
const Title= styled.div`
    font-size: 0.9vw;
    font-weight: bold;
    position: absolute;
    height: 28%;
    z-index: 999;
    top:72%;
    text-align: center;
    color: white;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    padding-top:0.2vw;
    
`

const Video = (props: IProps) => {
    const {title, thumbnail}=props
    const router=useRouter();
    const clickHandler=()=>{
        router.push(`/${encodeURIComponent(title)}`)
    }
    return (
        <VideoContainer onClick={clickHandler}>
            <PlayButton>

            </PlayButton>
            <ImageContaner>
                <img src={thumbnail} />
            </ImageContaner>
            <Title>
                <div>{title}</div>
            </Title>
        </VideoContainer>
    )
}

export default Video
