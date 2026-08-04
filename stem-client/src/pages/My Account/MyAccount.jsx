import { useState } from "react";
import AccountSidebar from "./AccountSidebar";
import AccountContent from "./AccountContent";
import PurchaseHistory from "./PurchaseHistory";
import Profile from "./Profile";
import Messages from "./Messages";

const AccountPage = ({ userEmail }) => {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <div className="lg:flex gap-6 p-6 max-w-7xl mx-auto my-12">
      <div className="lg:w-1/4">
        <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="lg:w-3/4">
        {activeTab === "courses" && <AccountContent userEmail={userEmail} />}
        {activeTab === "history" && <PurchaseHistory />}
        {activeTab === "messages" && <Messages />}
        {activeTab === "profile" && <Profile />}
      </div>
    </div>
  );
};

export default AccountPage;
