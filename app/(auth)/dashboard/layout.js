import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function UserLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50 p-4 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
