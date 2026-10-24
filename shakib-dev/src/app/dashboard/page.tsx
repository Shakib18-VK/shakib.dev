"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  User, 
  FolderGit2, 
  Milestone, 
  BookOpen, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight, 
  Code2, 
  FileText, 
  CheckCircle2, 
  Moon 
} from "lucide-react";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, active: true },
    { label: "Profile", href: "/about", icon: User },
    { label: "Projects", href: "/projects", icon: FolderGit2 },
    { label: "Journey", href: "/journey", icon: Milestone },
    { label: "Learning", href: "#", icon: BookOpen },
    { label: "Stats", href: "#", icon: BarChart3 },
    { label: "Settings", href: "#", icon: Settings },
  ];

  const stats = [
    { title: "LeetCode Solved", value: "100+", icon: Code2, color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
    { title: "Projects Completed", value: "5", icon: FolderGit2, color: "text-violet-400 bg-violet-400/10 border-violet-400/20" },
    { title: "Ongoing Goals", value: "3", icon: Milestone, color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20" },
    { title: "Years Journey", value: "2", icon: BarChart3, color: "text-pink-400 bg-pink-400/10 border-pink-400/20" },
  ];

  const activities = [
    { text: "Solved 495. Assign Cookies", time: "2 hours ago" },
    { text: "Updated AI Interview Assistant", time: "5 hours ago" },
    { text: "Learned Next.js middleware", time: "1 day ago" },
    { text: "Completed ML course (1 alg + 1 proj)", time: "2 days ago" },
  ];

  const quickLinks = [
    { name: "LeetCode", icon: Code2, href: "https://leetcode.com" },
    { name: "GitHub", icon: Code2, href: "https://github.com/Shakib18-VK" },
    { name: "LinkedIn", icon: Code2, href: "#" },
    { name: "Resume", icon: FileText, href: "#" },
  ];

  const learningPlan = [
    { task: "Aptitude (1h)", done: true },
    { task: "English (1h)", done: true },
    { task: "DSA (2h)", done: true },
  ];

  return (
    <div className="min-h-screen bg-[#070711] text-white flex overflow-x-hidden selection:bg-violet-500/30 selection:text-violet-200">
      
      {/* Mobile Backdrop Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-[#0a0a16] border-r border-white/[0.07] flex flex-col justify-between p-6 transition-transform duration-300 lg:translate-x-0 lg:static
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div>
          {/* User Profile Header */}
          <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-8">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center font-bold text-lg shadow-lg shadow-violet-950/50">
                S
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm truncate text-white">Md Shakib</h4>
                <p className="text-[11px] text-slate-400 truncate">shakib@gmail.com</p>
              </div>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    item.active 
                      ? "bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-lg shadow-violet-950/20" 
                      : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="pt-4 border-t border-white/[0.07]">
          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium text-rose-400 hover:bg-rose-500/10 transition-colors">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-8 py-5 bg-[#070711]/80 backdrop-blur-md border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-white active:scale-95 transition"
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
            <span className="hidden sm:inline">Tue, 21 Oct 2026</span>
            <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
              <Moon size={16} />
            </div>
          </div>
        </header>

        {/* Dashboard Body Container */}
        <main className="p-4 sm:p-8 space-y-6 max-w-7xl w-full mx-auto">
          
          {/* Stat Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 to-[#0a0a14]/90 p-4 sm:p-6 backdrop-blur-md relative overflow-hidden transition hover:border-violet-500/30"
                >
                  <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl border flex items-center justify-center mb-3 sm:mb-4 ${stat.color}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">{stat.value}</h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-slate-400 font-medium">{stat.title}</p>
                </div>
              );
            })}
          </div>

          {/* Lower Grid Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* Recent Activity Card */}
            <div className="lg:col-span-2 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 to-[#0a0a14]/90 p-5 sm:p-6 backdrop-blur-md">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3.5 pb-3.5 border-b border-white/[0.05] last:border-0 last:pb-0">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 flex-shrink-0 mt-0.5">
                      <Code2 size={15} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-200">{act.text}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{act.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links Card */}
            <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 to-[#0a0a14]/90 p-5 sm:p-6 backdrop-blur-md flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-4">Quick Links</h3>
                <div className="space-y-2.5">
                  {quickLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/30 transition text-sm group"
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={16} className="text-violet-400" />
                          <span className="font-medium text-slate-200 group-hover:text-white">{link.name}</span>
                        </div>
                        <ChevronRight size={16} className="text-slate-500 group-hover:text-violet-300 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Learning Plan Widget (Full width on mobile, spans 3 on desktop bottom if needed) */}
            <div className="lg:col-span-3 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#121222]/90 to-[#0a0a14]/90 p-5 sm:p-6 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="w-full sm:w-auto">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Today
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3">Learning Plan</h3>
                <div className="space-y-2.5">
                  {learningPlan.map((item, index) => (
                    <div key={index} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span>{item.task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Progress Circle Visual */}
              <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] min-w-[140px]">
                <div className="relative w-16 h-16 flex items-center justify-center rounded-full border-4 border-emerald-400/20 border-t-emerald-400">
                  <span className="text-sm font-bold text-emerald-300">3/3</span>
                </div>
                <span className="text-[11px] font-medium text-slate-400 mt-2">Completed</span>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}