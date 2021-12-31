import type { NextPage } from 'next'
import {MongoClient} from "mongodb"
import styled from "styled-components"
import Slider from '../components/slider'
import { SCREEN } from '../variables'

//css
const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`
interface IProps {
  videos:{title:string, thumbnail:string}[]
}
const Home: NextPage<IProps> = ({videos}) => {
  return (
   <HomeContainer>
     <Slider videos={videos} />
     <Slider videos={videos} />
     <Slider videos={videos} />
     <Slider videos={videos} />
     <Slider videos={videos} />
   </HomeContainer>
  )
}

export const getStaticProps= async ()=>{
  const client = await MongoClient.connect("mongodb+srv://truthia:lonelyking@cluster0.2jnfb.mongodb.net/videoapp?retryWrites=true&w=majority")
  const db=client.db();
  const videosCollection= db.collection("myData")
  const videos=await videosCollection.find().toArray()
  client.close()
  return{
      props:{
          videos: videos.reverse().map(video=>({
              title:video.title,
              thumbnail:video.thumbnail
          }))
      }
  }
}

export default Home
