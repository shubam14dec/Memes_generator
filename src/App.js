import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='flex flex-col items-center background w-full min-h-screen'>
        <h1 className='bg-white rounded-xl w-11/12 mt-4 text-center text-4xl font-bold py-2'>RANDOM GIFS</h1>
        <div className='flex flex-col w-full items-center mt-6 gap-8 mb-8'>
          <Random/>
          <Tag/>
        </div>
    </div>
  );
}

export default App;
