import { useNavigate } from "react-router-dom";
import bg from "../../assets/library-bg.jpg";

export default function Home() {
  const navigate = useNavigate();

  const menu = [
    { name: "Books", path: "/books" },
    { name: "Member", path: "/member" },
    { name: "Category", path: "/category" },
  ];

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-screen px-16">
        {/* Hover Area */}
        <div className="group relative w-[740px] h-[740px] cursor-pointer">
          {/* Glass Menu Card */}
          <div
            className="absolute left-[280px] top-1/2 -translate-y-1/2
                          opacity-0 group-hover:opacity-100
                          translate-x-[-30px] group-hover:translate-x-0
                          transition-all duration-500 ease-out"
          >
            <div
              className="
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              p-10
              rounded-2xl
              shadow-2xl
              w-80
            "
            >
              <h2 className="text-xl font-semibold mb-6 text-white">
                Library Menu
              </h2>

              {menu.map((item, i) => (
                <button
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="
                    w-full text-left px-4 py-3 mb-3 rounded-lg
                    bg-white/10
                    border border-white/20
                    text-white
                    hover:bg-blue-600/80
                    hover:scale-105
                    transition-all duration-300
                  "
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="ml-auto text-white text-right max-w-lg fade-in-up relative">
          {/* Glow */}
          <div className="glow-bg"></div>

          <div style={{ position: "relative", zIndex: 10 }}>
            <h1 className="text-6xl font-bold mb-8 leading-tight shine-text float">
              𝑳𝒊𝒃𝒓𝒂𝒓𝒚 𝑴𝒂𝒏𝒂𝒈𝒆𝒎𝒆𝒏𝒕 𝑺𝒚𝒔𝒕𝒆𝒎
            </h1>

            <p
              className="text-gray-200 text-lg"
              style={{ letterSpacing: "1px" }}
            >
              𝑾𝒉𝒆𝒓𝒆 𝒃𝒐𝒐𝒌𝒔 𝒂𝒓𝒆 𝒄𝒂𝒍𝒂𝒍𝒐𝒈𝒆𝒅 𝒂𝒏𝒅 𝒌𝒏𝒐𝒘𝒍𝒆𝒅𝒈𝒆 𝒊𝒔 𝒄𝒂𝒓𝒆𝒇𝒖𝒍𝒍𝒚 𝒎𝒂𝒊𝒏𝒕𝒂𝒊𝒏𝒆𝒅.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div
          className="
          mx-6 mb-4
          bg-white/10
          backdrop-blur-md
          border border-white/20
          rounded-xl
          px-6 py-3
          flex justify-between items-center
          text-sm text-white/80
        "
        >
          <span>© {new Date().getFullYear()} Library Management System™</span>
          <span className="text-white/60">All Rights Reserved</span>
        </div>
      </div>
    </div>
  );
}
