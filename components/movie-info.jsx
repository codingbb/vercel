import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie.info.module.css";

// fetch 할 함수 작성
async function getMovie(id) {
  console.log(`Feching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

// videos에 관한 UI만 가질 것 (videos만을 랜더링하는 컴포넌트)
export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        className={styles.poster}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>🐥{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
