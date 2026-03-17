import { Link } from "react-router-dom";

export default function Home() {
  const cards = [
    {
      title: "Books",
      desc: "Manage book records",
      icon: "bi-book",
      link: "/Books",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Member",
      desc: "Manage library members",
      icon: "bi-people",
      link: "/Member",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Category",
      desc: "Manage book categories",
      icon: "bi-tags",
      link: "/Category",
      color: "from-purple-500 to-indigo-500",
    },

    /* {
      title: "Issue / Return",
      desc: "Issue or return books",
      icon: "bi-arrow-left-right",
      link: "/IssueList",
      color: "from-orange-500 to-red-500",
    },*/
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-linear-to-r from-cyan-500 to-indigo-700 text-black py-16 text-center shadow-lg">
        <h1 className="text-5xl font-bold mb-3">Library Management System</h1>
        <p className="text-lg opacity-90">
          Manage books, members, and categories
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <div
              className={`h-2 rounded-t-xl bg-linear-to-r ${card.color}`}
            ></div>

            <div className="p-6 text-center">
              <div className="text-5xl text-blue-600 mb-4">
                <i className={`bi ${card.icon}`}></i>
              </div>

              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>

              <p className="text-gray-500 text-sm mb-5">{card.desc}</p>

              <Link
                to={card.link}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Open
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
