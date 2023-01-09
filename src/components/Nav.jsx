export default function Nav({ links, header }) {
  return (
    <div className="flex justify-center">
      <div className="flex w-2/3 justify-between mb-12">
        <h1 className="text-logo text-2xl">{header}</h1>
        <nav className="w-1/3">
          <ul className="flex justify-evenly text-gray-200 text-lg">
            {links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
