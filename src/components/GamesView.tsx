import React, { useState, useEffect } from 'react';
import { GameKey } from '../types';
import {
  WORDLE_SOLUTION,
  CONNECTIONS_GROUPS,
  SPELLING_BEE_DATA,
  MINI_CROSSWORD,
  ConnectionsGroup,
} from '../data/games';

interface GamesViewProps {
  initialGame?: GameKey;
  onBack: () => void;
}

export const GamesView: React.FC<GamesViewProps> = ({ initialGame = 'wordle', onBack }) => {
  const [activeTab, setActiveTab] = useState<GameKey>(initialGame);

  return (
    <div className="max-w-xl mx-auto px-4 py-6 bg-white min-h-screen">
      {/* Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs py-2.5 border-b border-[#e2e2e2] flex items-center justify-between -mx-4 px-4 mb-4">
        <button
          onClick={onBack}
          className="flex items-center space-x-1.5 text-xs font-sans-meta font-bold uppercase tracking-wider text-[#121212] hover:text-[#326891] cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Front Page</span>
        </button>
        <span className="text-[11px] font-sans-meta uppercase font-bold text-[#121212] tracking-wider flex items-center">
          <span className="w-2 h-2 bg-[#121212] inline-block mr-1.5" />
          NYT Games
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-4 gap-1 border-b border-[#e2e2e2] pb-3 mb-6">
        <button
          onClick={() => setActiveTab('wordle')}
          className={`py-2 px-1 text-center border-b-2 text-xs font-sans-meta font-bold transition-all cursor-pointer ${
            activeTab === 'wordle' ? 'border-[#6aaa64] text-[#6aaa64]' : 'border-transparent text-neutral-500 hover:text-black'
          }`}
        >
          Wordle
        </button>
        <button
          onClick={() => setActiveTab('connections')}
          className={`py-2 px-1 text-center border-b-2 text-xs font-sans-meta font-bold transition-all cursor-pointer ${
            activeTab === 'connections' ? 'border-[#bfa8de] text-[#7a54b3]' : 'border-transparent text-neutral-500 hover:text-black'
          }`}
        >
          Connections
        </button>
        <button
          onClick={() => setActiveTab('spelling-bee')}
          className={`py-2 px-1 text-center border-b-2 text-xs font-sans-meta font-bold transition-all cursor-pointer ${
            activeTab === 'spelling-bee' ? 'border-[#f7da21] text-[#9a7d0a]' : 'border-transparent text-neutral-500 hover:text-black'
          }`}
        >
          Spelling Bee
        </button>
        <button
          onClick={() => setActiveTab('mini')}
          className={`py-2 px-1 text-center border-b-2 text-xs font-sans-meta font-bold transition-all cursor-pointer ${
            activeTab === 'mini' ? 'border-[#4e86cf] text-[#4e86cf]' : 'border-transparent text-neutral-500 hover:text-black'
          }`}
        >
          The Mini
        </button>
      </div>

      {/* Render active game */}
      {activeTab === 'wordle' && <WordleGame />}
      {activeTab === 'connections' && <ConnectionsGame />}
      {activeTab === 'spelling-bee' && <SpellingBeeGame />}
      {activeTab === 'mini' && <MiniCrosswordGame />}
    </div>
  );
};

/* --- 1. WORDLE GAME --- */
const WordleGame: React.FC = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [message, setMessage] = useState('');

  const target = WORDLE_SOLUTION; // "TIMES"

  const handleKeyPress = (letter: string) => {
    if (gameStatus !== 'playing') return;
    if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + letter);
    }
  };

  const handleDelete = () => {
    if (gameStatus !== 'playing') return;
    setCurrentGuess((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    if (gameStatus !== 'playing') return;
    if (currentGuess.length !== 5) {
      setMessage('Not enough letters');
      setTimeout(() => setMessage(''), 1500);
      return;
    }

    const nextGuesses = [...guesses, currentGuess.toUpperCase()];
    setGuesses(nextGuesses);
    setCurrentGuess('');

    if (currentGuess.toUpperCase() === target) {
      setGameStatus('won');
      setMessage('Genius! You solved Wordle No. 1,211!');
    } else if (nextGuesses.length >= 6) {
      setGameStatus('lost');
      setMessage(`The word was ${target}`);
    }
  };

  const getLetterStatus = (letter: string, index: number, word: string) => {
    if (word[index] === target[index]) return 'bg-[#6aaa64] text-white border-[#6aaa64]';
    if (target.includes(word[index])) return 'bg-[#c9b458] text-white border-[#c9b458]';
    return 'bg-[#787c7e] text-white border-[#787c7e]';
  };

  const rows = [];
  for (let i = 0; i < 6; i++) {
    if (i < guesses.length) {
      rows.push({ word: guesses[i], submitted: true });
    } else if (i === guesses.length) {
      rows.push({ word: currentGuess.padEnd(5, ' '), submitted: false });
    } else {
      rows.push({ word: '     ', submitted: false });
    }
  }

  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL'],
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="font-sans-meta text-lg font-bold text-[#121212]">Wordle No. 1,211</h2>
        <p className="text-xs text-neutral-500 font-sans-meta">Guess the 5-letter word in 6 tries.</p>
      </div>

      {message && (
        <div className="mb-3 px-3 py-1 bg-black text-white text-xs font-bold rounded-sm animate-bounce">
          {message}
        </div>
      )}

      {/* 5x6 Board */}
      <div className="grid grid-rows-6 gap-1.5 mb-6">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className="grid grid-cols-5 gap-1.5">
            {row.word.split('').map((char, cIdx) => {
              let cellClass = 'border-2 border-[#d3d6da] text-[#121212] bg-white';
              if (row.submitted) {
                cellClass = getLetterStatus(char, cIdx, row.word);
              } else if (char.trim()) {
                cellClass = 'border-2 border-black text-[#121212] bg-white';
              }
              return (
                <div
                  key={cIdx}
                  className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center font-bold text-xl uppercase font-sans-meta select-none ${cellClass}`}
                >
                  {char.trim()}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Keyboard */}
      <div className="w-full max-w-sm space-y-1.5 select-none">
        {keyboardRows.map((kRow, rIdx) => (
          <div key={rIdx} className="flex justify-center gap-1">
            {kRow.map((key) => {
              const isSpecial = key === 'ENTER' || key === 'DEL';
              return (
                <button
                  key={key}
                  onClick={() => {
                    if (key === 'ENTER') handleEnter();
                    else if (key === 'DEL') handleDelete();
                    else handleKeyPress(key);
                  }}
                  className={`py-3 rounded text-xs font-bold font-sans-meta cursor-pointer transition-colors ${
                    isSpecial ? 'px-2.5 bg-neutral-200 hover:bg-neutral-300 text-neutral-800' : 'w-8 bg-neutral-200 hover:bg-neutral-300 text-[#121212]'
                  }`}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {gameStatus !== 'playing' && (
        <button
          onClick={() => {
            setGuesses([]);
            setCurrentGuess('');
            setGameStatus('playing');
            setMessage('');
          }}
          className="mt-4 px-4 py-2 bg-[#121212] text-white text-xs font-sans-meta font-bold hover:bg-neutral-800 cursor-pointer"
        >
          Play Again
        </button>
      )}
    </div>
  );
};

/* --- 2. CONNECTIONS GAME --- */
const ConnectionsGame: React.FC = () => {
  const initialGroups = CONNECTIONS_GROUPS;
  const [solvedGroups, setSolvedGroups] = useState<ConnectionsGroup[]>([]);
  const [unsolvedWords, setUnsolvedWords] = useState<string[]>(() =>
    initialGroups.flatMap((g) => g.words).sort(() => Math.random() - 0.5)
  );
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [mistakesRemaining, setMistakesRemaining] = useState(4);
  const [message, setMessage] = useState('');

  const toggleSelectWord = (word: string) => {
    if (selectedWords.includes(word)) {
      setSelectedWords(selectedWords.filter((w) => w !== word));
    } else if (selectedWords.length < 4) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleShuffle = () => {
    setUnsolvedWords([...unsolvedWords].sort(() => Math.random() - 0.5));
  };

  const handleSubmit = () => {
    if (selectedWords.length !== 4) return;

    // Check if matches any group
    const match = initialGroups.find((g) => {
      return g.words.every((w) => selectedWords.includes(w));
    });

    if (match) {
      setSolvedGroups([...solvedGroups, match]);
      setUnsolvedWords(unsolvedWords.filter((w) => !selectedWords.includes(w)));
      setSelectedWords([]);
      setMessage(`Solved: ${match.category}!`);
      setTimeout(() => setMessage(''), 2000);
    } else {
      setMistakesRemaining((prev) => {
        const next = prev - 1;
        if (next <= 0) {
          setMessage('No mistakes left! Showing solution...');
          setSolvedGroups(initialGroups);
          setUnsolvedWords([]);
        } else {
          setMessage('Incorrect group. Try again!');
          setTimeout(() => setMessage(''), 1500);
        }
        return Math.max(0, next);
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="font-sans-meta text-lg font-bold text-[#121212]">Connections</h2>
        <p className="text-xs text-neutral-500 font-sans-meta">
          Create four groups of four!
        </p>
      </div>

      {message && (
        <div className="mb-3 px-3 py-1 bg-black text-white text-xs font-bold rounded-sm animate-pulse">
          {message}
        </div>
      )}

      {/* Solved categories */}
      <div className="w-full space-y-2 mb-3">
        {solvedGroups.map((group) => (
          <div
            key={group.category}
            className="p-3 text-center rounded-md font-sans-meta text-black"
            style={{ backgroundColor: group.color }}
          >
            <div className="font-bold text-xs uppercase tracking-wider">{group.category}</div>
            <div className="text-xs mt-0.5">{group.words.join(', ')}</div>
          </div>
        ))}
      </div>

      {/* Unsolved 4x4 Grid */}
      {unsolvedWords.length > 0 && (
        <div className="grid grid-cols-4 gap-2 w-full mb-4">
          {unsolvedWords.map((word) => {
            const isSelected = selectedWords.includes(word);
            return (
              <button
                key={word}
                onClick={() => toggleSelectWord(word)}
                className={`h-16 flex items-center justify-center p-1 font-bold text-xs font-sans-meta text-center rounded-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5a595e] text-white'
                    : 'bg-[#efefe6] text-black hover:bg-[#e0e0d5]'
                }`}
              >
                {word}
              </button>
            );
          })}
        </div>
      )}

      {/* Mistakes counter */}
      <div className="flex items-center space-x-1.5 text-xs font-sans-meta mb-4">
        <span className="text-neutral-600">Mistakes remaining:</span>
        {Array.from({ length: mistakesRemaining }).map((_, i) => (
          <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#5a595e] inline-block" />
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={handleShuffle}
          className="px-4 py-2 border border-neutral-400 text-xs font-sans-meta font-bold rounded-full hover:bg-neutral-100 cursor-pointer"
        >
          Shuffle
        </button>
        <button
          onClick={() => setSelectedWords([])}
          disabled={selectedWords.length === 0}
          className="px-4 py-2 border border-neutral-400 text-xs font-sans-meta font-bold rounded-full hover:bg-neutral-100 cursor-pointer disabled:opacity-40"
        >
          Deselect All
        </button>
        <button
          onClick={handleSubmit}
          disabled={selectedWords.length !== 4}
          className="px-5 py-2 bg-black text-white text-xs font-sans-meta font-bold rounded-full hover:bg-neutral-800 cursor-pointer disabled:opacity-40"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

/* --- 3. SPELLING BEE GAME --- */
const SpellingBeeGame: React.FC = () => {
  const data = SPELLING_BEE_DATA;
  const [currentWord, setCurrentWord] = useState('');
  const [foundWords, setFoundWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const letters = [data.centerLetter, ...data.outerLetters];

  const handleLetterClick = (char: string) => {
    setCurrentWord((prev) => prev + char);
  };

  const handleDelete = () => {
    setCurrentWord((prev) => prev.slice(0, -1));
  };

  const handleEnter = () => {
    const word = currentWord.toUpperCase();
    if (word.length < 4) {
      setFeedback('Too short (4+ letters)');
      setTimeout(() => setFeedback(''), 1500);
      return;
    }
    if (!word.includes(data.centerLetter)) {
      setFeedback(`Must include center letter ${data.centerLetter}`);
      setTimeout(() => setFeedback(''), 1500);
      return;
    }
    if (foundWords.includes(word)) {
      setFeedback('Already found!');
      setTimeout(() => setFeedback(''), 1500);
      return;
    }
    if (data.validWords.includes(word)) {
      const isPangram = data.pangrams.includes(word);
      const points = isPangram ? word.length + 7 : word.length === 4 ? 1 : word.length;
      setFoundWords([...foundWords, word]);
      setScore((s) => s + points);
      setFeedback(isPangram ? `Pangram! +${points}` : `Nice! +${points}`);
      setCurrentWord('');
      setTimeout(() => setFeedback(''), 1500);
    } else {
      setFeedback('Not in word list');
      setTimeout(() => setFeedback(''), 1500);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-3">
        <h2 className="font-sans-meta text-lg font-bold text-[#121212]">Spelling Bee</h2>
        <div className="flex items-center justify-center space-x-2 text-xs font-sans-meta mt-1">
          <span className="font-bold text-[#121212]">Score: {score}</span>
          <span className="text-neutral-400">·</span>
          <span className="text-amber-700 font-semibold">Rank: {score > 25 ? 'Genius' : score > 12 ? 'Solid' : 'Beginner'}</span>
        </div>
      </div>

      {/* Input Display */}
      <div className="h-10 flex items-center justify-center mb-3">
        <span className="text-2xl font-bold font-sans-meta tracking-widest text-[#121212]">
          {currentWord || <span className="text-neutral-300 font-normal">Type or click letters</span>}
        </span>
      </div>

      {feedback && (
        <div className="mb-3 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold rounded-sm">
          {feedback}
        </div>
      )}

      {/* Honeycomb cluster */}
      <div className="relative w-56 h-56 flex items-center justify-center mb-4">
        {/* Center button */}
        <button
          onClick={() => handleLetterClick(data.centerLetter)}
          className="absolute z-10 w-16 h-16 rounded-full bg-[#f7da21] font-sans-meta font-bold text-2xl text-black hover:scale-105 transition-transform flex items-center justify-center shadow-sm cursor-pointer"
        >
          {data.centerLetter}
        </button>

        {/* Outer 6 buttons in circle */}
        {data.outerLetters.map((letter, idx) => {
          const angle = (idx * 60 * Math.PI) / 180;
          const radius = 70;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className="absolute w-14 h-14 rounded-full bg-neutral-200 font-sans-meta font-bold text-xl text-[#121212] hover:bg-neutral-300 hover:scale-105 transition-transform flex items-center justify-center cursor-pointer shadow-xs"
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={handleDelete}
          className="px-4 py-2 border border-neutral-300 text-xs font-sans-meta font-semibold rounded-full hover:bg-neutral-100 cursor-pointer"
        >
          Delete
        </button>
        <button
          onClick={handleEnter}
          className="px-6 py-2 bg-black text-white text-xs font-sans-meta font-bold rounded-full hover:bg-neutral-800 cursor-pointer"
        >
          Enter
        </button>
      </div>

      {/* Found words */}
      {foundWords.length > 0 && (
        <div className="w-full p-3 bg-neutral-50 border border-[#e2e2e2] text-xs font-sans-meta">
          <span className="font-bold text-[#121212] block mb-1">
            Words Found ({foundWords.length}):
          </span>
          <div className="flex flex-wrap gap-2 text-neutral-700">
            {foundWords.map((w) => (
              <span key={w} className="px-2 py-0.5 bg-white border border-neutral-200">
                {w}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* --- 4. THE MINI CROSSWORD GAME --- */
const MiniCrosswordGame: React.FC = () => {
  const puzzle = MINI_CROSSWORD;
  const [grid, setGrid] = useState<string[][]>(() =>
    Array(5).fill('').map(() => Array(5).fill(''))
  );
  const [selectedCell, setSelectedCell] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const [checkStatus, setCheckStatus] = useState<string>('');
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTimer((prev) => prev + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const handleCellInput = (r: number, c: number, char: string) => {
    const updated = grid.map((row, ri) =>
      row.map((val, ci) => (ri === r && ci === c ? char.toUpperCase() : val))
    );
    setGrid(updated);

    // Auto advance right
    if (char && c < 4) {
      setSelectedCell({ r, c: c + 1 });
    }
  };

  const handleCheck = () => {
    let allCorrect = true;
    for (let r = 0; r < 5; r++) {
      for (let c = 0; c < 5; c++) {
        if (grid[r][c] !== puzzle.solution[r][c]) {
          allCorrect = false;
        }
      }
    }
    if (allCorrect) {
      setCheckStatus('Solved! Congratulations on finishing The Mini!');
    } else {
      setCheckStatus('Some letters are incorrect or incomplete. Keep trying!');
      setTimeout(() => setCheckStatus(''), 2500);
    }
  };

  const handleReveal = () => {
    setGrid(puzzle.solution);
    setCheckStatus('Puzzle revealed!');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-4">
        <h2 className="font-sans-meta text-lg font-bold text-[#121212]">The Mini Crossword</h2>
        <div className="text-xs font-sans-meta font-mono text-neutral-500 mt-1">
          Timer: {formatTime(timer)}
        </div>
      </div>

      {checkStatus && (
        <div className="mb-3 px-3 py-1 bg-neutral-900 text-white text-xs font-bold rounded-sm">
          {checkStatus}
        </div>
      )}

      {/* 5x5 Crossword Grid */}
      <div className="grid grid-rows-5 gap-0.5 bg-black p-0.5 border-2 border-black mb-5">
        {grid.map((row, r) => (
          <div key={r} className="grid grid-cols-5 gap-0.5">
            {row.map((val, c) => {
              const isSelected = selectedCell.r === r && selectedCell.c === c;
              return (
                <div
                  key={c}
                  onClick={() => setSelectedCell({ r, c })}
                  className={`w-11 h-11 sm:w-12 sm:h-12 bg-white relative flex items-center justify-center cursor-pointer font-bold text-lg font-sans-meta ${
                    isSelected ? 'bg-amber-100 ring-2 ring-blue-500 z-10' : ''
                  }`}
                >
                  <input
                    type="text"
                    maxLength={1}
                    value={val}
                    onChange={(e) => handleCellInput(r, c, e.target.value)}
                    className="w-full h-full text-center bg-transparent focus:outline-none uppercase font-bold"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Clues */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans-meta mb-5 border-t border-[#e2e2e2] pt-4">
        <div>
          <h4 className="font-bold text-[#121212] uppercase mb-2">Across</h4>
          <ul className="space-y-1.5 text-neutral-700">
            {puzzle.acrossClues.map((clue) => (
              <li key={clue.number}>
                <span className="font-bold text-black">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#121212] uppercase mb-2">Down</h4>
          <ul className="space-y-1.5 text-neutral-700">
            {puzzle.downClues.map((clue) => (
              <li key={clue.number}>
                <span className="font-bold text-black">{clue.number}.</span> {clue.clue}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={handleCheck}
          className="px-4 py-1.5 bg-[#121212] text-white text-xs font-sans-meta font-bold cursor-pointer hover:bg-neutral-800"
        >
          Check Puzzle
        </button>
        <button
          onClick={handleReveal}
          className="px-4 py-1.5 border border-neutral-400 text-xs font-sans-meta font-bold cursor-pointer hover:bg-neutral-100"
        >
          Reveal
        </button>
      </div>
    </div>
  );
};
