// components/Sidebar.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Home, Users, FileText, LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/provider/authProvider";

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogout = () => {
    setToken(null);
    navigate("/login");
  };

  const openReportsGroups = () => {
    navigate("/reports-groups");
  };

  const openDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <aside className={`${isSidebarOpen ? "w-64" : "w-20"} bg-white shadow-md transition-all duration-300 ease-in-out`}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between p-4">
          <h2 className={`text-lg font-semibold ${isSidebarOpen ? "" : "hidden"}`}>Dashboard</h2>
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <Separator />
        <ScrollArea className="flex-1">
          <nav className="space-y-2 p-4">
            <Button variant="ghost" size="sm" className="flex items-center space-x-2" onClick={openDashboard}>
              <Home className="h-5 w-5" />
              {isSidebarOpen && <span>Home</span>}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              {isSidebarOpen && <span>Grupos</span>}
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2" onClick={openReportsGroups}>
              <FileText className="h-5 w-5" />
              {isSidebarOpen && <span>Relatórios</span>}
            </Button>
          </nav>
        </ScrollArea>
        <Separator />
        <div className="p-4">
          <Button variant="outline" className="w-full justify-start" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            {isSidebarOpen && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
