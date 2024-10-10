import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  LineChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  BarChart2,
  Users,
  Inbox,
  LogOut,
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import OrderPlacedModel from "../../components/OrderPlacedModel";

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-700">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-red-500" />
    </div>
  </div>
);

export const Dashboard = () => {
  const [showOrderPlacedModel, setShowOrderPlacedModel] = useState(false);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Analytics");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [devices, setDevices] = useState([]);
  const [users, setUsers] = useState([]);

  const userData = [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 300 },
    { name: "Mar", users: 200 },
    { name: "Apr", users: 278 },
    { name: "May", users: 189 },
    { name: "Jun", users: 239 },
  ];

  const submissionData = [
    { name: "Week 1", submissions: 65 },
    { name: "Week 2", submissions: 59 },
    { name: "Week 3", submissions: 80 },
    { name: "Week 4", submissions: 81 },
  ];

  const onCancel1 = () => {
    setShowOrderPlacedModel(false);
  };

  const mockSubmissions = [
    {
      id: 1,
      deviceType: "Smartphone",
      logo: "📱",
      userName: "John Doe",
      deviceDescription: "iPhone 12, good condition",
      status: "Pending",
      price: "$300",
    },
    {
      id: 2,
      deviceType: "Tablet",
      logo: "📱",
      userName: "Jane Smith",
      deviceDescription: "iPad Pro, like new",
      status: "Pending",
      price: "$500",
    },
    {
      id: 3,
      deviceType: "Laptop",
      logo: "💻",
      userName: "Bob Johnson",
      deviceDescription: "MacBook Air, minor scratches",
      status: "Pending",
      price: "$800",
    },
  ];

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await axios.get("http://localhost:3000/devices/all", {
          withCredentials: true,
        });

        if (res.status === 200) {
          setDevices(res.data.devices); // Store the fetched devices in the state
        } else {
          console.error("Failed to fetch devices");
        }
      } catch (error) {
        console.error("Error fetching devices:", error.message);
      }
    };

    fetchDevices();
  }, []);

  const deleteDevice = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/devices/${id}`);
      if (res.status === 200) {
        // Remove the deleted device from the state
        setDevices(devices.filter((device) => device._id !== id));
      } else {
        console.error("Failed to delete device:", res.data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users/all", {
        withCredentials: true,
      });

      if (res.status === 200) {
        setUsers(res.data.users); // Store the fetched users in the state
      } else {
        console.error("Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  // UseEffect to call fetchUsers on component mount
  useEffect(() => {
    fetchUsers(); // Fetch users when the component mounts
  }, []); // Empty dependency array to run only once on mount

  const mockUsers = [
    { id: 1, name: "Alice Cooper", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Dylan", email: "bob@example.com", role: "User" },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "User",
    },
    { id: 4, name: "David Bowie", email: "david@example.com", role: "Admin" },
    { id: 5, name: "Eva Green", email: "eva@example.com", role: "User" },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleSidebarCollapse = () =>
    setIsSidebarCollapsed(!isSidebarCollapsed);

  const renderContent = () => {
    switch (activeSection) {
      case "Submissions":
        return (
          <div className="bg-white shadow-md rounded-lg mt-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Pending Submissions
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {devices.map((submission) =>
                submission.state === "pending" ? (
                  <div key={submission._id} className="p-6">
                    <div className="flex items-center justify-between flex-wrap">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className="text-4xl mr-4">
                          {mockSubmissions[0].logo}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold">
                            {submission.category}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {mockSubmissions[0].userName}
                          </p>
                          <p className="text-sm text-gray-500">
                            {submission.description}
                          </p>
                          <p className="text-sm font-semibold text-red-600">
                            Rs. {submission.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <button
                          onClick={() => deleteDevice(submission._id)}
                          className="px-4 py-2 bg-white text-red-600 border border-red-600 rounded-md hover:bg-red-50 mr-2"
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => setShowOrderPlacedModel(true)}
                          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                          Proceed
                        </button>
                      </div>
                      <OrderPlacedModel
                        isAdmin={true}
                        show={showOrderPlacedModel}
                        onCancel1={onCancel1}
                      />
                    </div>
                  </div>
                ) : (
                  <h1 className="text-black text-5xl">
                    NO pending sybmissions
                  </h1>
                )
              )}
            </div>
          </div>
        );
      case "Users":
        return (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">User Data</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return (
          <>
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-4">
              <StatCard title="Total Users" value="1,234" icon={Users} />
              <StatCard title="Active Submissions" value="56" icon={Inbox} />
              <StatCard title="Pending Approvals" value="23" icon={BarChart2} />
              <StatCard
                title="Total Revenue"
                value="$12,345"
                icon={BarChart2}
              />
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  User Growth Over Time
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#EF4444"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Submission Trends
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={submissionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="submissions" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  User Data
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockUsers.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {user.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {user.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 transition-all duration-300 ease-in-out bg-white shadow-lg transform lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${isSidebarCollapsed ? "w-20" : "w-64"}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            {!isSidebarCollapsed && (
              <h2 className="text-2xl font-semibold text-red-600">
                Admin Panel
              </h2>
            )}
            <button
              onClick={toggleSidebarCollapse}
              className="text-gray-500 hover:text-gray-600"
            >
              {isSidebarCollapsed ? (
                <ChevronRight className="h-6 w-6" />
              ) : (
                <ChevronLeft className="h-6 w-6" />
              )}
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {[
              { name: "Analytics", icon: BarChart2 },
              { name: "Users", icon: Users },
              { name: "Submissions", icon: Inbox },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center w-full px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 ${
                  activeSection === item.name ? "bg-red-50 text-red-600" : ""
                }`}
              >
                <item.icon className="h-5 w-5" />
                {!isSidebarCollapsed && (
                  <span className="ml-2">{item.name}</span>
                )}
              </button>
            ))}
          </nav>
          <button
            onClick={() => navigate("/")}
            className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut className="h-5 w-5" />
            {!isSidebarCollapsed && <span className="ml-2">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-3xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-gray-500 hover:text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};
