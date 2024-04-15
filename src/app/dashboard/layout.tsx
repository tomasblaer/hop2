


import { WavyBackground } from "@/components/ui/wavy-background";
import SidePanel from "./_components/sidepanel";




export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="h-screen bg-black">
          <SidePanel />
          {children}
        </div>
    </>
  );
}