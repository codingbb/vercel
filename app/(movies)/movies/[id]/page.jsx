import { Suspense } from "react";
import MovieInfo from '../../../../components/movie-info'; // 올바른 경로로 수정
import MovieVideos from '../../../../components/movie-videos'; // 올바른 경로로 수정

export default async function MovieDetail({ params }) {
  const { id } = params;

  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);


  // 무슨 영화를 찾고 있는지 알기 위해서 둘 다 id 필요
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
