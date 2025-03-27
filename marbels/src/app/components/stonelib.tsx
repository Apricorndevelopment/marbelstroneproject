
export function StoneLib() {
  const marbels = [
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456) ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
    { name: "Marble (3456)  ", icon: "/mar_pics/marbel4.jpg" },
  ];
  return (
    <aside className="p-5">
      <h3 className="font-bold mb-4 text-3xl">Stone Library</h3>
      <div className="flex flex-wrap sm:ps-5 items-center justify-center sm:justify-start gap-8 sm:gap-12 mt-10">
        {marbels.map((marbel, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col gap-6 hover:bg-[#FFD166] p-3"
          >
            <img
              className="border-0 rounded-[50%] w-20 h-20"
              src={marbel.icon}
              alt={marbel.name}
            />
            <span>{marbel.name}</span>
          </div>
        ))}
      </div>
      <p className="mt-8 text-gray-600">From over 200+ countries with more than 20,000+ </p>
    </aside>
  );
}
