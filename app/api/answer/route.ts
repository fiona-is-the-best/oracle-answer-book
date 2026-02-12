import { NextResponse } from 'next/server';

// Collection of cryptic, wise, and ambiguous oracle answers
const oracleAnswers = [
  "The path reveals itself to those who walk it",
  "What you seek is seeking you",
  "The answer lies in the question itself",
  "Sometimes the door is a mirror",
  "The river knows the way, though it has never been there before",
  "In stillness, clarity emerges",
  "The mountain does not hurry, yet the summit is reached",
  "What is hidden will surface when the tide is right",
  "The seed knows not the flower it will become",
  "Listen to the silence between the words",
  "The compass points within",
  "Time is the teacher of patience",
  "The bridge appears when you step forward",
  "What seems like an end may be a beginning",
  "The owl sees what the daylight hides",
  "Trust the unfolding",
  "The answer you resist holds the key",
  "When you change your lens, the world transforms",
  "The labyrinth has only one path, yet many turns",
  "What you release makes room for what is coming",
  "The treasure is buried where you stand",
  "Fear and intuition speak in the same voice; learn to distinguish them",
  "The question has already changed you",
  "Clarity comes not from the stars but from seeing clearly",
  "The storm passes, the oak remains",
  "What you protect, you preserve; what you share, multiplies",
  "The garden grows in its own time",
  "Your next step is enough",
  "The knot loosens when you stop pulling",
  "The wound is where the light enters",
  "The shadow reveals the source of light",
  "Between yes and no lies infinite possibility",
  "The coin has more than two sides when spinning",
  "What seems complex seeks simplicity",
  "The truth wears many masks but keeps one face",
  "The book already knows its ending",
  "You cannot step in the same river twice",
  "The butterfly does not remember being a caterpillar",
  "The stars you see have already moved",
  "The loudest wisdom speaks without words",
  "What you grasp too tightly slips away",
  "The cave you fear to enter holds the treasure you seek",
  "Not all who wander are lost",
  "The pendulum must swing before finding center",
  "What is meant for you will not pass you by",
  "The roots grow deepest in rocky soil",
  "Patience is not waiting, but how you wait",
  "The archer hits the target by missing many times first",
  "Your doubt is the doorway",
  "The pearl begins as an irritation",
];

export async function GET() {
  // Randomly select an answer
  const randomIndex = Math.floor(Math.random() * oracleAnswers.length);
  const answer = oracleAnswers[randomIndex];

  return NextResponse.json({ answer });
}
