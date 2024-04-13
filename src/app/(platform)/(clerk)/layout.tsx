import { WavyBackground } from "@/components/ui/wavy-background";

const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <WavyBackground className="max-w-4xl mx-auto pb-40">
            <div className="h-full mt-20 flex items-center justify-center">
                {children}
            
            </div>
        </WavyBackground>
    );
  };
  
export default ClerkLayout;