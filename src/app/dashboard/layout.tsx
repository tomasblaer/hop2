


import SidePanel from "./_components/sidepanel";




export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidePanel />
      {children}
    </>
  );
}