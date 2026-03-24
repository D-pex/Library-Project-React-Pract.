import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const menu = [
    { name: "Books", path: "/Books" },
    { name: "Member", path: "/Member" },
    { name: "Category", path: "/Category" },
    { name: "Book Issue", path: "/BookIssue" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">

      {/* 🌌 BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81]"></div>

      {/* ✨ SOFT GLOW EFFECT */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-3xl bottom-[-100px] right-[-100px]"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* HEADER */}
        <div className="text-center mt-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Library Management System
          </h1>

          <p className="text-gray-300 mt-2 text-sm">
            Manage books, members, and records easily
          </p>
        </div>

        {/* MENU CARD */}
        <div className="flex-grow flex items-center justify-center px-4">
          <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">

            <h2 className="text-lg font-semibold text-gray-700 mb-6 text-center">
              Dashboard
            </h2>

            {/* GRID BUTTONS */}
            <div className="grid grid-cols-2 gap-4">
              {menu.map((item, i) => (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="
                    py-4 rounded-xl
                    bg-gradient-to-r from-blue-600 to-purple-600
                    text-white font-medium
                    hover:opacity-90 hover:shadow-lg hover:-translate-y-1
                    transition duration-300
                  "
                >
                  {item.name}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="text-white/70 text-sm mb-4 ml-6">
          © {new Date().getFullYear()} Library Management System
        </div>
      </div>
    </div>
  );
}