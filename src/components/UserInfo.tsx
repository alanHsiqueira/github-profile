import type { GithubUser } from '../hooks/useGithubUser';

type ProfileProps = {
  user: GithubUser | null;
  loading: boolean;
  error: string | null;
};

const UserInfo = ({ user, loading, error }: ProfileProps) => {
  return (
    <section>
      {error && (
        <p className="text-center text-red-400 font-bold p-8">{error}</p>
      )}
      {loading && (
        <div className="flex flex-col items-center justify-center p-12 gap-4">
          <svg
            className="animate-spin h-10 w-10 text-[#364153]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="#CDD5E0"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          <p className="text-[#CDD5E0] text-lg font-medium animate-pulse">
            Searching for user...
          </p>
        </div>
      )}

      {user && (
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 sm:gap-6 relative -mt-8 sm:-mt-12 z-10">
            <div>
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full shrink-0 border-4 border-[#20293A]"
                src={user?.avatar_url}
                alt={`Foto de perfil de ${user?.name}`}
              />
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-5">
              <div className="flex bg-[#111729] p-3 sm:p-4 rounded-xl items-center gap-2">
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold">
                  Followers
                </p>
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold border-l border-[#364153] pl-2 sm:pl-4">
                  {user.followers}
                </p>
              </div>

              <div className="flex bg-[#111729] p-3 sm:p-4 rounded-xl items-center gap-2">
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold">
                  Following
                </p>
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold border-l border-[#364153] pl-2 sm:pl-4">
                  {user.following}
                </p>
              </div>

              <div className="flex bg-[#111729] p-3 sm:p-4 rounded-xl items-center gap-2">
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold">
                  Location
                </p>
                <p className="text-[#CDD5E0] text-sm sm:text-base font-bold border-l border-[#364153] pl-2 sm:pl-4">
                  {user.location ? user.location : 'location not found'}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-6">
            <h1 className="text-[#CDD5E0] text-2xl sm:text-4xl font-bold">
              {user?.name || user?.login}
            </h1>
            <p className="text-[#97A3B6] text-base sm:text-lg mt-2 sm:mt-0">
              {user?.bio || 'This user has no bio'}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserInfo;
