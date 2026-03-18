import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";

interface BookItem {
  bookID: number;
  bookName: string;
  authorName: string;
  publisherName: string;
  categoryID: number;
}

export default function Books() {
  const navigate = useNavigate(); // ✅ Added

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
    return <div>Fetching the Book list Wait...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6">
      {/* 🌈 Gradient Glass Container */}
      <div
        className="w-full max-w-6xl
                    bg-gradient-to-br from-cyan-400 via-blue-400 to-pink-400
                    backdrop-blur-lg
                    shadow-2xl
                    rounded-2xl
                    border border-white/40
                    p-8"
      >
        {/* 🔙 Back Button */}
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2
                       bg-blue-600 text-white
                       px-4 py-2
                       rounded-md
                       shadow-md
                       hover:bg-blue-700
                       hover:shadow-[0_0_15px_rgba(0,150,255,0.7)]
                       transition duration-300"
          >
            <i className="bi bi-arrow-left"></i>
            Back
          </button>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-black drop-shadow-md mb-8">
          Books Management
        </h1>

        {/* Glass Table Card */}
        <div
          className="bg-white/80 backdrop-blur-md
                     rounded-xl
                     shadow-lg
                     border border-green-400
                     hover:shadow-[0_0_25px_rgba(0,150,255,0.6)]
                     transition duration-300
                     overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Book Name</th>
                <th className="px-6 py-3 text-left">Author Name</th>
                <th className="px-6 py-3 text-left">Publisher Name</th>
                <th className="px-6 py-3 text-left">Category ID</th>
              </tr>
            </thead>

            <tbody>
              {Books.map((b) => (
                <tr
                  key={b.bookID}
                  className="border-b transition-all duration-300
                             hover:bg-red-100
                             hover:shadow-[0_0_15px_rgba(0,150,255,0.5)]
                             hover:-translate-y-[3px]"
                >
                  <td className="px-6 py-3">{b.bookName}</td>
                  <td className="px-6 py-3">{b.authorName}</td>
                  <td className="px-6 py-3">{b.publisherName}</td>
                  <td className="px-6 py-3">{b.categoryID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
