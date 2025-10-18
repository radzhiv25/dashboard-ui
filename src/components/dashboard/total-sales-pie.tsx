import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

export default function TotalSalesCard() {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className="bg-[#F9FAFB] p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold text-black mb-4">Total Sales</h2>
      <div className="flex flex-col items-center">
        <div className="w-44 h-44 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270} // makes the top flat and smooth
                stroke="none"
                cornerRadius={40} // smooth capsule-like ends
                paddingAngle={4}   // small, clean gaps
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-semibold text-lg">
            {((data[0].value / total) * 100).toFixed(1)}%
          </div>
        </div>

        <ul className="mt-5 w-full space-y-2">
          {data.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center text-sm text-gray-800"
            >
              <div className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span>{item.name}</span>
              </div>
              <span className="text-gray-600">${item.value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
