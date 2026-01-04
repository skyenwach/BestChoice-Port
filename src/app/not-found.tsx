import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#0A2463] via-[#0A2463]/95 to-[#87CEEB]/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div>
          <h1 className="text-9xl md:text-[12rem] font-bold text-white/20 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-md mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#87CEEB] text-[#0A2463] font-semibold text-lg hover:bg-[#0A2463] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-[#0A2463] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              View CV
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

