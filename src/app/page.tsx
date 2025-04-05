"use client";

import React from "react";
import BoxProfile from "@/components/BoxProfile";
import BackgroundImages from "@/components/Background";

export default function Home() {
  return (
    <div className="relative bg-[#1F1F1F] min-h-screen flex items-center justify-center">
      {/* Background com z-index 0 */}
      <div className="absolute inset-0 z-0">
        <BackgroundImages />
      </div>

      {/* BoxProfile com z-index 10, largura máxima definida */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <BoxProfile />
      </div>
    </div>
  );
}
