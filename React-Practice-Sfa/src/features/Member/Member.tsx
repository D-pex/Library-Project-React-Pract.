import { useEffect, useState } from 'react';
import { ApiService } from 'Services/Index';
import { Loader } from 'Shared/Component/Loader/Index';


interface MemberList {
    memberId: number;
    memberName: string;
    memberType: string;
}

export default function Member() {
    const [loading, setLoading] = useState(true);
    const [member, setMembers] = useState<MemberList[]>([]);

    useEffect(() => {
        ApiService.get<MemberList[]>('Member')
            .then(setMembers)
            .finally(() =>setLoading(false));
    }, []);

    if (loading) { 
    
        return <div className='flex justify-center items-center py-100'><Loader /></div>
    }
    if (member.length === 0) {
        return <div>Wait Fetching the member List...</div>;
    }

    /* return (
         <div>
             <table>
                 <thead>
                     <tr>
                         <th>Member Name</th>
                         <th>Member Type</th>
                         <th>Member ID</th>
                     </tr>
                 </thead>
 
                 <tbody>
                     {Members.map((m) => (
                         <tr key={m.memberId}>
                             <td>{m.memberName}</td>
                             <td>{m.memberType}</td>
                         </tr>
                     ))}
                 </tbody>
             </table>
         </div>
     );*/

    return (
        <div className="flex justify-center mt-10">
            <table className="min-w-[600px] border border-gray-300 shadow-lg rounded-lg overflow-hidden">

                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-3 text-left">Member Name</th>
                        <th className="px-6 py-3 text-left">Member Type</th>
                        <th className="px-6 py-3 text-left">Member ID</th>
                    </tr>
                </thead>

                <tbody className="bg-white">
                    {member.map((m) => (
                        <tr
                            key={m.memberId}
                            className="border-b hover:bg-gray-100 transition"
                        >
                            <td className="px-6 py-3">{m.memberName}</td>
                            <td className="px-6 py-3">{m.memberType}</td>
                            <td className="px-6 py-3">{m.memberId}</td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}