import type { GithubRepo } from "../hooks/useGithubUser";

type RepoCardProps = {
  repo: GithubRepo;
}

const RepoCard = ({repo}: RepoCardProps) => {
  const cardStyle = {
   background: 'linear-gradient(95deg, #111729 3%, #1d1b48 99.61%)'
  };

  return (
    <div style={cardStyle} className="p-6 rounded-xl flex flex-col gap-4 shadow-lg">
      <h2 className="text-[#CDD5E0] text-xl font-bold">{repo?.name}</h2>
      <p className="text-[#97A3B6] text-sm">
        {repo.description || "No description provided"}
      </p>
    </div>
  )
}

export default RepoCard
