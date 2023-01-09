export default function Hero({ imgUrl }) {
  return (
    <div className="flex w-full h-48 mx-16 mt-8 justify-evenly">
      <div className="flex w-1/3 flex-col">
        <h2 className="text-white text-5xl font-extrabold">
          This website is awesome
        </h2>
        <div className="text-white mb-1">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="w-sm bg-blue-500 text-white p-1 w-28 h-8 rounded text-center">
            <button>Sign Up</button>
        </div>
      </div>
      <div className="bg-gray-200 w-96 mr-20"></div>
    </div>
  );
}
