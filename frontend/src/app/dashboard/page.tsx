"use client";

import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return (
    <ProtectedRoute allowedRoles={['STUDENT', 'ADMIN', 'TEAM']}>
      <div className="min-h-screen flex bg-background">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            Lizzy<span className="text-brand">Academy</span>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            <a href="#" className="px-4 py-2 rounded-lg bg-surface text-brand font-medium">My Courses</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">VIP Community</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Booked Calls</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Settings</a>
          </nav>
          <Button variant="ghost" onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>
            Logout
          </Button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name || 'Student'}</h1>
            <p className="text-text-secondary">Pick up right where you left off.</p>
          </header>

          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-6">Your Courses</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card hover className="flex flex-col">
                <div className="h-40 bg-surface rounded-lg mb-4 flex items-center justify-center border border-white/5">
                  <span className="text-brand text-4xl">💎</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Viral Content Mastery</h3>
                <p className="text-sm text-text-secondary mb-4 line-clamp-2">The complete blueprint to hit 100k followers and monetize your personal brand.</p>
                <div className="w-full bg-surface rounded-full h-2 mb-4">
                  <div className="bg-brand h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-text-secondary mb-4">45% Complete</p>
                <Button className="mt-auto w-full">Continue Learning</Button>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </ProtectedRoute>
  );
}
