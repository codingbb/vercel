
import { API_URL } from "../app/(home)/page";


async function getVideos(id) {
    console.log(`Feching videos: ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error("someting broke...");
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
  }


  // videos에 관한 UI만 가질 것 (videos만을 랜더링하는 컴포넌트)
  export default async function MovieVideos({id}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
  }

  