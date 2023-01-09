export default function InspirationalQuote({ quote, author, role }) {
  return (
    <div className="h-full bg-gray-200">
      <div className=" italic font-light text-4xl text-center pt-16">
        {quote}
      </div>
      <div className="font-bold text-end mr-8">
        - {author}, {role}
      </div>
    </div>
  );
}
