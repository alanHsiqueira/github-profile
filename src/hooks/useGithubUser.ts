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

export const useGithubUser = () => {
  const [user, setUser] = React.useState<GithubUser | null>(null);
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

    try {
      const response = await fetch(`https://api.github.com/users/${username}`, {
        signal: abortController.signal,
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Usuario não encontrado');
        }
        throw new Error('Erro ao buscar dados na API');
      }
      const data: GithubUser = await response.json();
      setUser(data);
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
  return { user, loading, error, fetchUser };
};
