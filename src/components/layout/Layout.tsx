import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuoteChatbot from "@/components/QuoteChatbot";
import AnnouncementBar from "@/components/AnnouncementBar";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <AnnouncementBar />
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <StickyMobileCTA />
    <QuoteChatbot />
    {/* Bottom spacer matching the sticky CTA (~73px) + iPhone safe area, on the same
        breakpoint as the bar (lg:hidden) so tablets 768–1023px are compensated too. */}
    <div className="lg:hidden" style={{ height: "calc(4.5rem + env(safe-area-inset-bottom))" }} />
  </div>
);

export default Layout;
