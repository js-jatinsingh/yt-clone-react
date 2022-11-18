import './App.css';
import Header from './components/header-component/Header';
import Sidebar from './components/sidebar-component/Sidebar';
import VideoSection from './components/video-component/VideoSection';

function App() {
  return (
    <div className="app"> 
   
    <Header/>
    <div className='app_page'>
        <Sidebar />
        <VideoSection/>
    </div>
    </div>
  );
}

export default App;
