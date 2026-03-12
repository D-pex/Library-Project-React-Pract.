import { useEffect, useState } from 'react';


interface BookItem {
    bookID: number;
    bookName: string;
    authorName: string;
    publisherName: string;
    categoryID: number;
}

export default function Books() {
    const [Books, setBooks] = useState<BookItem[]>([]);

    useEffect(() => {
        fetch('http://localhost:5271/api/Books', {
            method: 'GET',
            headers: {
                Origin: window.location.host,
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
            .then(response => response.json())
            .then(data => setBooks(data));
    }, []);
    if (Books.length === 0) {
        return <div> "Fetching the Book list Wait...</div>;
    }

    // return (
    //     <div>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Book Name</th>
    //                     <th>Author Name</th>
    //                     <th>Publisher Name</th>
    //                     <th>Category ID</th>
    //                 </tr>
    //             </thead>

    //             <tbody>
    //                 {Books.map((b) => (
    //                     <tr key={b.bookID}>
    //                         <td>{b.bookName}</td>
    //                         <td>{b.authorName}</td>
    //                         <td>{b.publisherName}</td>
    //                         <td>{b.categoryID}</td>
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // );


    return (
        <div className="flex justify-center mt-10">
            <table className="min-w-[700px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">

                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Book Name</th>
                        <th className="px-6 py-3 text-left">Author Name</th>
                        <th className="px-6 py-3 text-left">Publisher Name</th>
                        <th className="px-6 py-3 text-left">Category ID</th>
                    </tr>
                </thead>

                <tbody className="bg-white">
                    {Books.map((b) => (
                        <tr
                            key={b.bookID}
                            className="border-b hover:bg-gray-100 transition"
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
    )

}