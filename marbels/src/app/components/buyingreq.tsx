interface Request {
  req:{
    date: string;
    name: string;
    country: string;
    about: string;
    desc: string;
  }
}

export function Req({ req }: Request) {
  return (
    <>
      <div className="m-4 py-5 px-4 text-black bg-white shadow-lg border border-gray-400 hover:border-black hover:border-[1.5px] ">
        <div className="flex gap-7 items-center">
          <h1>{req.date} </h1>
          <h1 className="font-semibold">{req.name} </h1>
          <h1>{req.country} </h1>
        </div>
        <div className="font-bold mt-1">
            Inquire About {req.about}
        </div>
        <div className="flex flex-wrap justify-between items-end mt-3 pb-5 border-b-[1.3px] border-dotted border-blue-600">
          <h1 className="w-full sm:w-2/3 text-sm md:text-lg">{req.desc} </h1>
          <button className="mt-3 bg-blue-700 text-white py-2 px-5 rounded-sm">Get Now</button>
        </div>
      </div>
    </>
  );
}
