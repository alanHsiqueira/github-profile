import React from 'react';

export type GithubUser = {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  public_repos: number;
  html_url: string;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_counts: number;
  forks_count: number;
  license: {
    spdx_id: string;
  } | null;
  updated_at: string;
};

export const useGithubUser = () => {
  const [user, setUser] = React.useState<GithubUser | null>(null);
  const [repos, setRepos] = React.useState<GithubRepo[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const abortControllerRef = React.useRef<AbortController | null>(null);

  const fetchUser = async (username: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    setLoading(true);
    setError(null);
    setUser(null);
    setRepos([]);
    try {
      const [userResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, {
          signal: abortController.signal,
        }),
        fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`,
          { signal: abortController.signal },
        ),
      ]);

      if (!userResponse.ok) {
        if (userResponse.status === 404) {
          throw new Error('Usuario não encontrado');
        }
        throw new Error('Erro ao buscar dados na API');
      }
      const userData: GithubUser = await userResponse.json();
      const reposData: GithubRepo[] = await reposResponse.json();
      setUser(userData);
      setRepos(reposData);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        console.log('Requisição cancelada pelo AbortController');
        return;
      }
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Ocorreu um erro inesperado');
      }
    } finally {
      setLoading(false);
    }
  };
  return { user,repos, loading, error, fetchUser };
};
