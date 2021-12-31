
import { GetStaticProps, NextPage } from "next"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DATA } from "../../data"
import { MongoClient } from "mongodb"
import { VIDEO } from "../../variables"

const WatchContainer =styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction:column;
    align-items: center;
`
const VideoContainer = styled.div`
    width: 80%;
    iframe{
        width: 100%;
        height: 41vw;
    }
`
interface IProps{
    video:VIDEO
}
const Watch:NextPage<IProps> = ({video}) => {
    return (
     <WatchContainer>
         <VideoContainer>
         {video!== undefined? <iframe src={video.source} frameBorder="0" scrolling="0" allowFullScreen></iframe>:<p>Loading</p> }
         </VideoContainer>
     </WatchContainer>
    )
}
export const getStaticPaths=async ()=>{
    const client = await MongoClient.connect("mongodb+srv://truthia:lonelyking@cluster0.2jnfb.mongodb.net/videoapp?retryWrites=true&w=majority")
    const db=client.db()
    const videosCollection= db.collection("myData")
    const videosTitleWithId= await videosCollection.find({},{projection:{title:true}}).toArray()
    client.close();
    //tao ra tat ca cac dynamic path
    return {
        fallback:false,
        paths:videosTitleWithId.map(title=>({
            params:{ title:title.title }
        }))
    }
}   
export const getStaticProps:GetStaticProps=async(context)=>{
    const videoTitle=context.params?.title
    const client = await MongoClient.connect("mongodb+srv://truthia:lonelyking@cluster0.2jnfb.mongodb.net/videoapp?retryWrites=true&w=majority")
    const db=client.db()
    const videosCollection= db.collection("myData")
    const video=await videosCollection.findOne<VIDEO>({title:videoTitle})
    console.log(video)
    return {
        props:{
           video:{
               title:video!.title,
                category:video!.category,
                thumbnail:video!.thumbnail,
                tags:video!.tags,
                desc:video!.desc,
                source:video!.source,
                views:video!.views
           }
        }, 
    }
} 

export default Watch
