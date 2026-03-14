"use client";

import React, { useEffect, useState } from 'react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function TeamPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  return (
    <ProtectedRoute allowedRoles={['ADMIN', 'TEAM']}>
      <div className="min-h-screen flex bg-background">
        <aside className="w-64 border-r border-white/10 p-6 hidden md:flex flex-col gap-6">
          <div className="text-2xl font-bold tracking-tighter">
            Lizzy<span className="text-brand">Team</span>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            <a href="#" className="px-4 py-2 rounded-lg bg-surface text-brand font-medium">Chat Moderation</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Bookings</a>
            <a href="#" className="px-4 py-2 rounded-lg text-text-secondary hover:bg-surface/50 hover:text-white transition">Student Support</a>
          </nav>
          <Button variant="ghost" onClick={() => { localStorage.clear(); window.location.href = '/login'; }}>
            Logout
          </Button>
        </aside>

        <main className="flex-1 p-6 md:p-12 overflow-y-auto">
          <header className="mb-10">
            <h1 className="text-3xl font-bold mb-2">Team Dashboard</h1>
            <p className="text-text-secondary">Moderate chats, handle bookings and support students.</p>
          </header>

          <h2 className="text-xl font-semibold mb-6">Recent Bookings to Closer</h2>
          <Card>
            <div className="text-sm text-text-secondary p-4 text-center">
              Booking management table goes here. Fetching from /api/bookings.
            </div>
          </Card>
        </main>
      </div>
    </ProtectedRoute>
  );
}
