import { Req } from "../components/buyingreq";

const request = [
  {
    date: "Jan 14,2024",
    name: "Piyush",
    country: "India",
    about: "Blue Granite Stone",
    desc: "Hi! I need information about the the Blue Granite Stone. I want approx 2000m². Could you please provide me the price of the stone",
  },
  {
    date: "Jan 14,2024",
    name: "Kim sung",
    country: "Korea",
    about: "Brown Granite Stone",
    desc: "Hi! I need information about the the Brown Granite Stone. I want approx 1200m². Could you please provide me the price of the stone",
  },
  {
    date: "Jan 14,2024",
    name: "Jin Ping",
    country: "China",
    about: "Black Granite Stone",
    desc: "Hi! I need information about the the Black Granite Stone. I want approx 2530m². Could you please provide me the price of the stone",
  },
  {
    date: "Jan 14,2024",
    name: "Uzi Kaisen",
    country: "Japan",
    about: "White Granite Stone",
    desc: "Hi! I need information about the the White Granite Stone. I want approx 1400m². Could you please provide me the price of the stone",
  },
  {
    date: "Jan 14,2024",
    name: "Ramesh",
    country: "India",
    about: "Blue Granite Stone",
    desc: "Hi! I need information about the the Blue Granite Stone. I want approx 2400m². Could you please provide me the price of the stone",
  },
];
export default function Request() {
  return (
    <>
      <div
        className="sm:m-4 text-black bg-cover bg-center flex lg:justify-between flex-wrap justify-center items-center p-8"
        style={{ backgroundImage: `url('/mar_pics/marbel5.jpg')` }}
      >
        <div className="sm:text-3xl flex flex-col gap-4 sm:gap-16">
          <h1>REQUEST FOR QUOTATION </h1>
          <div className="flex gap-4 sm:gap-12">
            <div className="flex gap-2 sm:gap-4 items-center">
              <i className="bi bi-journal-arrow-up text-4xl border-[1.5px] border-black rounded-full p-3"></i>
              <h1>
                30000 + <br /> Requests
              </h1>
            </div>
            <div className="flex gap-4 items-center">
              <i className="bi bi-basket text-4xl border-[1.5px] border-black rounded-full p-3"></i>
              <h1>
                42000 + <br /> Products
              </h1>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-0 sm:p-6">
          <h2 className="text-2xl font-semibold">
            Want to get quotations?
          </h2>
          <input
            type="text"
            placeholder="What are you looking for.."
            className="sm:w-full p-3 mt-4 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-red-500 text-[12px] sm:text-sm mt-1">
            Please input the name of product you need!
          </p>
          <div className="flex gap-4 mt-4">
            <input
              type="number"
              placeholder="Quantity"
              className="flex-1 w-full p-3 text-gray-700 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="p-3 text-gray-700 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Pieces</option>
              <option>Boxes</option>
              <option>Foot</option>
              <option>Meter</option>
            </select>
          </div>
          <p className="text-red-500 text-[13px] sm:text-sm mt-1">
            Please Input your Need Product Number!
          </p>
          <button className="w-full mt-4 p-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition">
            Request For Quotation
          </button>
        </div>
      </div>


      <div className="mx-4 my-7 text-2xl font-bold">
        <h1>Buying Requests</h1>
      </div>

      {request.map((requ, index) => (
        <Req key={index} req={requ} />
      ))}
    </>
  );
}
