"use client";

import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return (
    <ProtectedRoute allowedRoles={['ADMIN']}>
      <div className="min-h-screen flex bg-background">
        <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            Lizzy<span className="text-brand">Admin</span>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            <a href="#" className="px-4 py-2 rounded-lg bg-surface text-brand font-medium">Overview</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Users</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Courses</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Bookings</a>
          </nav>
          <Button variant="ghost" onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>
            Logout
          </Button>
        </aside>

        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-text-secondary">Manage platform content and users.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="flex flex-col items-center justify-center text-center p-8">
              <span className="text-4xl font-bold text-white mb-2">1,204</span>
              <span className="text-sm text-text-secondary uppercase">Total Students</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center p-8">
              <span className="text-4xl font-bold text-white mb-2">$42k</span>
              <span className="text-sm text-text-secondary uppercase">MRR</span>
            </Card>
            <Card className="flex flex-col items-center justify-center text-center p-8">
              <span className="text-4xl font-bold text-white mb-2">18</span>
              <span className="text-sm text-text-secondary uppercase">Active Bookings</span>
            </Card>
          </div>
          
          <h2 className="text-xl font-semibold mb-6">Recent Users</h2>
          <Card>
            <div className="text-sm text-text-secondary p-4 text-center">
              User table component goes here. Fetching from /api/users.
            </div>
          </Card>
        </main>
      </div>
    </ProtectedRoute>
  );
}
