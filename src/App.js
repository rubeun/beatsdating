import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <video autoPlay muted loop className='backgroundVideo'>
      {/* <source src="media/beats-dating2.mp4" type="video/mp4" /> */}
        <source src="media/blended-volume-bars_bywfhhwbh__D.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
