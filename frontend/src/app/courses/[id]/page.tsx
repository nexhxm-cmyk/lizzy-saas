"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Card } from '@/components/ui/Card';

export default function CoursePlayerPage({ params }: { params: { id: string } }) {
  const [activeLesson, setActiveLesson] = useState(1);

  return (
    <ProtectedRoute allowedRoles={['STUDENT', 'ADMIN', 'TEAM']}>
      <div className="min-h-screen flex flex-col bg-background">
        {/* Header */}
        <header className="h-16 border-b border-white/10 flex items-center px-6 justify-between bg-surface/50 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-text-secondary hover:text-white transition group flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              <span>Back to Dashboard</span>
            </Link>
            <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>
            <h1 className="font-bold hidden sm:block">Viral Content Mastery</h1>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          {/* Video Player Area */}
          <main className="flex-1 overflow-y-auto p-4 md:p-8">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 mb-6 relative group">
                {/* 
                  To prevent downloads: 
                  1. controlsList="nodownload" restricts native download button 
                  2. onContextMenu prevents right clicking to save video
                */}
                <video 
                  controls 
                  controlsList="nodownload" 
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                  poster="/placeholder-poster.jpg"
                  src="https://www.w3schools.com/html/mov_bbb.mp4"
                >
                  Your browser does not support HTML5 video.
                </video>
              </div>
              
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-brand-light text-sm font-medium mb-1">Module 1 • Lesson {activeLesson}</div>
                  <h2 className="text-2xl font-bold mb-4">The Psychology of Virality</h2>
                  <p className="text-text-secondary leading-relaxed max-w-3xl">
                    In this lesson, we break down exactly why humans share content. Learn the 4 core emotional triggers that guarantee your video gets passed around. 
                    This is the foundation of every single video I've posted that hit over 1M views.
                  </p>
                </div>
              </div>
            </div>
          </main>

          {/* Sidebar Area (Curriculum / VIP Chat) */}
          <aside className="w-full lg:w-96 border-l border-white/10 flex flex-col bg-surface/30">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
              <button className="flex-1 py-4 text-sm font-medium border-b-2 border-brand text-white">Curriculum</button>
              <button className="flex-1 py-4 text-sm font-medium text-text-secondary hover:text-white transition">VIP Chat</button>
            </div>

            {/* Curriculum List */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-sm uppercase tracking-wider text-text-secondary">Module 1: Foundations</h3>
                <div className="flex flex-col gap-2">
                  {[1, 2, 3].map((num) => (
                    <button 
                      key={num}
                      onClick={() => setActiveLesson(num)}
                      className={`text-left p-3 rounded-lg text-sm transition flex items-center justify-between group ${activeLesson === num ? 'bg-brand/20 border border-brand/50 text-white' : 'hover:bg-white/5 text-text-secondary hover:text-white'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs ${activeLesson === num ? 'bg-brand text-white' : 'bg-white/10'}`}>
                          {num}
                        </div>
                        <span className="font-medium truncate pr-4">Lesson Title Here</span>
                      </div>
                      <span className="text-xs opacity-50">12:45</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </ProtectedRoute>
  );
}
