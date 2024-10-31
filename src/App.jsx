import Random from './components/Random';
import Tags from './components/Tags';

export default function App() {
  return (
    <div 
      className="bg-cover bg-center h-screen flex flex-col items-center" 
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <h1 className="text-3xl font-bold bg-white text-black rounded-lg mt-10 w-10/12 text-center px-10 py-2">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center w-full mt-8">
        <Random />
        <Tags />
      </div>
    </div>
  );
}
