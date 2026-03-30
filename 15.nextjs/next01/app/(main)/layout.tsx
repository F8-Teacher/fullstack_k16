import Nav from "./_components/Nav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[80%] mx-auto">
      <Nav />
      {children}
    </div>
  );
}
