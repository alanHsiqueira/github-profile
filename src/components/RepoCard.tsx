import type { GithubRepo } from '../hooks/useGithubUser';
import Nesting from '../assets/Nesting.svg';
import License from '../assets/Chield_alt.svg';
import Star from '../assets/Star.svg';

type RepoCardProps = {
  repo: GithubRepo;
};

const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays === 0) return 'updated today';
    if (diffDays === 1) return 'updated 1 day ago';
    return `updated ${diffDays} days ago`
};

const RepoCard = ({ repo }: RepoCardProps) => {
  const cardStyle = {
    background: 'linear-gradient(95deg, #111729 3%, #1d1b48 99.61%)',
  };

  return (
    <div
      style={cardStyle}
      className="p-6 rounded-xl flex flex-col gap-4 shadow-lg"
    >
      <h2 className="text-[#CDD5E0] text-xl font-bold">{repo?.name}</h2>
      <p className="text-[#97A3B6] text-sm">
        {repo.description || 'No description provided'}
      </p>
      <div className="flex items-center gap-5 mt-2 flex-wrap">
        {repo.license && (
          <div className="flex items-center gap-1.5">
            <img src={License} alt="License" />
            <p className="text-[#97A3B6] text-sm">{repo?.license.spdx_id}</p>
          </div>
        )}

        <div className="flex items-center gap-1.5">
          <img src={Nesting} alt="Forks" />
          <p className="text-[#97A3B6] text-sm">{repo.forks_count}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <img src={Star} alt="" />
          <p className="text-[#97A3B6] text-sm">{repo.stargazers_count}</p>
        </div>
        <p className="text-[#97A3B6] text-xs ml-auto">
          {getDaysAgo(repo.updated_at)}
        </p>
      </div>
    </div>
  );
};

export default RepoCard;
