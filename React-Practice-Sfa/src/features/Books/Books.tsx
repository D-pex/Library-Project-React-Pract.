import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";
import bg from "../../assets/library-bg.jpg"; // ✅ Background image

interface BookItem {
  bookID: number;
  bookName: string;
  authorName: string;
  publisherName: string;
  categoryName: string;
}

export default function Books() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [Books, setBooks] = useState<BookItem[]>([]);

  useEffect(() => {
    ApiService.get<BookItem[]>("Books")
      .then(setBooks)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (Books.length === 0) {
    return <div className="text-white">Fetching the Book list Wait...</div>;
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 🌫️ Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🧊 Glass Container */}
      <div
        className="relative z-10 w-full max-w-6xl
                   bg-white/10
                   backdrop-blur-xl
                   shadow-2xl
                   rounded-2xl
                   border border-white/20
                   p-8"
      >
        {/* 🔙 Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2
                       bg-white/10
                       backdrop-blur-md
                       border border-white/20
                       text-white
                       px-4 py-2
                       rounded-md
                       hover:bg-white/20
                       transition duration-300"
          >
            <i className="bi bi-arrow-left"></i>
            Back
          </button>
        </div>

        {/* 📚 Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Books Management
        </h1>

        {/* 🧊 Glass Table */}
        <div
          className="bg-white/10
                     backdrop-blur-lg
                     rounded-xl
                     shadow-lg
                     border border-white/20
                     overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-white/20 text-white backdrop-blur-md">
              <tr>
                <th className="px-6 py-3 text-left">Book Name</th>
                <th className="px-6 py-3 text-left">Author Name</th>
                <th className="px-6 py-3 text-left">Publisher Name</th>
                <th className="px-6 py-3 text-left">Category Name</th>
              </tr>
            </thead>

            <tbody>
              {Books.map((b) => (
                <tr
                  key={b.bookID}
                  className="border-b border-white/10
                             text-white
                             transition-all duration-300
                             hover:bg-white/10
                             hover:scale-[1.01]"
                >
                  <td className="px-6 py-3">{b.bookName}</td>
                  <td className="px-6 py-3">{b.authorName}</td>
                  <td className="px-6 py-3">{b.publisherName}</td>
                  <td className="px-6 py-3">{b.categoryName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}