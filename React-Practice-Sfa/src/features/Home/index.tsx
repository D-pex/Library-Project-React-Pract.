import { Link } from "react-router-dom";

export default function Home() {
  const cards = [
    {
      title: "Books",
      desc: "Manage book records",
      icon: "bi-book",
      link: "/books",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Member",
      desc: "Manage library members",
      icon: "bi-people",
      link: "/member",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Category",
      desc: "Manage book categories",
      icon: "bi-tags",
      link: "/category",
      color: "from-purple-500 to-indigo-500",
    },
  ];
  return (
    <div className="min-h-screen w-full bg-gray-200">
      {/* 🌈 Full Width Gradient Section */}
      <div
        className="w-full min-h-screen
                    bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400
                    flex justify-center items-center"
      >
        {/* Content Container (Still Responsive) */}
        <div className="w-full max-w-7xl px-6">
          {/* Glass Card */}
          <div
            className="backdrop-blur-lg
                        bg-white/20
                        shadow-2xl
                        rounded-2xl
                        border border-white/40
                        overflow-hidden"
          >
            {/* Header */}
            <div className="text-center py-12">
              <h1 className="text-3xl md:text-4xl font-bold text-black drop-shadow-md">
                Library Management System
              </h1>
              <p className="text-sm md:text-base text-black mt-2">
                Manage books, members, and categories
              </p>
            </div>

            {/* Cards */}
            <div
              className="grid gap-8 px-6 pb-12
                          grid-cols-1
                          sm:grid-cols-2
                          lg:grid-cols-3"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/80
                           backdrop-blur-md
                           rounded-xl
                           shadow-lg
                           hover:shadow-2xl
                           transform
                           hover:-translate-y-2
                           hover:scale-105
                           transition
                           duration-300"
                >
                  <div
                    className={`h-2 rounded-t-xl bg-gradient-to-r ${card.color}`}
                  ></div>

                  <div className="p-6 text-center">
                    <div className="text-4xl text-blue-600 mb-3">
                      <i className={`bi ${card.icon}`}></i>
                    </div>

                    <h2 className="text-lg font-semibold">{card.title}</h2>

                    <p className="text-gray-600 text-sm mt-1 mb-4">
                      {card.desc}
                    </p>

                    <Link
                      to={card.link}
                      className="inline-block bg-blue-600 text-white px-5 py-2
                               rounded-md text-sm
                               hover:bg-blue-700
                               transition"
                    >
                      Open
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
