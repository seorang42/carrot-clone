import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-sm focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Sumbit
      </button>
    </form>
  );
};

export default Write;
