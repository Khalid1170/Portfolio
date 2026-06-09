import { useEffect, useState } from "react";
import { Github, GitCommit, Star, GitFork, ArrowRight, Activity } from "lucide-react";

const USERNAME = "Khalid1170";

// Generate a full year of contribution data from GitHub's SVG calendar
function parseContributions(svg) {
  const rects = [...svg.matchAll(/<rect[^>]*data-count="(\d+)"[^>]*data-date="([^"]+)"[^>]*/g)];
  return rects.map(([, count, date]) => ({ count: parseInt(count), date }));
}

function ContributionGraph({ weeks }) {
  if (!weeks.length) return null;

  const max = Math.max(...weeks.map(d => d.count), 1);

  const getColor = (count) => {
    if (count === 0) return "bg-secondary/60 border border-border/30";
    const intensity = count / max;
    if (intensity < 0.25) return "bg-primary/20";
    if (intensity < 0.5)  return "bg-primary/40";
    if (intensity < 0.75) return "bg-primary/70";
    return "bg-primary";
  };

  // Group into columns of 7 (weeks)
  const columns = [];
  for (let i = 0; i < weeks.length; i += 7) {
    columns.push(weeks.slice(i, i + 7));
  }

  // Month labels: find first day of each month
  const monthLabels = [];
  columns.forEach((col, ci) => {
    col.forEach((day) => {
      if (day.date && day.date.slice(8, 10) === "01") {
        const month = new Date(day.date).toLocaleString("default", { month: "short" });
        if (!monthLabels.find(m => m.label === month)) {
          monthLabels.push({ label: month, col: ci });
        }
      }
    });
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[600px]">
        {/* Month labels */}
        <div className="flex mb-1 pl-0" style={{ gap: "3px" }}>
          {columns.map((_, ci) => {
            const found = monthLabels.find(m => m.col === ci);
            return (
              <div key={ci} className="flex-shrink-0 text-[10px] text-muted-foreground/60" style={{ width: "12px" }}>
                {found ? found.label : ""}
              </div>
            );
          })}
        </div>

        {/* Grid */}
        <div className="flex" style={{ gap: "3px" }}>
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col" style={{ gap: "3px" }}>
              {col.map((day, di) => (
                <div
                  key={di}
                  title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""}`}
                  className={`rounded-[2px] flex-shrink-0 cursor-default transition-opacity hover:opacity-70 ${getColor(day.count)}`}
                  style={{ width: "12px", height: "12px" }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-1.5 mt-3 justify-end">
          <span className="text-[10px] text-muted-foreground/50">Less</span>
          {["bg-secondary/60 border border-border/30", "bg-primary/20", "bg-primary/40", "bg-primary/70", "bg-primary"].map((c, i) => (
            <div key={i} className={`rounded-[2px] ${c}`} style={{ width: "12px", height: "12px" }} />
          ))}
          <span className="text-[10px] text-muted-foreground/50">More</span>
        </div>
      </div>
    </div>
  );
}

export const GithubSection = () => {
  const [contributions, setContributions] = useState([]);
  const [totalContributions, setTotalContributions] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        // Fetch contribution graph via a CORS proxy of GitHub's SVG
        const [calRes, repoRes] = await Promise.all([
          fetch(`https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6&type=owner`),
        ]);

        if (calRes.ok) {
          const calData = await calRes.json();
          const flat = calData.contributions.flatMap(week =>
            week.days ?? Object.values(week).filter(d => d && d.date)
          );
          // Normalize format
          const normalized = calData.contributions.map(entry => ({
            date: entry.date,
            count: entry.count ?? 0,
          }));
          setContributions(normalized);
          setTotalContributions(calData.total?.lastYear ?? calData.total ?? null);
        }

        if (repoRes.ok) {
          const repoData = await repoRes.json();
          setRepos(repoData.filter(r => !r.fork).slice(0, 4));
        }
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, []);

  const languageColors = {
    JavaScript: "#f7df1e",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    default: "#a78bfa",
  };

  return (
    <section
      id="github"
      className="py-28 px-4 relative overflow-hidden bg-gradient-to-b from-background to-secondary/10"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Open{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Source
            </span>
          </h2>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground text-sm mt-4 max-w-sm mx-auto">
            A snapshot of my GitHub activity and public repositories.
          </p>
        </div>

        {/* Contribution graph card */}
        <div className="group bg-card/40 backdrop-blur-md rounded-2xl border border-border/50 shadow-sm p-6 md:p-8 mb-6 fade-in-up delay-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base text-foreground tracking-tight">
                  Contribution Activity
                </h3>
                {totalContributions !== null && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {totalContributions} contributions in the last year
                  </p>
                )}
              </div>
            </div>

            <a
              href={`https://github.com/${USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border/50 bg-secondary/20 hover:bg-secondary/50 text-sm font-medium transition-all duration-200 self-start sm:self-auto"
            >
              <Github className="w-4 h-4" />
              @{USERNAME}
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Loading contributions...
            </div>
          ) : error || !contributions.length ? (
            <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
              Could not load contribution data.
            </div>
          ) : (
            <ContributionGraph weeks={contributions} />
          )}
        </div>

        {/* Repos grid */}
        {repos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 fade-in-up delay-2">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card/40 backdrop-blur-md p-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:bg-card/70 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden flex flex-col gap-3"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GitCommit className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-semibold text-sm text-foreground tracking-tight truncate">
                      {repo.name}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
                </div>

                {repo.description && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {repo.description}
                  </p>
                )}

                <div className="flex items-center gap-4 mt-auto pt-1">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: languageColors[repo.language] ?? languageColors.default }}
                      />
                      <span className="text-xs text-muted-foreground">{repo.language}</span>
                    </div>
                  )}
                  {repo.stargazers_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {repo.stargazers_count}
                    </div>
                  )}
                  {repo.forks_count > 0 && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <GitFork className="w-3 h-3" />
                      {repo.forks_count}
                    </div>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}

        {/* View all CTA */}
        <div className="text-center mt-10 fade-in-up delay-3">
          <a
            href={`https://github.com/${USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            View Full GitHub Profile
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};