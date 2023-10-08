export default function Home() {
  return (
    <main className="flex h-full flex-col">
      {/* Navbar */}
      <div className="h-16">Navbar</div>

      <hr className="h-px w-full border-none bg-neutral-800" />

      {/* Body */}
      <div className="flex-1 overflow-y-hidden">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-48">Sidebar</div>

          <div className="h-full w-px bg-neutral-800"></div>

          {/* Main */}
          <div className="flex-1">Content</div>
        </div>
      </div>

      {/* Footer */}
    </main>
  );
}
