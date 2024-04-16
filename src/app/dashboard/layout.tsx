import SidePanel from "./_components/sidepanel";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="h-screen flex">
          <SidePanel />
          {children}
        </div>
    </>
  );
}