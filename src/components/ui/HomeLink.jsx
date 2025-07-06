import React from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

function HomeLink() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <Link
          className="flex items-center gap-2 text-amber-500 hover:text-amber-700 transition-colors font-bold text-xl"
          to="/"
        >
          <ArrowLeft className="w-5 h-5" />
          Inicio
        </Link>
      </div>
    </div>
  );
}

export default HomeLink;
