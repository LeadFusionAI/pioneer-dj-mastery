export type Lesson = {
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  summary: string;
  highlights: string[];
};

export const featureLessons: Lesson[] = [
  {
    title: "3/4 Echo Lift",
    level: "Advanced",
    summary: "Shape the energy with bar-aware echo movement and a controlled re-entry into the mix.",
    highlights: ["Volume pull-down", "Echo send shaping", "Bar count discipline"],
  },
  {
    title: "75% Echo Blend",
    level: "Intermediate",
    summary: "Use the FX return to create air without losing the groove or musical clarity.",
    highlights: ["FX depth control", "Return level timing", "Mix preservation"],
  },
  {
    title: "Two-loop reset",
    level: "Advanced",
    summary: "A loop-driven recovery move that turns tension into control before reintroducing fullness.",
    highlights: ["Loop timing", "Drop and recover", "Phrase control"],
  },
  {
    title: "Mixer ride control",
    level: "Intermediate",
    summary: "Learn how the V10 mixer gives you more than volume — it gives you emotional shape.",
    highlights: ["Filter movement", "EQ sculpting", "Crossfader contour"],
  },
];

export const lessonLibrary: Lesson[] = [
  ...featureLessons,
  {
    title: "Cue stack confidence",
    level: "Beginner",
    summary: "Build a reliable cue system so transitions feel planned and confident under pressure.",
    highlights: ["Hot cues", "Memory points", "Quick re-entry"],
  },
  {
    title: "Loop-driven energy resets",
    level: "Advanced",
    summary: "Break loops into intentional musical moments instead of random technical flourishes.",
    highlights: ["Bar timing", "Phrase reading", "Energy control"],
  },
];
