import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, icon: "✅", message: "Order placed successfully!", type: "success" },
    { id: 2, icon: "ℹ️", message: "New plants in stock! Check them out.", type: "info" },
  ]);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="fixed top-32 right-4 space-y-3 z-50">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center gap-3 px-6 py-4 rounded-lg backdrop-blur-md border shadow-lg animate-pulse ${
            notification.type === "success"
              ? "bg-green-900/50 border-green-600"
              : "bg-blue-900/50 border-blue-600"
          }`}
        >
          <span className="text-2xl">{notification.icon}</span>
          <span className="flex-1 text-white font-semibold">{notification.message}</span>
          <button
            onClick={() => removeNotification(notification.id)}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
