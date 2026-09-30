type Platform =
  | "PlayStation 2"
  | "X"
  | "GameCube"
  | "PC"
  | "Game Boy Advance"
  | "PlayStation 3"
  | "Xbox 360"
  | "Nintendo DS"
  | "Wii"
  | "PlayStation 4"
  | "Xbox One"
  | "Nintendo Switch"
  | "PlayStation 5"
  | "Xbox Series X"
  | "iOS / Android"
  | "PlayStation Portable";

export type { Platform };

export interface Game {
  id: number;
  title: string;
  year: number;
  platform: Platform;
  genre: string;
  description: string;
  howToPlay: string;
  players: string;
  cover: string;
}

export const PLATFORM_COLORS: Record<Platform, string> = {
  "PlayStation 2": "#0070d1",
  Xbox: "#52b043",
  GameCube: "#6a0dad",
  PC: "#cccccc",
  "Game Boy Advance": "#8b00ff",
  "PlayStation Portable": "#003087",
  "Nintendo DS": "#e4000f",
  "PlayStation 3": "#003791",
  "Xbox 360": "#52b043",
  Wii: "#c0c0c0",
  "PlayStation 4": "#003791",
  "Xbox One": "#107c10",
  "Nintendo Switch": "#e4000f",
  "PlayStation 5": "#003791",
  "Xbox Series X": "#107c10",
  "iOS / Android": "#ff9500",
};

interface GameDetailPageProps {
  game: Game;
  onBack?: () => void;
}

export default function GameDetailPage({
  game,
  onBack,
}: GameDetailPageProps) {
  const color = PLATFORM_COLORS[game.platform];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 border border-[#1e1e3a] bg-[#0f0f1a] px-4 py-2 text-sm text-[#00ff41] hover:border-[#00ff41] transition-colors"
          >
            ← Retour à la collection
          </button>
        )}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden border border-[#1e1e3a] bg-[#0f0f1a]">
            <img
              src={game.cover}
              alt={game.title}
              className="h-80 w-full object-cover"
            />
          </div>

          <div className="border border-[#1e1e3a] bg-[#0f0f1a] p-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#00ff41] text-[#0a0a0f]">
                {game.year}
              </span>
              <span
                className="inline-block border px-2 py-1 text-xs"
                style={{ borderColor: color, color }}
              >
                {game.platform}
              </span>
            </div>

            <h1 className="text-3xl font-bold text-white mb-3">{game.title}</h1>
            <p className="text-[#00ff41] text-sm uppercase tracking-[0.2em] mb-6">
              {game.genre}
            </p>

            <div className="space-y-4 text-[#d1d1d1]">
              <div>
                <p className="text-xs uppercase text-[#888899] mb-1">Joueurs</p>
                <p>{game.players}</p>
              </div>

              <div>
                <p className="text-xs uppercase text-[#888899] mb-1">Description</p>
                <p className="leading-relaxed">{game.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <section className="border border-[#1e1e3a] bg-[#0f0f1a] p-6">
            <h2 className="text-xl font-bold text-[#00ff41] mb-4">Comment jouer</h2>
            <p className="leading-relaxed text-[#d1d1d1]">{game.howToPlay}</p>
          </section>

          <section className="border border-[#1e1e3a] bg-[#0f0f1a] p-6">
            <h2 className="text-xl font-bold text-[#00ff41] mb-4">Fiche technique</h2>
            <div className="space-y-3 text-[#d1d1d1]">
              <div className="flex justify-between border-b border-[#1e1e3a] pb-2">
                <span className="text-[#888899]">Titre</span>
                <span>{game.title}</span>
              </div>
              <div className="flex justify-between border-b border-[#1e1e3a] pb-2">
                <span className="text-[#888899]">Année</span>
                <span>{game.year}</span>
              </div>
              <div className="flex justify-between border-b border-[#1e1e3a] pb-2">
                <span className="text-[#888899]">Plateforme</span>
                <span>{game.platform}</span>
              </div>
              <div className="flex justify-between border-b border-[#1e1e3a] pb-2">
                <span className="text-[#888899]">Genre</span>
                <span>{game.genre}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#888899]">Joueurs</span>
                <span>{game.players}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
