"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { StartMenu } from "@/components/game/StartMenu";
import { RulesScreen } from "@/components/game/RulesScreen";
import { GameScreen } from "@/components/game/GameScreen";
import { EndScreen } from "@/components/game/EndScreen";
import type { GameMode, AIDifficulty, Player } from "@/types/game";

type Screen = "menu" | "rules" | "playing" | "ended";

const RoddysGameClient = () => {
  const [screen, setScreen] = useState<Screen>("menu");
  const [gameMode, setGameMode] = useState<GameMode>("vs-ai");
  const [difficulty, setDifficulty] = useState<AIDifficulty>("easy");
  const [winner, setWinner] = useState<Player | "tie">("red");
  const [previousScreen, setPreviousScreen] = useState<Screen>("menu");
  const [isTabExpanded, setIsTabExpanded] = useState(false);

  // Mobile: expand the collapsed tab
  const handleExpandTab = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTabExpanded(true);
  };

  // Mobile: collapse the expanded tab
  const handleCollapseTab = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsTabExpanded(false);
  };

  const handleStartGame = (mode: GameMode, diff: AIDifficulty) => {
    setGameMode(mode);
    setDifficulty(diff);
    setScreen("playing");
  };

  const handleShowRules = () => {
    setPreviousScreen(screen);
    setScreen("rules");
  };

  const handleCloseRules = () => {
    setScreen(previousScreen);
  };

  const handleGameEnd = (gameWinner: Player | "tie") => {
    setWinner(gameWinner);
    setScreen("ended");
  };

  const handlePlayAgain = () => {
    setScreen("playing");
  };

  const handleMainMenu = () => {
    setScreen("menu");
  };

  return (
    <div
      className="game-context min-h-screen bg-background relative"
      style={{
        backgroundImage: `url("/assets/space-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="fixed inset-0 bg-background/70 pointer-events-none" />

      {/* Back Button - sliding hover tab */}
      {/* Desktop: hover to expand, click anywhere to navigate */}
      {/* Mobile: tap arrow to expand/collapse, tap text to navigate */}
      <div className={`back-tab ${isTabExpanded ? 'expanded' : ''}`}>
        <div className="tab-content">
          {/* Mobile collapsed: right arrow to expand */}
          <button
            className="tab-expand-btn mobile-only"
            onClick={handleExpandTab}
            aria-label="Expand menu"
          >
            <ArrowRight className="w-4 h-4 text-primary" />
          </button>

          {/* Desktop: left arrow (always visible) */}
          <ArrowLeft className="w-4 h-4 text-primary desktop-only tab-arrow" />

          {/* Navigation link */}
          <Link
            href="/#games"
            className="tab-nav-link text-primary text-sm font-body"
          >
            Back to Portfolio
          </Link>

          {/* Mobile expanded: left arrow to collapse */}
          <button
            className="tab-collapse-btn mobile-only"
            onClick={handleCollapseTab}
            aria-label="Collapse menu"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>

      {/* Game Screens */}
      {screen === "menu" && (
        <StartMenu onStartGame={handleStartGame} onShowRules={handleShowRules} />
      )}

      {screen === "rules" && <RulesScreen onClose={handleCloseRules} />}

      {screen === "playing" && (
        <GameScreen
          mode={gameMode}
          difficulty={difficulty}
          onMainMenu={handleMainMenu}
          onShowRules={handleShowRules}
          onGameEnd={handleGameEnd}
        />
      )}

      {screen === "ended" && (
        <EndScreen
          winner={winner}
          onPlayAgain={handlePlayAgain}
          onMainMenu={handleMainMenu}
        />
      )}
    </div>
  );
};

export default RoddysGameClient;
