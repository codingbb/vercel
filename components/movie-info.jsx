import { API_URL } from "../app/(home)/page";

// fetch 할 함수 작성
async function getMovie(id) {
  console.log(`Feching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// videos에 관한 UI만 가질 것 (videos만을 랜더링하는 컴포넌트)
export default async function MovieInfo({id}) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
