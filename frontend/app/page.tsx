import { client } from "@/sanity/client";
import { TEMPLATE_STATUS_QUERY } from "@/sanity/queries";
import { BlobField } from "@/components/Blob/Blob";

export default async function HomePage() {
  const status = await client.fetch(TEMPLATE_STATUS_QUERY);

  return (
    <main
      className="relative isolate min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#da8da0' }}
    >
      <BlobField />
      <h1 className="relative z-10 text-6xl font-bold text-white mix-blend-difference">
        Template Ready
      </h1>
    </main>
  );
}
