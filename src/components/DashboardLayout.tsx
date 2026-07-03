import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import QuickNoteComposer from "./QuickNoteComposer";
import { Page } from "../types";
import { AnimatePresence } from "motion/react";
import { useCurrentChild } from "../context/ChildContext";

interface DashboardLayoutProps {
  children: ReactNode;
  currentPage: Page;
  onPageChange: (page: Page) => void;
  onAddChildRequest: () => void;
  onShowPathway?: (child: any) => void;
}

export default function DashboardLayout({
  children,
  currentPage,
  onPageChange,
  onAddChildRequest,
  onShowPathway,
}: DashboardLayoutProps) {
  const showSidebar = currentPage !== "style-guide";
  const { currentChild } = useCurrentChild();
  const isLeo = currentChild.name === "Leo" || currentChild.name === "Nick" || currentChild.name === "Noah";

  return (
    <div className="flex h-screen overflow-hidden bg-[var(--color-thread-off-white)] font-sans antialiased text-[var(--color-thread-darkest)]">
      {showSidebar && <Sidebar currentPage={currentPage} onPageChange={onPageChange} onShowPathway={onShowPathway} />}

      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar
          currentPage={currentPage}
          onAddChildRequest={onAddChildRequest}
          onPageChange={onPageChange}
        />

        <div
          className="flex-1 overflow-y-auto scroll-smooth"
        >
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </div>
      </main>

      {currentPage !== "diary" && !isLeo && <QuickNoteComposer />}
    </div>
  );
}
