import React from "react";
import "@/styles/global.css";
import { Inter } from "@next/font/google";

import GlassPane from "@/components/GlassPane";

const inter = Inter({
  variable: "--font-inter",
});

interface IProps {
  children: React.ReactNode;
}

const AuthRootLayout = ({ children }: IProps): JSX.Element => {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
};

export default AuthRootLayout;
