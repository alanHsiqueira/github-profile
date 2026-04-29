import React from 'react';
import { useParams, Link } from 'react-router-dom';
import type { GithubRepo } from '../hooks/useGithubUser';
import RepoCard from '../components/RepoCard';

const Repositories = () => {
  const { username } = useParams<{ username: string }>();
  const [repos, setRepos] = React.useState<GithubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAllRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        );

        if (!response.ok) {
          throw new Error('Erro ao buscar os repositórios.');
        }
        const data = await response.json();
        setRepos(data);
      } catch {
        setError('Não foi possivel carregar os repositórios.');
      } finally {
        setLoading(false);
      }
    };
    if (username) {
      fetchAllRepos();
    }
  }, [username]);

  return (
    <main className="bg-[#20293A] min-h-screen p-6 sm:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <Link
            to="/"
            className="text-[#97A3B6] text-sm sm:text-base hover:text-[#CDD5E0] bg-[#111729] py-2 px-4 rounded-lg transition-colors"
          >
            ← Back to Profile
          </Link>
          <h1 className='text-[#CDD5E0] text-xl sm:text-3xl font-bold truncate'>
            All repositories of {username}
          </h1>
        </div>

        {loading && (
          <div className='flex flex-col items-center justify-center p-12 gap-4 mt-12'>
            <svg 
              className="animate-spin h-10 w-10 text-[#364153]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="#CDD5E0" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-[#CDD5E0] text-lg font-medium animate-pulse">
              Searching for repositories...
            </p>
          </div>
        )}
        {error && <p className='text-red-400 font-bold text-center mt-12'>{error}</p>}
        {!loading && !error && repos.length === 0 && (
          <p className='text-[#CDD5E0] text-center mt-12'>This user doesn't have any public repositories yet'</p>
        )}
        {!loading && !error && repos.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 pb-12'>
            {repos.map( (repo) => (
              <RepoCard key={repo.id} repo={repo}/>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Repositories;
