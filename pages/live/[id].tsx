import { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="py-10 px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <div className="mt-5">
          <h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
          <span className="text-2xl block mt-3 text-gray-900">$140</span>
          <p className="my-6 text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
            dolorum fugit dolorem, voluptas perspiciatis minima aspernatur
            quidem non quasi debitis unde cumque! Aliquid, illum quam fugit
            dolorum atque inventore adipisci.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Live Chat</h2>
          <div className="py-10 pb-16 h-[50vh] overflow-y-scroll px-4 space-y-4">
            <Message message="Hi how much are you selling them for?" />
            <Message message="I want ₩20,000" />
            <Message message="미쳤어" />
          </div>
          <div className="fixed py-2 bg-white  bottom-0 inset-x-0">
            <div className="flex relative max-w-md items-center  w-full mx-auto">
              <input
                type="text"
                className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none pr-12 focus:border-orange-500"
              />
              <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                <button className="flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StreamDetail;
