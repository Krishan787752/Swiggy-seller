import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  // Sample chart data
  const salesData = [
    { month: "Mon", sales: 50 },
    { month: "Feb", sales: 80 },
    { month: "Mar", sales: 120 },
    { month: "Apr", sales: 90 },
    { month: "May", sales: 160 },
    { month: "Jun", sales: 220 },
    { month: "Jul", sales: 140 },
    { month: "Aug", sales: 200 },
  ];

  // Sample orders
  const orders = [
    { id: "2264-0256", date: "2020-01-23", customer: "John Doe", status: "Pending" },
    { id: "2020-03-17", date: "2020-01-23", customer: "Jane Smith", status: "Accepted" },
    { id: "2023-03-26", date: "2020-01-24", customer: "Alice Johnson", status: "Picked Up" },
    { id: "2264-05-10", date: "2020-01-25", customer: "John Surter", status: "Delivered" },
    { id: "2024-03-14", date: "2020-01-24", customer: "Audi Smith", status: "Offline" },
  ];

  // Sample delivery partners
  const partners = [
    { name: "Michael Brown", status: "Online", availability: "14h" },
    { name: "Sarah Lee", status: "Offline", availability: "08h" },
    { name: "David Wilson", status: "Offline", availability: "26h" },
  ];

  return (
    <div className="space-y-6">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Today's Orders</p>
          <h2 className="text-2xl font-bold">135</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Active Restaurants</p>
          <h2 className="text-2xl font-bold">240</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Pending Deliveries</p>
          <h2 className="text-2xl font-bold">18</h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-gray-500 text-sm">Sales</p>
          <h2 className="text-2xl font-bold">$8,395</h2>
        </div>
      </div>

      {/* Chart + Active Partners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow col-span-2">
          <h3 className="font-semibold mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#f97316" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="font-semibold mb-4">Active Delivery Partners</h3>
          <ul className="space-y-3">
            {partners.map((p) => (
              <li
                key={p.name}
                className="flex justify-between items-center border-b pb-2 last:border-none"
              >
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p
                    className={`text-sm ${
                      p.status === "Online" ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {p.status}
                  </p>
                </div>
                <span className="text-sm text-gray-600">{p.availability}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="font-semibold mb-4">Orders</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-2">Order ID</th>
              <th className="pb-2">Date</th>
              <th className="pb-2">Customer</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b last:border-none">
                <td className="py-2">{o.id}</td>
                <td>{o.date}</td>
                <td>{o.customer}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      o.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : o.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : o.status === "Picked Up"
                        ? "bg-blue-100 text-blue-700"
                        : o.status === "Delivered"
                        ? "bg-green-200 text-green-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
