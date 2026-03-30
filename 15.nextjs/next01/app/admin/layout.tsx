import ContextProvider from "./_components/ContextProvider";
import Nav from "./_components/Nav";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("admin layout");
  return (
    <div className="max-w-[80%] mx-auto">
      <ContextProvider>
        <Nav />
        {children}
      </ContextProvider>
    </div>
  );
}

//layout: server
//ContextProvider: ContextProvider
//Câu hỏi Dashboard là client hay server? --> server
