import type { NextPage } from 'next'
import {MongoClient} from "mongodb"
import styled from "styled-components"
import Slider from '../components/slider'
import { SCREEN } from '../variables'
import { Fragment } from 'react'
import Head from 'next/head'

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
    <Fragment>
      <Head>
        <title>JAV Area</title>
        <meta name="description" content="Phim sex gái xinh cực hot được tuyển chọn kĩ lưỡng cùng với nội dung hấp dẫn, chất lượng. Phim sex đủ mọi thể loại với tốc độ nhanh và siêu nét" />
      </Head>
      <HomeContainer>
        <Slider videos={videos} />
        <Slider videos={videos} />
        <Slider videos={videos} />
        <Slider videos={videos} />
        <Slider videos={videos} />
      </HomeContainer>
    </Fragment>
   
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
