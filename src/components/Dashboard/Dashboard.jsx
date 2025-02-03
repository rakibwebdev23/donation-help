import { useState } from 'react';
import { Link, Outlet } from "react-router-dom";
import Container from '../Container/Container';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useAuth();

  const navItems = [
    { path: '/dashboard/userHome', label: 'User Home' },
    { path: '/dashboard/profile', label: 'Profile' },
    { path: '/dashboard/notifications', label: 'Notifications' },
    { path: '/dashboard/settings', label: 'Settings' }
  ];

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation Bar */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </button>
                <span className="text-2xl font-bold text-black ml-2 lg:ml-0">My Profile</span>
              </div>

              {/* User Profile Section */}
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  {user?.photoURL &&
                    <div className="avatar online">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  }
                  <span className="hidden lg:block text-sm font-medium text-gray-800">{user?.displayName}</span>
                  <span className="hidden lg:block text-sm font-medium text-gray-800">{user?.email}</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex">
          {/* Sidebar Navigation */}
          <aside className={`
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:w-64
          fixed lg:static inset-y-0 left-0 z-50
          transform transition-transform duration-300 ease-in-out
          bg-white border-r border-gray-200
        `}>
            <div className="h-full px-3 py-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-purple-200 hover:text-purple-600 transition-colors duration-200 font-bold text-rose-600"
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 p-4 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <div className="p-6">
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;