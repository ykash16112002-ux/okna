/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { DirectorAddress } from './components/DirectorAddress.tsx';
import { TaskSelection } from './components/TaskSelection.tsx';
import { ProfilesSection } from './components/ProfilesSection.tsx';
import { QuizSection } from './components/QuizSection.tsx';
import { WhyUsSection } from './components/WhyUsSection.tsx';
import { StagesSection } from './components/StagesSection.tsx';
import { PortfolioAndReviews } from './components/PortfolioAndReviews.tsx';
import { FaqAndContacts } from './components/FaqAndContacts.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';

import { VideoModal } from './components/modals/VideoModal.tsx';
import { LegalModal, LegalTab } from './components/modals/LegalModal.tsx';
import { LeadModal } from './components/modals/LeadModal.tsx';
import { SuccessModal } from './components/modals/SuccessModal.tsx';
import { PdfModal } from './components/modals/PdfModal.tsx';
import { MessengerModal } from './components/modals/MessengerModal.tsx';

export default function App() {
  // Modal states
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('policy');
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [isMessengerModalOpen, setIsMessengerModalOpen] = useState(false);

  // Success feedback state
  const [successData, setSuccessData] = useState<{
    name: string;
    phone: string;
    estimate?: string;
    channel?: string;
  } | null>(null);

  // Selected task category to pre-fill Quiz (only set on user click)
  const [selectedTaskCategory, setSelectedTaskCategory] = useState<string | undefined>(undefined);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleStartQuiz = () => {
    scrollToSection('quiz');
  };

  const handleSelectTask = (category: string) => {
    setSelectedTaskCategory(category);
    scrollToSection('quiz');
  };

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleLeadSuccess = (data: {
    name: string;
    phone: string;
    estimate?: string;
    channel?: string;
    note?: string;
  }) => {
    setSuccessData({
      name: data.name,
      phone: data.phone,
      estimate: data.estimate || data.note || 'Заявка на консультацию инженера',
      channel: data.channel || 'phone',
    });
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans">
      {/* 1. Header */}
      <Header
        onOpenConsultation={() => setIsLeadModalOpen(true)}
        onNavigateTo={scrollToSection}
      />

      <main className="flex-1 pb-16 md:pb-0">
        {/* 2. Hero Section */}
        <Hero onStartQuiz={handleStartQuiz} />

        {/* 3. Director Address (Dark) */}
        <DirectorAddress onOpenVideo={() => setIsVideoModalOpen(true)} />

        {/* 4. Task Selection (5 categories) */}
        <TaskSelection onSelectTask={handleSelectTask} />

        {/* 5. Profiles & Comparison (VEKA 70 / VEKA 82 / WHS 72) */}
        <ProfilesSection
          onOpenConsultation={() => setIsLeadModalOpen(true)}
          onOpenPdf={() => setIsPdfModalOpen(true)}
        />

        {/* 6. Quiz Calculator (Dark 5-step) */}
        <QuizSection
          selectedCategory={selectedTaskCategory}
          onSuccess={handleLeadSuccess}
          onOpenLegal={handleOpenLegal}
        />

        {/* 7. Why Choose Us (Production, Staff, Quality + Factory Photo) */}
        <WhyUsSection />

        {/* 8. Stages of Work (6 connected steps) */}
        <StagesSection />

        {/* 9 & 10. Portfolio ("Наши работы") and Reviews ("Отзывы") side-by-side */}
        <PortfolioAndReviews onOpenConsultation={() => setIsLeadModalOpen(true)} />

        {/* 11. FAQ, Final Application & Contacts with Map */}
        <FaqAndContacts
          onSuccess={handleLeadSuccess}
          onOpenLegal={handleOpenLegal}
        />
      </main>

      {/* 12. Footer (Dark) */}
      <Footer
        onNavigateTo={scrollToSection}
        onOpenLegal={handleOpenLegal}
      />

      {/* 13. Mobile Bottom Sticky Red Bar */}
      <MobileBottomBar
        onStartQuiz={handleStartQuiz}
        onOpenMessengers={() => setIsMessengerModalOpen(true)}
      />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenConsultation={() => setIsLeadModalOpen(true)}
      />

      <LeadModal
        isOpen={isLeadModalOpen}
        onClose={() => setIsLeadModalOpen(false)}
        onSuccess={handleLeadSuccess}
        onOpenLegal={handleOpenLegal}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        initialTab={legalTab}
        onClose={() => setIsLegalModalOpen(false)}
      />

      <SuccessModal
        isOpen={!!successData}
        data={successData}
        onClose={() => setSuccessData(null)}
      />

      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        onOpenConsultation={() => setIsLeadModalOpen(true)}
      />

      <MessengerModal
        isOpen={isMessengerModalOpen}
        onClose={() => setIsMessengerModalOpen(false)}
        onOpenConsultation={() => setIsLeadModalOpen(true)}
      />
    </div>
  );
}
