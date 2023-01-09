export default function CallToAction({ message, callMessage, buttonText }) {
  return (
    <div className="h-full bg-white pt-24">
      <div className="flex justify-evenly bg-blue-500 w-2/3 mx-36 h-24 rounded-xl text-white pt-6">
        <div className="flex flex-col">
          <div>{callMessage}</div>
          <div className="text-sm">{message}</div>
        </div>
        <div>
          <button className="h-10 w-32 border-white border-solid border-2 rounded-xl p-2 h-full w-full">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
