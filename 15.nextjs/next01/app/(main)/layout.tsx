import Nav from "./_components/Nav";
import UserProfile from "./_components/UserProfile";
import { AuthProvider } from "./_context/AuthProvider";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[80%] mx-auto">
      <AuthProvider>
        <header className="py-5 flex justify-between">
          <Nav />
          <UserProfile />
        </header>
        {children}
      </AuthProvider>
    </div>
  );
}
