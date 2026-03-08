import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import QuoteChatbot from "@/components/QuoteChatbot";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <Footer />
    <StickyMobileCTA />
    <QuoteChatbot />
    <ExitIntentPopup />
    {/* bottom padding for mobile sticky CTA */}
    <div className="h-16 md:hidden" />
  </div>
);

export default Layout;
