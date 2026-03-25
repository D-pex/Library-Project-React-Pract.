import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";
import { Grid } from "Shared/Component/Grid";
import Button from "Shared/Component/Buttons/button";

interface BookIssueItem {
  issueId: number;
  issueDate: string;
  returnDate: string;
  renewDate: string;
  bookName: string;
  memberName: string;
}

export default function List() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [issues, setIssues] = useState<BookIssueItem[]>([]);

  useEffect(() => {
    ApiService.get<BookIssueItem[]>("BookIssue")
      .then((data) => setIssues(data ?? []))
      .finally(() => setLoading(false));
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/Books" },
    { name: "Member", path: "/Member" },
    { name: "Category", path: "/Category" },
    { name: "Book Issue", path: "/BookIssue" },
  ];

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Library</h2>

        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className="mb-3 px-4 py-2 text-left rounded-lg text-gray-700 hover:bg-blue-600 hover:text-white transition"
          >
            {item.name}
          </button>
        ))}
      </div>

      
      <div className="flex-1 p-6">

        
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 rounded-md bg-white text-gray-700 shadow hover:bg-gray-100"
        >
          ← Back
        </button>

     
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            Book Issue Management
          </h1>
        </div>

      
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-4">

         
          <div className="flex justify-end mb-4">
            <Button
              caption="+ New Issue"
              onClick={() => navigate("/BookIssue/create")}
            />
          </div>

        
          {issues.length === 0 ? (
            <div className="text-center py-6 text-gray-600">
              No Records Found
            </div>
          ) : (
            <div
              className="
              [&_tr]:bg-white 
              [&_tr]:border-b 
              [&_tr]:border-gray-200
              [&_td]:text-gray-700 
              [&_th]:text-gray-800 
              [&_th]:bg-gray-100
              [&_th]:p-3 
              [&_td]:p-3
              "
            >
              <Grid<BookIssueItem>
                data={issues}
                rowKey={(i) => i.issueId}
                columns={[
                  { field: "issueDate", header: "Issue Date" },
                  { field: "returnDate", header: "Return Date" },
                  { field: "renewDate", header: "Renew Date" },
                  { field: "bookName", header: "Book Name" },
                  { field: "memberName", header: "Member Name" },
                ]}
              />
            </div>
          )}

          
          <style>
            {`
              select {
                background-color: white !important;
                color: black !important;
              }
            `}
          </style>

        </div>
      </div>
    </div>
  );
}