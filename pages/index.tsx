import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <details className="select-none open:text-white open:bg-indigo-500">
        <summary className="select-none cursor-pointer">
          What is my fav. food.
        </summary>
        <span>김치</span>
      </details>
      <ul className="list-disc marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <input
        type="file"
        className="file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:cursor-pointer file:transition file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
      />
      <p className="first-letter:text-7xl first-letter:hover:text-purple-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        corporis, alias minima maiores ut debitis temporibus fugiat. Rerum
        inventore aspernatur impedit nostrum eaque? Amet velit ducimus suscipit
        rem, optio distinctio.
      </p>
    </div>
  );
};

export default Home;
