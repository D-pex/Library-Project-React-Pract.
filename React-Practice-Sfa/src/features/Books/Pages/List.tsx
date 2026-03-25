import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";
import { Grid } from "Shared/Component/Grid";
import Button from "Shared/Component/Buttons/button";

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
  const [books, setBooks] = useState<BookItem[]>([]);

  useEffect(() => {
    ApiService.get<BookItem[]>("Books")
      .then((data) => setBooks(data ?? []))
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
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">

     
      <div className="w-64 bg-gray-200 p-6">
        <h2 className="text-xl font-bold mb-6">Library</h2>

        {menu.map((item, i) => (
          <button
            key={i}
            onClick={() => navigate(item.path)}
            className="block w-full text-left mb-4 text-gray-700 hover:text-blue-600"
          >
            {item.name}
          </button>
        ))}
      </div>

     
      <div className="flex-1 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900 p-6">
       
       
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

        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-4">

          {/* Top Bar */}
          <div className="flex justify-end mb-4">
            <Button
              caption="+ Add Book"
              type="button"
              onClick={() => navigate("/Books/create")}
            />
          </div>

         
          {books.length === 0 ? (
            <div className="text-center py-6 text-gray-600">
              No Books Found
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
              <Grid<BookItem>
                data={books}
                rowKey={(b) => b.bookID}
                columns={[
                  { field: "bookName", header: "Book Name" },
                  { field: "authorName", header: "Author Name" },
                  { field: "publisherName", header: "Publisher Name" },
                  { field: "categoryName", header: "Category Name" },
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