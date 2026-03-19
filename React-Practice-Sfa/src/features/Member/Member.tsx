import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiService } from "Services/Index";
import { Loader } from "Shared/Component/Loader/Index";
import bg from "../../assets/library-bg.jpg"; // ✅ same background

interface MemberList {
  memberId: number;
  memberName: string;
  memberType: string;
}

export default function Member() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [member, setMembers] = useState<MemberList[]>([]);

  useEffect(() => {
    ApiService.get<MemberList[]>("Member")
      .then(setMembers)
      .finally(() => setLoading(false));
  }, []);

   if (loading) {
    return <Loader />;
  }

  if (member.length === 0) {
    return <div className="text-white">Wait Fetching the member List...</div>;
  }

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative flex justify-center items-center p-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🧊 Glass Container */}
      <div
        className="relative z-10 w-full max-w-5xl
                   bg-white/10
                   backdrop-blur-xl
                   rounded-2xl
                   shadow-2xl
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
            ← Back
          </button>
        </div>

        {/* 👤 Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Member Management
        </h1>

        {/* 🧊 Glass Table */}
        <div
          className="bg-white/10
                     backdrop-blur-lg
                     rounded-xl
                     border border-white/20
                     shadow-lg
                     overflow-hidden"
        >
          <table className="w-full">
            <thead className="bg-white/20 text-white backdrop-blur-md">
              <tr>
                <th className="px-6 py-3 text-left">Member Name</th>
                <th className="px-6 py-3 text-left">Member Type</th>
                <th className="px-6 py-3 text-left">Member ID</th>
              </tr>
            </thead>

            <tbody>
              {member.map((m) => (
                <tr
                  key={m.memberId}
                  className="border-b border-white/10
                             text-white
                             transition-all duration-300
                             hover:bg-white/10
                             hover:scale-[1.01]"
                >
                  <td className="px-6 py-3">{m.memberName}</td>
                  <td className="px-6 py-3">{m.memberType}</td>
                  <td className="px-6 py-3">{m.memberId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
