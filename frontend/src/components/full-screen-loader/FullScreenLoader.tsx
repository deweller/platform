import './FullScreenLoader.css';

const FullScreenLoader = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-800">
      <div className="loader flex space-x-3 rounded-full bg-white p-5">
        <div className="h-5 w-5 animate-bounce rounded-full bg-gray-800"></div>
        <div className="h-5 w-5 animate-bounce rounded-full bg-gray-800"></div>
        <div className="h-5 w-5 animate-bounce rounded-full bg-gray-800"></div>
      </div>
    </div>
  );
};

export default FullScreenLoader;
