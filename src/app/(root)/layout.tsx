import { Navbar } from '@/components/navbar';
import { Sidebar } from '@/components/sidebar';
import React, { PropsWithChildren } from 'react';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full">
      <Navbar />
      <div className="hidden md:flex mt-14 w-20 flex-col fixed inset-y-0">
        <Sidebar />
      </div>
      <main className="md:pl-20 pt-16 h-full">{children}</main>
    </div>
  );
}

export default RootLayout;
