import React, { PropsWithChildren } from 'react';

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center h-full">{children}</div>
  );
}

export default AuthLayout;
