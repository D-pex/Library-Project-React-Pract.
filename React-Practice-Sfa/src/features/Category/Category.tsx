import { useEffect, useState } from "react"; 
import { ApiService } from 'Services/Index';
import { Loader } from 'Shared/Component/Loader/Index';

interface CategoryList {
     categoryName : string;
}
export default function Category (){
     const [loading, setLoading] = useState(true);
    const [Category, setCategory] = useState<CategoryList[]>([]);


     useEffect(() => {
                ApiService.get<CategoryList[]>('Category')
                    .then(setCategory)
                    .finally(() =>setLoading(false));
            }, []);
        
            if (loading) {
                return <Loader />
            }

    if (Category.length === 0){
    return<div>"fetching the categories"</div>
    }


    return (
    <div className="flex justify-center mt-10">
        <table className="min-w-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">

            <thead className="bg-green-600 text-white">
                <tr>
                    <th className="px-6 py-3 text-left">categoryName</th>
                </tr>
            </thead>

            <tbody className="bg-white">
                {Category.map((C) => (
                    <tr
                        key={C.categoryName}
                        className="border-b hover:bg-gray-100 transition"
                    >
                        <td className="px-6 py-3">{C.categoryName}</td>
                    </tr>
                ))}
            </tbody>

        </table>
    </div>
);
}