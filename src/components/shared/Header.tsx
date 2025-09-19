// src/components/Header.tsx
import React from 'react';
import { AuthButtons } from './AuthButtons';

export function Header() {
  return (
    <header className="p-4 border-b">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Traveler.io</h1>
        <AuthButtons />
      </nav>
    </header>
  );
}