import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";

export default async function HomePage() {
  const status = await client.fetch(TEMPLATE_STATUS_QUERY);

  return (
    <main className="min-h-screen py-20 relative overflow-hidden flex items-center" style={{ background: '#da8da0' }}>
      {/* Animated Blob */}
      <div className="blob">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold bg-linear-to-r text-primary-darkd bg-clip-text mb-8">
          Template Ready
        </h1>
        
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-slate-200/50">
          {status ? (
            <>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {status.isReady ? "✅ Sanity Connected!" : "⚠️ Setup needed"}
              </h2>
              <p className="text-xl text-slate-700 mb-8">
                Status: <strong>{status.status}</strong>
              </p>
              <div className="text-sm text-slate-500">
                Sanity query working → your template is fully wired!
              </div>
            </>
          ) : (
            <div className="text-2xl text-slate-600">
              No status document yet. Create one in /studio
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
