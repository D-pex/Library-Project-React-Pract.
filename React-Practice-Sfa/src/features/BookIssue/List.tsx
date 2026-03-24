import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";

interface BookIssueItem {
  issueId: number;
  issueDate: string;
  returnDate: string;
  renewDate: string;
  bookID: number;
  memberID: number;
}

export default function List() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<BookIssueItem[]>([]);

  useEffect(() => {
    ApiService.get<BookIssueItem[]>("BookIssue")
      .then(setIssues)
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

  if (issues.length === 0) {
    return (
      <div className="text-white text-center mt-10">
        No Records Found
      </div>
    );
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
            Book Issue Management
          </h1>
        </div>

      
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <table className="w-full">

            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-6 py-3 text-left">Issue Date</th>
                <th className="px-6 py-3 text-left">Return Date</th>
                <th className="px-6 py-3 text-left">Renew Date</th>
                <th className="px-6 py-3 text-left">Book ID</th>
                <th className="px-6 py-3 text-left">Member ID</th>
              </tr>
            </thead>

            <tbody>
              {issues.map((item, i) => (
                <tr
                  key={item.issueId}
                  className={`
                    border-t
                    ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    hover:bg-blue-50 transition
                  `}
                >
                  <td className="px-6 py-3">{item.issueDate}</td>
                  <td className="px-6 py-3">{item.returnDate}</td>
                  <td className="px-6 py-3">{item.renewDate}</td>
                  <td className="px-6 py-3">{item.bookID}</td>
                  <td className="px-6 py-3">{item.memberID}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}