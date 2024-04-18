import MobileFooter from "@/components/footer/mobile-footer";
import SidePanel from "../../components/dashboard/sidepanel";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="flex h-screen">
          <SidePanel />
          {children}
          <MobileFooter />
        </div>
    </>
  );
}