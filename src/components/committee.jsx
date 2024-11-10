import React from "react";

const CommitteeTable = () => {
  const committeeData = [
    {
      id: 1,
      committee: "Organizing Committee/Working Committee",
      convener: "Sayed Shoaib Akhtar",
      contact: "9873232048",
    },
    {
      id: 2,
      committee: "Coordination Committee",
      convener: "Vineet Kumar Goswami",
      contact: "9818077684",
    },
    {
      id: 3,
      committee: "Finance Committee",
      convener: "Ratnesh Tiwari",
      contact: "9971675555",
    },
    {
      id: 4,
      committee: "Food Committee",
      convener: "Harish Kumar",
      contact: "9873147919",
    },
    {
      id: 5,
      committee: "IT Committee",
      convener: "Prashant Bamania",
      contact: "9212336446",
    },
    {
      id: 6,
      committee: "Social Media Committee",
      convener: "Aadesh Kumar",
      contact: "9045500045",
    },
    {
      id: 7,
      committee: "Media, Publicity & Advertisement Committee",
      convener: "Vartika Tomar",
      contact: "9811946671",
    },
    {
      id: 8,
      committee: "Invitation Committee",
      convener: "Sayed Shoaib Akhtar",
      contact: "9873232048",
    },
    {
      id: 9,
      committee: "Cultural Committee",
      convener: "Puneet Dev Tyagi",
      contact: "9899758700",
    },
    {
      id: 10,
      committee: "Travel & Transport Committee",
      convener: "Brijesh Singh",
      contact: "9927018434",
    },
    {
      id: 11,
      committee: "Accommodation Committee",
      convener: "Naresh Sharma",
      contact: "8077365185",
    },
    {
      id: 12,
      committee: "Venue Management Committee",
      convener: "Lt. Col. Rohtash Kumar",
      contact: "8486526844",
    },
    {
      id: 13,
      committee: "Discipline Committee",
      convener: "Sanju Prasad",
      contact: "9891529303",
    },
    {
      id: 14,
      committee: "Traffic Committee",
      convener: "Pushpendra",
      contact: "8273289956",
    },
    {
      id: 15,
      committee: "Stage Management Committee",
      convener: "Rajneesh Tomar",
      contact: "9818539155",
    },
    {
      id: 16,
      committee: "Welcome & Registration Committee",
      convener: "Pukhraj Bhati",
      contact: "9412224878",
    },
    {
      id: 17,
      committee: "Logistics & Procurement Committee",
      convener: "Gaurav Nain",
      contact: "8826770743",
    },
    {
      id: 18,
      committee: "Award Committee",
      convener: "Puneet Dev Tyagi",
      contact: "9899758700",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-10 flex items-center justify-center">
      <div className="container mx-auto max-w-5xl">
        <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold leading-tight tracking-tight text-green-800">
          Committee List
        </h1>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-green-600 text-white text-sm leading-normal uppercase tracking-wider">
                <th className="py-4 px-6 text-left font-semibold">S.No</th>
                <th className="py-4 px-6 text-left font-semibold">
                  Committee Name
                </th>
                <th className="py-4 px-6 text-left font-semibold">Convener</th>
                <th className="py-4 px-6 text-left font-semibold">
                  Contact Number
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm font-medium">
              {committeeData.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 transition-colors duration-300 hover:bg-green-50"
                >
                  <td className="py-4 px-6 text-left">{index + 1}</td>
                  <td className="py-4 px-6 text-left">{item.committee}</td>
                  <td className="py-4 px-6 text-left">{item.convener}</td>
                  <td className="py-4 px-6 text-left">{item.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommitteeTable;
