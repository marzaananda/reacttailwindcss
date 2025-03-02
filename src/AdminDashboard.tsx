import React from "react";
import { logoutAdmin } from "./AdminAuth";

const AdminDashboard = () => {
  const handleLogout = async () => {
    await logoutAdmin();
    window.location.reload();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p>Selamat datang, Admin!</p>
      <button onClick={handleLogout} className="bg-red-500 text-white p-2 mt-4">
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
