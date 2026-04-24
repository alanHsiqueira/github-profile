import universe from '../assets/hero-image-github-profile.jpg';
import search from '../assets/Search.svg';
import Input from './Input';
import React from 'react';
import type { GithubUser } from '../hooks/useGithubUser';
type HeaderProps = {
  onSearch: (username: string) => void;
  user: GithubUser | null;
  loading: boolean;
  error: string | null;
};

const Header = ({ onSearch, user }: HeaderProps) => {
  const [value, setValue] = React.useState('');
  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (value.trim() !== '') {
      onSearch(value);
    }
  }
  return (
    <header className="relative w-full h-80 overflow-hidden">
      <div>
        <img
          src={universe}
          className="absolute inset-0 w-full h-full  object-cover"
          alt="universe background"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
        <form
          onSubmit={handleSubmit}
          className="flex bg-[#364153] items-center gap-2 py-3 sm:py-5 px-3 rounded-xl w-full max-w-122.5"
        >
          <img className="shrink-0 w-6 h-6" src={search} alt="Search" />
          <Input
            id="github-username"
            name="username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="hidden sm:block bg-[#111729] text-[#CDD5E0] py-1 px-2  rounded-lg text-sm cursor-pointer hover:opacity-80 transition-opacity"
          >
            Search
          </button>
        </form>
        {user && (
          <div className="flex bg-[#111729] p-4 gap-4 rounded-xl w-full max-w-122.5 items-center">
            <img
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl shrink-0 object-cover"
              src={user?.avatar_url}
              alt={`Foto de perfil de ${user.name}`}
            />
            <div className="flex flex-col">
              <p className="text-[#CDD5E0] font-bold text-sm sm:text-lg">{user?.name}</p>
              <p className="text-[#97A3B6] text-sm sm:text-lg line-clamp-2 mt-1">{user?.bio}</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
