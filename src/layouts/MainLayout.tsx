import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Sprout, CloudRain, Users, Menu, Bell, User, Search, BookOpen, Landmark, Bot } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from '../components/ui/Button';
import { Logo } from '../components/ui/Logo';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-surface flex flex-col md:flex-row pb-20 md:pb-0">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white sticky top-0 z-40 border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <Logo className="w-10 h-10" iconClassName="w-6 h-6" />
          <div className="flex flex-col">
            <span className="text-primary font-bold text-xl leading-tight">Hariyali Mitra</span>
            <span className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">समृद्ध किसान, समृद्ध देश</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-600 hover:text-primary transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-primary transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <NavLink to="/profile" className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-200 transition-colors border border-green-200 shrink-0">
            <User className="w-5 h-5" />
          </NavLink>
        </div>
      </header>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-gray-100 sticky top-0 h-screen p-6 shrink-0">
        <div className="flex items-center gap-3 mb-10 px-2">
          <Logo className="w-12 h-12" iconClassName="w-7 h-7" />
          <div className="flex flex-col">
            <span className="text-primary font-bold text-2xl leading-tight">Hariyali Mitra</span>
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mt-0.5">समृद्ध किसान, समृद्ध देश</span>
          </div>
        </div>
        
        <nav className="flex-1 space-y-2">
          <NavItem to="/" icon={<Home />} label="Home" />
          <NavItem to="/marketplace" icon={<ShoppingBag />} label="Marketplace" />
          <NavItem to="/services" icon={<Sprout />} label="Farm Services" />
          <NavItem to="/planner" icon={<Menu />} label="Crop Planner" />
          <NavItem to="/weather" icon={<CloudRain />} label="Weather" />
          <NavItem to="/community" icon={<Users />} label="Community" />
          <NavItem to="/schemes" icon={<Landmark />} label="Govt Schemes" />
          <NavItem to="/learning" icon={<BookOpen />} label="Learning Center" />
        </nav>
        
        <div className="mt-auto space-y-4">
          <div className="bg-primary/5 rounded-2xl p-4 text-center">
            <h4 className="font-semibold text-primary mb-2">AI Assistant</h4>
            <p className="text-sm text-gray-600 mb-4">Ask anything about farming, crops, or diseases.</p>
            <NavLink to="/assistant">
              <Button className="w-full">Chat Now</Button>
            </NavLink>
          </div>
          <NavLink to="/profile" className="flex items-center gap-3 p-3 w-full rounded-xl hover:bg-gray-50 text-gray-700 transition-colors">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
              <User className="w-5 h-5" />
            </div>
            <div className="text-left flex-1">
              <p className="font-medium text-sm">Ramesh Kumar</p>
              <p className="text-xs text-gray-500">View Profile</p>
            </div>
          </NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-3 flex justify-between items-center z-50 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <MobileNavItem to="/" icon={<Home className="text-green-600 drop-shadow-sm" />} label="Home" />
        <MobileNavItem to="/marketplace" icon={<ShoppingBag className="text-amber-600 drop-shadow-sm" />} label="Market" />
        <MobileNavItem to="/planner" icon={<Menu className="text-blue-600 drop-shadow-sm" />} label="Planner" />
        <MobileNavItem to="/weather" icon={<CloudRain className="text-cyan-600 drop-shadow-sm" />} label="Weather" />
        <MobileNavItem to="/community" icon={<Users className="text-purple-600 drop-shadow-sm" />} label="Community" />
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-4 px-4 py-3.5 rounded-2xl font-medium transition-all duration-200",
          isActive 
            ? "bg-primary text-white shadow-md shadow-primary/20" 
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        )
      }
    >
      {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6" })}
      {label}
    </NavLink>
  );
}

function MobileNavItem({ to, icon, label }: { to: string, icon: React.ReactNode, label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex flex-col items-center gap-1 min-w-[64px] px-1 transition-colors",
          isActive ? "opacity-100" : "opacity-60 grayscale-[50%]"
        )
      }
    >
      {({ isActive }) => (
        <>
          <div className={cn(
            "p-1.5 rounded-xl transition-all duration-300", 
            isActive ? "bg-gray-100 scale-110" : "bg-transparent"
          )}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: cn("w-6 h-6", (icon as React.ReactElement).props.className) 
            })}
          </div>
          <span className={cn("text-[10px] font-medium tracking-tight text-gray-800", isActive ? "font-bold" : "")}>{label}</span>
        </>
      )}
    </NavLink>
  );
}
