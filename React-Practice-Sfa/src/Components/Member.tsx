import { useEffect, useState } from 'react';

interface MemberList {
    memberId: number;
    memberName: string;
    memberType: string;
}

export default function Members() {
    const [Members, setMembers] = useState<MemberList[]>([]);

    useEffect(() => {
        fetch('http://localhost:5271/api/member', {
            method: 'GET',
            headers: {
                Origin: window.location.host,
                'Content-Type': 'application/json; charset=utf-8',
            },
        })
            .then(response => response.json())
            .then(data => setMembers(data));
    }, []);

    if (Members.length === 0) {
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
                    {Members.map((m) => (
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