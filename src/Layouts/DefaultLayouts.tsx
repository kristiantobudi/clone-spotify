import Navbar from "@/components/Navbar/Navbar";

export default function DefaultLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Navbar />
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
}
