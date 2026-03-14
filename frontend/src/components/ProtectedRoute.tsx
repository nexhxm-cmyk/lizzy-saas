"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, allowedRoles }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      router.push('/login');
      return;
    }

    try {
      const user = JSON.parse(userStr);
      if (allowedRoles && !allowedRoles.includes(user.role)) {
        // Redirect somewhere safe
        router.push(user.role === 'ADMIN' ? '/admin' : user.role === 'TEAM' ? '/team' : '/dashboard');
        return;
      }
      setIsAuthorized(true);
    } catch {
      router.push('/login');
    }
  }, [router, allowedRoles]);

  if (!isAuthorized) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return <>{children}</>;
};
