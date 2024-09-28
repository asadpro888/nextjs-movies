import { movies } from "./database/movies";
import  ComboBox from './Autocomplete'
import './globals.css'
export default function Home() {
  return (
    <div className="bg-black flex flex-wrap justify-between text-white App">
      <article>
       <ComboBox/> 
        <div>
          {movies.map((m) => (
          <div>
            
            <h2 key={m.imdb_id}>{m.Title}</h2>
              <p>{m.fulltitle}</p>
              <span>{m.Categories}</span>
              <p>{m.summary}</p>
              <h3>{m.imdb_rating}</h3>
              <li>{m.runtime}</li>
              <a href="https://youtube.com">{m.ytid}</a>
                      
            </div>
          
            
          ))}
        </div>
        
      </article>
    </div>
  );
}
