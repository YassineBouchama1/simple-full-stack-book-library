import './App.css';
import BookListComponent from './components/book';
import Welcome from './components/Welcome';

function App() {
  return (
     <div className="App"> 
    <Welcome />

    <BookListComponent />
       
    </div>
  );
}

export default App;
