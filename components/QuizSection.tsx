'use client';

import { useState } from 'react';

type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

type QuizSectionProps = {
  tribeName: string;
  questions: QuizQuestion[];
};

export function QuizSection({ tribeName, questions }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return;
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    
    setShowExplanation(true);
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-sand to-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[32px] shadow-2xl p-8 md:p-12 text-center border border-light-beige">
            <div className="mb-8">
              <span className="text-6xl md:text-8xl">
                {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '📚'}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-deep-loam mb-4">
              Quiz Complete!
            </h2>
            <p className="text-xl text-warm-brown mb-8">
              You scored <span className="text-ochre font-bold">{score}</span> out of{' '}
              <span className="font-bold">{questions.length}</span> ({percentage}%)
            </p>
            <div className="mb-8">
              {percentage >= 80 && (
                <p className="text-lg text-deep-loam">
                  Excellent! You have great knowledge of {tribeName} culture! 🌟
                </p>
              )}
              {percentage >= 60 && percentage < 80 && (
                <p className="text-lg text-deep-loam">
                  Well done! You're learning about {tribeName} heritage! 👏
                </p>
              )}
              {percentage < 60 && (
                <p className="text-lg text-deep-loam">
                  Keep exploring to learn more about {tribeName} culture! 📖
                </p>
              )}
            </div>
            <button
              onClick={handleRestart}
              className="px-8 py-4 bg-ochre hover:bg-warm-brown text-white font-heading font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-sand to-cream" id="quiz">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-warm-brown font-heading mb-3">
            Interactive Learning
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-deep-loam mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-lg text-warm-brown">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-light-beige">
          <div className="p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 bg-light-beige rounded-full overflow-hidden">
                <div
                  className="h-full bg-ochre transition-all duration-500"
                  style={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-deep-loam mb-8">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, idx) => {
                const isSelected = selectedAnswer === option;
                const isCorrect = option === question.correctAnswer;
                const showResult = showExplanation;

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={showExplanation}
                    className={`w-full p-6 rounded-2xl text-left font-body transition-all duration-300 ${
                      showResult
                        ? isCorrect
                          ? 'bg-green-100 border-2 border-green-500 text-green-900'
                          : isSelected
                          ? 'bg-red-100 border-2 border-red-500 text-red-900'
                          : 'bg-gray-50 border border-gray-200 text-gray-500'
                        : isSelected
                        ? 'bg-ochre/10 border-2 border-ochre text-deep-loam'
                        : 'bg-sand/50 border border-light-beige text-deep-loam hover:bg-sand hover:border-ochre/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && isCorrect && <span className="text-2xl">✓</span>}
                      {showResult && !isCorrect && isSelected && <span className="text-2xl">✗</span>}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-8 p-6 bg-gradient-to-br from-off-white to-sand rounded-3xl border border-light-beige animate-fade-in-up">
                <h4 className="font-heading font-semibold text-deep-loam mb-2 flex items-center gap-2">
                  <span>💡</span> Explanation
                </h4>
                <p className="text-deep-loam/90">{question.explanation}</p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              {!showExplanation ? (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswer}
                  className="flex-1 py-4 bg-ochre hover:bg-warm-brown disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-heading font-semibold rounded-full transition-all duration-300 disabled:hover:scale-100 hover:scale-105"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 py-4 bg-ochre hover:bg-warm-brown text-white font-heading font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
