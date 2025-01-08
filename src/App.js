
import './App.css';

function App() {
  const title='Welcome to the new blog';
  const like=50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {like } times</p>
        <p>{34}</p>
      </div>
    </div>
  );
}

export default App;
