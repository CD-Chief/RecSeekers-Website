import { client } from "@/sanity/client";
import { LINKED_IN_QUERY } from "@/sanity/queries";

export default async function JobsPage() {
  const linkedIn = await client.fetch(LINKED_IN_QUERY);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8">
          Jobs
        </h1>
        
        {/* LinkedIn Embed */}
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-slate-200/50">
          {linkedIn ? (
            <>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {linkedIn.link ? "✅ LinkedIn embed working!" : "⚠️ LinkedIn embed needs work"}
              </h2>
              <div dangerouslySetInnerHTML={{__html: linkedIn.link}}></div>
            </>
          ) : (
            <div className="text-2xl text-slate-600">
              No LinkedIn Embedding provided yet
            </div>
          )}
        </div>
      </div>
    </main>
  );
}