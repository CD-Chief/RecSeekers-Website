import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";

export default async function HomePage() {
  const status = await client.fetch(TEMPLATE_STATUS_QUERY);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8">
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
