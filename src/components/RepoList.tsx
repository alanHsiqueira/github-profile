import RepoCard from "./RepoCard";
import type { GithubRepo } from "../hooks/useGithubUser";

type RepositoryListProps = {
  repos: GithubRepo[];
}

const RepoList = ({repos}: RepositoryListProps) => {
  if (repos.length === 0) return null;
  return (
    <section className="max-w-4xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 pb-12 ">
      {repos.map( (repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </section>
  )
}

export default RepoList
