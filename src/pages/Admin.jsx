import React, { useState } from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  User,
  Package,
  AlertCircle,
  BarChart3,
  Eye,
  CheckCircle,
  Loader2,
  Info,
  Ban,
  Clock,
  CreditCard,
} from "lucide-react";

// Import Recharts components for graphs
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Hardcoded mock data to replace API calls
const mockUsers = [
  {
    _id: "64e0d7c1e5a5c6f6d6c29b7a",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
    createdAt: "2025-07-01T10:00:00.000Z",
  },
  {
    _id: "64e0d7c1e5a5c6f6d6c29b7b",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    role: "user",
    createdAt: "2025-07-02T11:00:00.000Z",
  },
  {
    _id: "64e0d7c1e5a5c6f6d6c29b7c",
    name: "PakCarry User",
    email: "user@pakcarry.com",
    role: "user",
    createdAt: "2025-07-03T12:00:00.000Z",
  },
];

const mockOrders = [
  {
    id: "64e0d7c1e5a5c6f6d6c29b7d",
    orderId: "64e0d7c1e5a5c6f6d6c29b7d",
    name: "John Doe",
    email: "john.doe@example.com",
    service: "Instagram Followers",
    requiredFollowers: 1000,
    createdAt: "2025-07-04T13:00:00.000Z",
    status: "Completed",
    platform: "Instagram",
    postLink: "http://instagram.com/p/12345",
    price: "PKR 500",
  },
  {
    id: "64e0d7c1e5a5c6f6d6c29b7e",
    orderId: "64e0d7c1e5a5c6f6d6c29b7e",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    service: "Facebook Likes",
    requiredFollowers: 500,
    createdAt: "2025-07-05T14:00:00.000Z",
    status: "In Progress",
    platform: "Facebook",
    postLink: "http://facebook.com/p/67890",
    price: "PKR 300",
  },
  {
    id: "64e0d7c1e5a5c6f6d6c29b7f",
    orderId: "64e0d7c1e5a5c6f6d6c29b7f",
    name: "PakCarry User",
    email: "user@pakcarry.com",
    service: "YouTube Views",
    requiredFollowers: 10000,
    createdAt: "2025-07-06T15:00:00.000Z",
    status: "Pending",
    platform: "YouTube",
    postLink: "http://youtube.com/v/abcde",
    price: "PKR 1500",
  },
];

const mockPayments = [
  {
    _id: "64e0d7c1e5a5c6f6d6c29b8a",
    orderId: "64e0d7c1e5a5c6f6d6c29b7f",
    clientEmail: "user@pakcarry.com",
    amount: 1500,
    paymentMethod: "JazzCash",
    transactionId: "JZC-12345678",
    screenshotUrl: "https://example.com/screenshot1.png",
    status: "Approved",
    paymentDate: "2025-07-06T15:05:00.000Z",
  },
];

const mockRefunds = [
  {
    _id: "64e0d7c1e5a5c6f6d6c29b9a",
    orderId: "64e0d7c1e5a5c6f6d6c29b7d",
    clientEmail: "john.doe@example.com",
    amount: 500,
    reason: "Service not delivered as expected.",
    status: "Pending",
    createdAt: "2025-07-07T09:00:00.000Z",
  },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Helper function to format dates for display
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid Date";
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      return date.toLocaleDateString("en-US", options);
    } catch (e) {
      console.error("Error formatting date:", e);
      return "Invalid Date";
    }
  };

  // --- Derived Stats (based on mock data) ---
  const totalUsers = mockUsers.length;
  const totalOrders = mockOrders.length;
  const totalRevenuePKR = mockOrders.reduce(
    (sum, order) => sum + (parseFloat(order.price?.replace("PKR ", "")) || 0),
    0
  );
  // Example-only growth calculation (no real logic)
  const revenueGrowth = 15.5;

  const completedOrdersCount = mockOrders.filter(
    (o) => o.status === "Completed"
  ).length;
  const inProgressOrdersCount = mockOrders.filter(
    (o) => o.status === "In Progress"
  ).length;
  const pendingOrdersCount = mockOrders.filter(
    (o) => o.status === "Pending"
  ).length;
  const cancelledOrdersCount = mockOrders.filter(
    (o) => o.status === "Cancelled"
  ).length;
  const refundedOrdersCount = mockOrders.filter(
    (o) => o.status === "Refunded"
  ).length;
  const failedOrdersCount = mockOrders.filter(
    (o) => o.status === "Failed"
  ).length;

  const serviceDistribution = mockOrders.reduce((acc, order) => {
    const serviceName = order.service || "Unknown Service";
    acc[serviceName] = (acc[serviceName] || 0) + 1;
    return acc;
  }, {});

  const revenueByService = mockOrders.reduce((acc, order) => {
    const serviceName = order.service || "Unknown Service";
    const price = parseFloat(order.price?.replace("PKR ", "")) || 0;
    acc[serviceName] = (acc[serviceName] || 0) + price;
    return acc;
  }, {});

  const orderStatusChartData = [
    { name: "Completed", count: completedOrdersCount, fill: "#0ac6ae" },
    { name: "In Progress", count: inProgressOrdersCount, fill: "#808080" },
    { name: "Pending", count: pendingOrdersCount, fill: "#A9A9A9" },
    { name: "Cancelled", count: cancelledOrdersCount, fill: "#D3D3D3" },
    { name: "Refunded", count: refundedOrdersCount, fill: "#D3D3D3" },
    { name: "Failed", count: failedOrdersCount, fill: "#D3D3D3" },
  ];

  const revenueByServiceChartData = Object.entries(revenueByService).map(
    ([serviceName, revenue]) => ({
      name: serviceName,
      revenue: parseFloat(revenue.toFixed(2)),
    })
  );

  // Returns Tailwind CSS classes for status badges based on status string
  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Completed":
      case "Approved":
        return "bg-[#e6f7f5] text-[#0ac6ae]";
      case "In Progress":
      case "Pending":
      case "Payment Pending":
        return "bg-gray-200 text-gray-800";
      case "Cancelled":
      case "Failed":
      case "Rejected":
      case "Refunded":
        return "bg-black text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  // Returns an appropriate icon color based on the badge background color
  const getIconColorForBadge = (statusClass) => {
    if (statusClass.includes("e6f7f5")) return "#0ac6ae";
    if (statusClass.includes("gray-200")) return "#4B5563";
    if (statusClass.includes("black")) return "#ffffff";
    return "#4B5563";
  };

  // Dashboard statistics cards data
  const stats = [
    {
      label: "Total Users",
      value: totalUsers.toString(),
      icon: <Users className="h-6 w-6" />,
      color: "text-gray-900",
    },
    {
      label: "Total Orders",
      value: totalOrders.toString(),
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "text-gray-900",
    },
    {
      label: "Revenue (PKR)",
      value: `PKR ${totalRevenuePKR.toFixed(2)}`,
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-gray-900",
    },
    {
      label: "Growth (MoM)",
      value: `${revenueGrowth.toFixed(2)}%`,
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-[#0ac6ae]",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-200">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-[#0ac6ae] rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-white" />
            </div>
            <div className="ml-6">
              <h1 className="text-3xl font-bold text-gray-900">
                PakCarry Dashboard
              </h1>
              <p className="text-gray-600">
                Manage users, orders, and system analytics
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex overflow-x-auto">
              {[
                {
                  id: "overview",
                  name: "Overview",
                  icon: <BarChart3 className="h-5 w-5" />,
                },
                {
                  id: "users",
                  name: "Manage Users",
                  icon: <Users className="h-5 w-5" />,
                },
                {
                  id: "orders",
                  name: "Manage Orders",
                  icon: <Package className="h-5 w-5" />,
                },
                {
                  id: "payments",
                  name: "Payment Details",
                  icon: <CreditCard className="h-5 w-5" />,
                },
                {
                  id: "refunds",
                  name: "Refund Requests",
                  icon: <AlertCircle className="h-5 w-5" />,
                },
                {
                  id: "analytics",
                  name: "Analytics",
                  icon: <TrendingUp className="h-5 w-5" />,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "border-[#0ac6ae] text-[#0ac6ae]"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm flex items-center`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Dashboard Overview
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
                    >
                      <div className="flex items-center">
                        <div className={`${stat.color} mr-4`}>{stat.icon}</div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </div>
                          <div className="text-gray-600 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Recent Orders
                </h3>
                <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Order ID</th>
                        <th className="py-3 px-4">Client Email</th>
                        <th className="py-3 px-4">Service</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockOrders.slice(0, 5).map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="py-3 px-4">
                            #{order.orderId.substring(0, 8)}...
                          </td>
                          <td className="py-3 px-4">{order.email}</td>
                          <td className="py-3 px-4">{order.service}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                order.status
                              )}`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(order.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  User Management
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">User ID</th>
                        <th className="py-3 px-4">Name</th>
                        <th className="py-3 px-4">Email</th>
                        <th className="py-3 px-4">Role</th>
                        <th className="py-3 px-4">Registered On</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockUsers.map((userItem) => (
                        <tr
                          key={userItem._id}
                          className="border-t hover:bg-gray-50"
                        >
                          <td className="py-3 px-4">
                            #{userItem._id.substring(0, 8)}...
                          </td>
                          <td className="py-3 px-4">{userItem.name}</td>
                          <td className="py-3 px-4">{userItem.email}</td>
                          <td className="py-3 px-4">
                            {userItem.role === "admin" ? "Admin" : "User"}
                          </td>
                          <td className="py-3 px-4">
                            {formatDate(userItem.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Order Management
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Order ID</th>
                        <th className="py-3 px-4">Client Name</th>
                        <th className="py-3 px-4">Client Email</th>
                        <th className="py-3 px-4">Platform</th>
                        <th className="py-3 px-4">Service</th>
                        <th className="py-3 px-4">Quantity</th>
                        <th className="py-3 px-4">Price (PKR)</th>
                        <th className="py-3 px-4 text-center">Status</th>
                        <th className="py-3 px-4">Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockOrders.map((order) => {
                        const badgeClass = getStatusBadgeClass(order.status);
                        const iconColor = getIconColorForBadge(badgeClass);
                        let statusIcon;
                        switch (order.status) {
                          case "Completed":
                            statusIcon = (
                              <CheckCircle
                                className="h-4 w-4"
                                style={{ color: iconColor }}
                              />
                            );
                            break;
                          case "In Progress":
                            statusIcon = (
                              <Loader2
                                className="h-4 w-4 animate-spin"
                                style={{ color: iconColor }}
                              />
                            );
                            break;
                          case "Pending":
                          case "Payment Pending":
                            statusIcon = (
                              <Clock
                                className="h-4 w-4"
                                style={{ color: iconColor }}
                              />
                            );
                            break;
                          case "Cancelled":
                          case "Failed":
                          case "Refunded":
                            statusIcon = (
                              <Ban
                                className="h-4 w-4"
                                style={{ color: iconColor }}
                              />
                            );
                            break;
                          default:
                            statusIcon = (
                              <Info
                                className="h-4 w-4"
                                style={{ color: iconColor }}
                              />
                            );
                        }

                        return (
                          <tr
                            key={order.id}
                            className="border-t hover:bg-gray-50"
                          >
                            <td className="py-3 px-4 font-medium text-gray-900">
                              #{order.orderId}
                            </td>
                            <td className="py-3 px-4">{order.name}</td>
                            <td className="py-3 px-4">{order.email}</td>
                            <td className="py-3 px-4">{order.platform}</td>
                            <td className="py-3 px-4">{order.service}</td>
                            <td className="py-3 px-4">
                              {order.requiredFollowers.toLocaleString()}
                            </td>
                            <td className="py-3 px-4">{order.price}</td>
                            <td className="py-3 px-4 text-center">
                              <div className="flex items-center justify-center space-x-2">
                                <span
                                  className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${badgeClass}`}
                                >
                                  {statusIcon}
                                  <span className="ml-1">{order.status}</span>
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              {formatDate(order.createdAt)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "payments" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Payment Details
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Payment ID</th>
                        <th className="py-3 px-4">Order ID</th>
                        <th className="py-3 px-4">Client Email</th>
                        <th className="py-3 px-4">Amount (PKR)</th>
                        <th className="py-3 px-4">Method</th>
                        <th className="py-3 px-4">Transaction ID</th>
                        <th className="py-3 px-4">Screenshot</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Payment Date</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockPayments.map((payment) => {
                        const badgeClass = getStatusBadgeClass(payment.status);
                        return (
                          <tr key={payment._id} className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-900">
                              #{payment._id.substring(0, 8)}...
                            </td>
                            <td className="py-3 px-4">
                              {payment.orderId ? (
                                <a
                                  href={`/order/${payment.orderId}`}
                                  className="text-[#0ac6ae] hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  #{payment.orderId.substring(0, 8)}...
                                </a>
                              ) : (
                                "N/A"
                              )}
                            </td>
                            <td className="py-3 px-4">{payment.clientEmail}</td>
                            <td className="py-3 px-4">
                              PKR {payment.amount?.toFixed(0) || "0"}
                            </td>
                            <td className="py-3 px-4">
                              {payment.paymentMethod}
                            </td>
                            <td className="py-3 px-4 break-all">
                              {payment.transactionId || "N/A"}
                            </td>
                            <td className="py-3 px-4">
                              {payment.screenshotUrl ? (
                                <a
                                  href={payment.screenshotUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#0ac6ae] hover:underline flex items-center justify-center"
                                >
                                  <Eye className="h-4 w-4 mr-1" /> View
                                </a>
                              ) : (
                                "N/A"
                              )}
                            </td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}
                              >
                                {payment.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              {formatDate(payment.paymentDate)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "refunds" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Refund Requests
                </h2>
                <div className="overflow-x-auto rounded-lg shadow">
                  <table className="min-w-full text-sm text-left divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="py-3 px-4">Request ID</th>
                        <th className="py-3 px-4">Order ID</th>
                        <th className="py-3 px-4">Client Email</th>
                        <th className="py-3 px-4">Amount (PKR)</th>
                        <th className="py-3 px-4">Reason</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4">Requested On</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockRefunds.map((request) => {
                        const badgeClass = getStatusBadgeClass(request.status);
                        return (
                          <tr key={request._id} className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-900">
                              #{request._id.substring(0, 8)}...
                            </td>
                            <td className="py-3 px-4">
                              {request.orderId ? (
                                <a
                                  href={`/order/${request.orderId}`}
                                  className="text-[#0ac6ae] hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  #{request.orderId.substring(0, 8)}...
                                </a>
                              ) : (
                                "N/A"
                              )}
                            </td>
                            <td className="py-3 px-4">{request.clientEmail}</td>
                            <td className="py-3 px-4">
                              PKR {request.amount?.toFixed(0) || "0"}
                            </td>
                            <td className="py-3 px-4">{request.reason}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded-full text-xs font-medium ${badgeClass}`}
                              >
                                {request.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              {formatDate(request.createdAt)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  System Analytics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Order Status Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={orderStatusChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Revenue by Service (PKR)
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={revenueByServiceChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={(value) => `PKR ${value}`} />
                        <Tooltip
                          formatter={(value) => [`PKR ${value}`, "Revenue"]}
                        />
                        <Legend />
                        <Bar dataKey="revenue" fill="#0ac6ae" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Detailed Order Status Counts
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                    <div className="p-3 bg-[#e6f7f5] rounded-lg">
                      <p className="text-2xl font-bold text-[#0ac6ae]">
                        {completedOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">Completed</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-bold text-gray-800">
                        {inProgressOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">In Progress</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-bold text-gray-800">
                        {pendingOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">Pending</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-bold text-gray-800">
                        {cancelledOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">Cancelled</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-bold text-gray-800">
                        {refundedOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">Refunded</p>
                    </div>
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <p className="text-2xl font-bold text-gray-800">
                        {failedOrdersCount}
                      </p>
                      <p className="text-sm text-gray-600">Failed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
