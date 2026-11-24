import type { LucideIcon } from "lucide-react";
import {
  UserPlus, Heart, Users, MessageCircle, Zap, Scale, Target, Clock,
} from "lucide-react";

export type SegmentId = "connect" | "express" | "understand";
export const SEGMENT_ORDER: SegmentId[] = ["connect", "express", "understand"];

export type Answer = { label: string; icon: LucideIcon };
export type Question = { title: string; answers: [Answer, Answer, Answer]; photo?: string; key?: string };

// Texts are taken 1:1 from the Figma frames (Mobile 390 / Desktop 1440).
export const QUESTIONS: Question[] = [
  {
    title: "Which communication skills would you like to improve first?",
    answers: [
      { label: "Meet people and make connections more confidently", icon: UserPlus },
      { label: "Talk openly about my feelings and needs", icon: Heart },
      { label: "Better understand my partner and build close relationships", icon: Users },
    ],
  },
  {
    title: "What makes communication hardest for you?",
    photo: "/img/friends.jpg",
    answers: [
      { label: "I don't know how to start or keep a conversation going", icon: MessageCircle },
      { label: "I'm afraid of being misunderstood or rejected", icon: Zap },
      { label: "I don't always understand my partner's feelings and needs", icon: Users },
    ],
  },
  {
    title: "In which situations do you struggle most?",
    answers: [
      { label: "Meeting new people", icon: UserPlus },
      { label: "Talking about what's bothering me", icon: MessageCircle },
      { label: "Discussing disagreements with someone close", icon: Scale },
    ],
  },
  {
    title: "What result would you like to achieve?",
    photo: "/img/man.jpg",
    answers: [
      { label: "Feel more confident when meeting people", icon: Zap },
      { label: "Express my thoughts and needs more freely", icon: Target },
      { label: "Build deeper, more trusting relationships", icon: Heart },
    ],
  },
  {
    key: "main_barrier",
    title: "What is your biggest barrier to better communication?",
    answers: [
      { label: "I don't feel confident enough.", icon: UserPlus },
      { label: "I struggle to understand my feelings and needs.", icon: Heart },
      { label: "I find it hard to stay calm during difficult conversations.", icon: Zap },
    ],
  },
  {
    key: "daily_duration",
    title: "How much time can you dedicate to practice each day?",
    answers: [
      { label: "5 minutes", icon: Clock },
      { label: "10 minutes", icon: Clock },
      { label: "15 minutes", icon: Clock },
    ],
  },
];

export type Answers = (number | null)[];

/** Q1–Q4: A→Connect, B→Express, C→Understand. Tie → the segment chosen in Q1 wins. Q5/Q6 ignored. */
export function getSegment(answers: Answers): SegmentId {
  const scores = [0, 0, 0];
  answers.slice(0, 4).forEach((a) => { if (a !== null && a !== undefined) scores[a]++; });
  const max = Math.max(...scores);
  const tied = scores.map((s, i) => (s === max ? i : -1)).filter((i) => i >= 0);
  const q1 = answers[0];
  const winner = tied.length > 1 && q1 !== null && tied.includes(q1) ? q1 : tied[0];
  return SEGMENT_ORDER[winner];
}

const BARRIER_FOCUS = [
  "building self-confidence",
  "understanding your feelings and needs",
  "staying calm in difficult conversations",
];
const DURATION = [5, 10, 15];

export function getPlan(answers: Answers) {
  const minutes = DURATION[answers[5] ?? 1];
  const focus = BARRIER_FOCUS[answers[4] ?? 1];
  return { minutes, text: `${minutes} minutes a day, with a focus on ${focus}.` };
}

export type PracticeOption = { text: string; tip: string; best?: boolean };
export type PracticeStep = { prompt: string; options: PracticeOption[] };

export type Segment = {
  name: string;
  subtitle: string;
  description: string;
  benefits: string[];
  photo: string;
  practiceTitle: string;
  sender: string;
  steps: PracticeStep[];
};

export const SEGMENTS: Record<SegmentId, Segment> = {
  connect: {
    name: "Connect",
    subtitle: "Confident communication",
    description: "We'll help you meet new people, start conversations and build connections.",
    benefits: [
      "Start conversations with new people more easily",
      "Feel less anxious when meeting someone",
      "Keep a conversation flowing naturally",
    ],
    photo: "/img/connect.jpg",
    practiceTitle: "Practice a first introduction with AI",
    sender: "AI coach",
    steps: [
      {
        prompt: "You're at a friend's birthday party and notice someone you'd like to meet. How do you start?",
        options: [
          { text: "Hi! I'm Mark, Olya's friend. How do you two know each other?", tip: "A simple introduction plus an open question is a great way to start.", best: true },
          { text: "Nice party, huh?", tip: "A good icebreaker, but closed questions can end the chat fast. Add an open question." },
          { text: "Wait for them to talk to me first.", tip: "Waiting feels safer, but a small first step is what usually starts a connection." },
        ],
      },
      {
        prompt: "They smile: \"We studied together at university. And you?\" How do you keep it going?",
        options: [
          { text: "Olya and I work together. What did you study?", tip: "Sharing a little about yourself and asking back keeps the dialogue balanced.", best: true },
          { text: "Cool.", tip: "Very short replies leave all the work to the other person. Add something about yourself." },
          { text: "Let me tell you everything about my job…", tip: "Sharing is great — just keep it two-way and leave room for their story." },
        ],
      },
    ],
  },
  express: {
    name: "Express",
    subtitle: "Self-expression",
    description: "We'll help you talk openly about your feelings, needs and personal boundaries.",
    benefits: [
      "Talk about your feelings calmly",
      "Put your needs into clear words",
      "Hold your personal boundaries with confidence",
    ],
    photo: "/img/express.jpg",
    practiceTitle: "Practice talking about your needs",
    sender: "AI coach",
    steps: [
      {
        prompt: "Imagine a friend is late to meet you again. How would you tell them it upsets you?",
        options: [
          { text: "It matters to me that we stick to the time we agree on. When I wait, I get upset.", tip: "Great job speaking from your own perspective and naming your need.", best: true },
          { text: "You're always late. You don't care about my time.", tip: "\"Always\" and blame make people defensive. Try describing how you feel instead." },
          { text: "It's fine, no worries.", tip: "Hiding your feelings keeps the peace for now, but the frustration builds up." },
        ],
      },
      {
        prompt: "Your friend says: \"Sorry, work was crazy today.\" What do you say next?",
        options: [
          { text: "I get it. Next time, could you text me if you're running late?", tip: "A clear, specific request makes it easy for others to meet your needs.", best: true },
          { text: "Whatever.", tip: "Shutting down ends the conversation. Try naming what would help you." },
          { text: "Work is always crazy for you.", tip: "Sarcasm can hurt. A calm, specific request works better." },
        ],
      },
    ],
  },
  understand: {
    name: "Understand",
    subtitle: "Mutual understanding",
    description: "We'll help you truly hear your partner, understand their feelings and discuss difficult topics.",
    benefits: [
      "Listen to your partner more attentively",
      "Better understand their feelings",
      "Discuss disagreements more calmly",
    ],
    photo: "/img/understand.jpg",
    practiceTitle: "Practice active listening",
    sender: "AI as your partner",
    steps: [
      {
        prompt: "I've been so tired at work lately. I have no energy for anything.",
        options: [
          { text: "It sounds like things are really hard right now. What drains you the most?", tip: "You named the feeling and asked an open question — the core of active listening.", best: true },
          { text: "You should just quit that job.", tip: "Quick advice can feel dismissive. Try to understand first." },
          { text: "I'm tired too, honestly.", tip: "It's natural to share, but it moves the focus away from your partner." },
        ],
      },
      {
        prompt: "Mostly the constant deadlines. I feel like I can't keep up.",
        options: [
          { text: "That sounds really stressful. How can I support you?", tip: "Reflecting feelings and offering support shows you're really listening.", best: true },
          { text: "Everyone has deadlines.", tip: "Comparing can leave your partner feeling unheard." },
          { text: "Let's not talk about work tonight.", tip: "Boundaries are okay — but first acknowledge how they feel." },
        ],
      },
    ],
  },
};
