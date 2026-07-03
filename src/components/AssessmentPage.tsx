import { motion } from "motion/react";
import {
  ClipboardList,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  FileText,
  User,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Heart,
  ChevronRight,
  Settings as SettingsIcon,
  CalendarClock,
  Upload,
  LineChart,
  Users,
  ListTodo,
  BookOpen,
  Eye,
  MessageSquare,
  Lightbulb
} from "lucide-react";
import { PageContainer } from "./ui/PageContainer";
import { PageHeader } from "./ui/PageHeader";
import { PageIcon } from "./ui/PageIcon";
import { SectionLabel } from "./ui/SectionLabel";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionDescription } from "./ui/SectionDescription";
import { TimelineStep } from "./ui/TimelineStep";
import { AreaItem } from "./ui/AreaItem";
import { HeroQuoteCard } from "./ui/HeroQuoteCard";
import { HeroActionCard } from "./ui/HeroActionCard";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { ActionLink } from "./ui/ActionLink";
import { useCurrentChild } from "../context/ChildContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import { getChildSessionStatus, getSessionDate } from "../lib/childStatus";

import clinicalReportImg from "../assets/images/clinical_report_placeholder_1783000795444.jpg";

export default function AssessmentPage() {
  const { currentChild } = useCurrentChild();
  const navigate = useNavigate();

  const isLeo = currentChild.name === "Leo" || currentChild.name === "Nick" || currentChild.name === "Noah";
  
  const sessionStatus = getChildSessionStatus(currentChild);
  const isBooked = sessionStatus === "booked";
  const isCancelled = sessionStatus === "cancelled";

  const sessionDate = getSessionDate(currentChild, "long");
  const sessionTime = currentChild.intake?.sessionTime || "4:00 pm";

  const completedSections = currentChild.intake?.completedQuestionnaireSections || [];
  const questionnaireProgress = Math.round((completedSections.length / 8) * 100);

  const handleBookClick = () => {
    navigate('/setup?step=5&directSession=1');
  };

  const steps = [
    {
      num: "01",
      title: "Clinical Registration",
      desc: "Profile registered on the Diagnostic Assessment pathway, securing clinical slots.",
      status: "completed",
    },
    {
      num: "02",
      title: "Developmental Questionnaire",
      desc: "Parent-completed diagnostic questionnaires covering learning, attention, sleep, and emotional health.",
      status: questionnaireProgress === 100 ? "completed" : "active",
    },
    {
      num: "03",
      title: "In-Depth Telehealth Assessment",
      desc: "A 60-minute developmental review with our specialized child clinician to discuss findings and observations.",
      status: isBooked ? "completed" : "pending",
    },
    {
      num: "04",
      title: "Clinical Formulation & Plan",
      desc: "Establish clinical benchmarks, customized co-regulation structures, and classroom accommodations.",
      status: "locked",
    },
  ];

  if (currentChild.name === "Noah") {
    // Custom assessment page for Noah showing completed assessment session, assessment, and doc upload with report ready.
    // Comment: Representing completed status for Noah where assessment session, assessment, and doc upload are completed and report is ready. Show the hero white card with light green card.
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="pt-16 pb-24"
      >
        <PageContainer>
          <div className="space-y-10">
            <PageHeader
              kicker="Diagnostic Assessment"
              title="Noah's assessment is complete."
              className="mb-12"
              description={
                <SectionDescription>
                  All preparatory steps, telehealth sessions, and document uploads have been completed. Dr. Naomi Clark has finalized Noah's clinical formulation and diagnostic report.
                </SectionDescription>
              }
            />

            {/* Comment: Representing completed status for Noah where assessment session, assessment, and doc upload are completed and report is ready. Show the hero white card with light green card. */}
            <HeroQuoteCard
              kicker="Diagnostic Outcome"
              quote="Noah's clinical formulation and diagnostic report are fully finalized and ready for review."
              showQuotes={false}
              className="mb-10 bg-white border border-black/5"
              evidenceLevel={3}
              evidenceText="Report Completed"
              evidenceVariant="green"
              rightNode={
                <HeroActionCard
                  icon={<FileText className="w-[22px] h-[22px] stroke-[1.7] text-[var(--color-thread-mid-green)]" />}
                  title="Download Report"
                  subtitle="PDF · 4.2 MB"
                  className="bg-[var(--color-thread-light-green)] text-[var(--color-thread-heading)] w-[190px] rounded-tl-[28px] hover:bg-[var(--color-thread-light-green)]/90 cursor-pointer"
                  onClick={() => window.open(clinicalReportImg, '_blank')}
                />
              }
            />



            {/* AREAS OF FOCUS */}
            <div className="space-y-4 pt-10 border-t border-black/5">
              <div>
                <SectionLabel>Areas of focus</SectionLabel>
                <SectionTitle>Assessed clinical domains</SectionTitle>
                <SectionDescription>
                  Dr. Naomi Clark's clinical findings across key developmental domains. Click each domain to view observations and supportive next steps.
                </SectionDescription>
              </div>

              <div className="border-y border-black/10 mt-8">
                <AreaItem
                  title="Executive function"
                  impact="High impact on school engagement"
                  status="NOT MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Sustained attention and working memory present significant challenges in structured environments. Noah struggles with initiating tasks independently and managing distractions.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Clinical Observation</span> 
                            Fidgets or leaves seat during tasks requiring sustained mental effort.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Parent Input</span> 
                            Requires frequent prompts to complete multi-step routines at home.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Introduce visual checklists and structured breaks during school tasks.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["12 observations", "7 extracts", "5 verbatim", "8 behavioural"]}
                />

                <AreaItem
                  title="Emotional regulation"
                  impact="Moderate impact during transitions"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Strong emotional awareness, but gets overwhelmed when fatigue sets in. Noah benefits from clear, predictable routines to ease transition anxiety.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Clinical Observation</span> 
                            Warm and generally cooperative, but shuts down or displays high frustration when tasks feel too complex.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Parent Input</span> 
                            Meltdowns are common after school due to sensory and cognitive overload.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Establish an after-school quiet reset routine with low cognitive demand.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["12 observations", "7 extracts"]}
                />

                <AreaItem
                  title="Sensory processing"
                  impact="Low-to-moderate impact"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Responds well to calm, quiet environments. Noah shows high sensitivity to sudden loud auditory environments or overlapping noises.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Clinical Observation</span> 
                            Observed covering ears in loud or busy shared areas.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Allow noise-cancelling headphones during independent classroom work time.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["12 observations", "5 verbatim"]}
                />

                <AreaItem
                  title="Social participation"
                  impact="Positive asset"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Noah is imaginative, friendly, and eager to connect. He enjoys playing with peers, though occasional conflicts arise during structured team games.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Clinical Observation</span> 
                            Demonstrates high social motivation and friendly cooperative play in one-on-one activities.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Encourage unstructured playground play and structured small-group activities with familiar peer mentors.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["12 observations", "5 verbatim"]}
                />

                <AreaItem
                  title="Communication"
                  impact="Steady developmental track"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Noah expresses his needs clearly and has a rich vocabulary, but can become quiet or non-verbal when experiencing emotional or sensory overload.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Clinical Observation</span> 
                            Articulate, descriptive, and highly expressive in low-stress one-on-one dialogues.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Provide options for non-verbal signaling (e.g., green/yellow/red emotion cards) when overwhelmed.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["12 observations", "8 behavioural"]}
                />

                <AreaItem
                  title="Sleep"
                  impact="Supports cognitive stamina"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Occasional restlessness during bedtime transitions, but generally achieves high-quality sleep which supports daytime regulation.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Parent Input</span> 
                            Bedtime routine is stable, though transition to wind-down requires active support.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Maintain a strict screen-free boundary 60 minutes before bed.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["7 extracts"]}
                />

                <AreaItem
                  title="School participation"
                  impact="Requires supportive structuring"
                  status="NOT MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Highly engaged during active discussions or hands-on tasks, but school performance and stamina decline during silent, structured independent desk tasks.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <Eye className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Teacher Observation</span> 
                            Needs visual reminders to stay on task; can distract others when losing focus.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Position Noah near the front of the classroom and deliver instructions in simplified, sequential steps.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["5 verbatim", "8 behavioural"]}
                />

                <AreaItem
                  title="Physical wellbeing"
                  impact="Strong developmental asset"
                  status="MET"
                  isCollapsible={true}
                  description={
                    <div className="space-y-4 mt-3 max-w-[62ch]">
                      <p className="text-[0.96rem] text-[var(--color-thread-gray)] leading-relaxed font-sans">
                        Noah has excellent gross motor skills, stamina, and enjoys active outdoor running, climbing, and physical sports.
                      </p>
                      <div className="bg-white p-5 rounded-none rounded-tr-[36px] text-[0.88rem] space-y-4 font-sans text-slate-700">
                        <div className="flex gap-3">
                          <MessageSquare className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Parent Input</span> 
                            Active physical play is a major source of joy and co-regulation.
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Lightbulb className="w-4 h-4 text-[var(--color-thread-mid-green)] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-slate-900 block mb-0.5">Recommendation</span> 
                            Integrate short movement breaks or active play opportunities to aid concentration.
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                  sources={["7 extracts"]}
                />
              </div>
            </div>
          </div>
        </PageContainer>
      </motion.div>
    );
  }

  if (currentChild.name === "Leo" || currentChild.name === "Nick") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className="pt-16 pb-24"
      >
        <PageContainer>
          <div className="space-y-10">
            <PageHeader
              kicker="Diagnostic Assessment"
              title={`${currentChild.name}'s assessment.`}
              className="mb-12"
              description={
                <SectionDescription>
                  The clinician will assess the domains and give an outcome related to ADHD as likely, unlikely, or more to explore.
                </SectionDescription>
              }
            />

          {/* Clinical domains card is hidden per request. It will be used in a different view.
          <HeroQuoteCard
            kicker="Clinical domains"
            quote="The clinician will assess the domains and give an outcome related to ADHD as likely, unlikely, or more to explore."
            showQuotes={false}
            className="mb-10"
            rightNode={
              <HeroActionCard
                icon={<Stethoscope className="w-[22px] h-[22px] stroke-[1.7]" />}
                title="Clinical outcome"
                subtitle="To be assessed"
              />
            }
          />
          */}

          <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Clinical Session",
                  description: "Telehealth call with Dr. Naomi Clark to discuss developmental history and current challenges.",
                  icon: CalendarClock,
                  path: "/understanding",
                },
                {
                  title: "Assessment",
                  description: "Digital questionnaire to gather insights on focus, emotional regulation, and daily routines.",
                  icon: ClipboardList,
                  path: "/priorities",
                },
                {
                  title: "Doc Upload",
                  description: "Upload school context, pediatric reports, and teacher observations to build a collaborative picture.",
                  icon: Upload,
                  path: "/what-you-noticed",
                },
                {
                  title: "Analysis and Report",
                  description: "The clinician assesses the domains to provide an ADHD outcome (likely, unlikely, or more to explore).",
                  icon: LineChart,
                  path: "/resources",
                },
              ].map((section, index) => {
                const Icon = section.icon;
                const corners = ["rounded-tr-[32px]", "rounded-tl-[32px]", "rounded-br-[32px]", "rounded-bl-[32px]"];
                return (
                  <div
                    key={section.title}
                    className={`relative overflow-hidden bg-white ${corners[index]} transition-all duration-300 flex flex-col p-6 sm:p-8 ${index === 3 ? "md:col-span-3 md:pr-[320px]" : ""}`}
                  >
                    <div className="flex-1 flex flex-col">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-thread-light-green)] text-[var(--color-thread-mid-green)] flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>
                      <h3 className="font-serif text-[1.4rem] text-[var(--color-thread-heading)] mb-2 leading-snug">
                        {section.title}
                      </h3>
                      <p className="text-[0.92rem] leading-relaxed text-slate-600 flex-1 mb-6">
                        {section.description}
                      </p>
                      <div className="pt-2">
                        <ActionLink
                          variant="slate"
                          as="button"
                          onClick={() => navigate(section.path)}
                          className="text-[0.84rem]"
                        >
                          Learn more
                        </ActionLink>
                      </div>
                    </div>

                    {index === 3 && (
                      <div className="mt-6 md:mt-0 md:absolute md:right-0 md:bottom-0 w-full md:w-[280px] h-[180px] rounded-[16px] md:rounded-none md:rounded-tl-[24px] overflow-hidden border border-black/5 md:border-t md:border-l md:border-b-0 md:border-r-0 shadow-sm shrink-0">
                        <img
                          src={clinicalReportImg}
                          alt="Clinical Report Sample"
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}

  const checklistItems = [
    {
      id: "questionnaire",
      title: "Complete clinical questionnaire",
      description: `${completedSections.length} of 8 sections complete (${questionnaireProgress}% done). This maps developmental domains for the clinician.`,
      status: completedSections.length >= 8 ? "completed" : "pending",
      actionText: completedSections.length >= 8 ? "Review answers" : "Continue questionnaire",
      action: () => navigate("/setup?step=2"),
    },
    ...(isLeo ? [] : [{
      id: "documents",
      title: "Upload school context & letters",
      description: "School reports, pediatrician letters, or occupational therapy feedback help build a collaborative picture.",
      status: currentChild.intake?.availableInfo && currentChild.intake.availableInfo.length > 0 ? "completed" : "pending",
      actionText: "Manage documents",
      action: () => navigate("/documents"),
    }]),
    ...(isLeo ? [] : [{
      id: "diary",
      title: "Log everyday observations",
      description: "Keep short entries of sleep, focus patterns, or school transitions before your clinical discussion.",
      status: currentChild.diaryEntries && currentChild.diaryEntries.length > 0 ? "completed" : "pending",
      actionText: "Go to Diary",
      action: () => navigate("/diary"),
    }]),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
      className="pt-16 pb-16"
    >
      <PageContainer>
        <div className="space-y-10">
          <PageHeader
            kicker="Diagnostic Assessment"
            title={`${currentChild.name}'s assessment.`}
            className="mb-12"
            description={
              <SectionDescription>
                Manage preparation, tracking, and clinical details for {currentChild.name}'s assessment pathway.
              </SectionDescription>
            }
          />

          {/* TOP PANEL: BOOKING STATUS CARD */}
          <HeroQuoteCard
            kicker="Clinical domains"
            quote="The clinician will assess the domains and give an outcome related to ADHD as likely, unlikely, or more to explore."
            showQuotes={false}
            className="mb-10"
            rightNode={
              <HeroActionCard
                icon={<Stethoscope className="w-[22px] h-[22px] stroke-[1.7]" />}
                title="Clinical outcome"
                subtitle="To be assessed"
              />
            }
          />

          {/* PREPARATION CHECKLIST SECTION */}
          <div className="space-y-4">
            <div>
              <SectionLabel>Preparation Checklist</SectionLabel>
              <SectionTitle>Prepare for {currentChild.name}'s Session</SectionTitle>
              <SectionDescription>
                {isLeo ? "Completing the questionnaire gives Dr. Clark rich context to build the clinical formulation." : "Completing these three steps gives Dr. Clark rich context to build the clinical formulation."}
              </SectionDescription>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {checklistItems.map((item) => (
                <Card key={item.id} className="p-6 border border-black/5 bg-white flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <span className={`text-[0.65rem] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                        item.status === "completed" 
                          ? "bg-[var(--color-thread-light-green)] text-[var(--color-thread-mid-green)]" 
                          : "bg-amber-50 text-amber-700 border border-amber-200/50"
                      }`}>
                        {item.status === "completed" ? "Done" : "Pending"}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-medium text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={item.action}
                      className="text-xs font-semibold text-[var(--color-thread-mid-green)] hover:text-[var(--color-thread-dark-slate)] transition-colors flex items-center gap-1 group/btn cursor-pointer"
                    >
                      <span>{item.actionText}</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* AREAS OF FOCUS */}
          <div className="space-y-4 pt-4">
            <div>
              <SectionLabel>Areas of focus</SectionLabel>
              <SectionTitle>Assessment domains</SectionTitle>
              <SectionDescription>
                The primary areas we will explore during the clinical consultation.
              </SectionDescription>
            </div>

            <div className="border-y border-black/10 mt-8">
              <AreaItem title="Executive function" description="Planning, organizing, and working memory." status="To be assessed" />
              <AreaItem title="Emotional regulation" description="Managing and responding to emotional experiences." status="To be assessed" />
              <AreaItem title="Sensory processing" description="Responding to and organizing sensory information." status="To be assessed" />
              <AreaItem title="Social participation" description="Engaging and interacting with peers and others." status="To be assessed" />
              <AreaItem title="Communication" description="Expressing needs and understanding others." status="To be assessed" />
              <AreaItem title="Sleep" description="Patterns of rest and bedtime routines." status="To be assessed" />
              <AreaItem title="School participation" description="Engagement and ability to access learning environments." status="To be assessed" />
              <AreaItem title="Physical wellbeing" description="General motor skills and physical health." status="To be assessed" />
            </div>
          </div>
        </div>
      </PageContainer>
    </motion.div>
  );
}
