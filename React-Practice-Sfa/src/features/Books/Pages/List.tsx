import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";

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

  const menu = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/Books" },
    { name: "Member", path: "/Member" },
    { name: "Category", path: "/Category" },
    { name: "Book Issue", path: "/BookIssue" },
  ];

  if (loading) {
    return <Loader />;
  }

  if (Books.length === 0) {
    return <div className="text-white text-center mt-10">No Books Found</div>;
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
      
      
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Library
        </h2>

        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className="
              mb-3 px-4 py-2 text-left rounded-lg
              text-gray-700 font-medium
              hover:bg-blue-600 hover:text-white
              transition duration-300
            "
          >
            {item.name}
          </button>
        ))}
      </div>

      
      <div className="flex-1 p-6">
        
      
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded-md bg-white text-gray-700 shadow hover:bg-gray-100 transition"
        >
          ← Back
        </button>

       
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Books Management
          </h1>
        </div>

       
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">
            
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Book Name</th>
                <th className="px-6 py-3 text-left">Author Name</th>
                <th className="px-6 py-3 text-left">Publisher Name</th>
                <th className="px-6 py-3 text-left">Category Name</th>
              </tr>
            </thead>

            <tbody>
              {Books.map((b, i) => (
                <tr
                  key={b.bookID}
                  className={`
                    border-t
                    ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-blue-50 transition
                  `}
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