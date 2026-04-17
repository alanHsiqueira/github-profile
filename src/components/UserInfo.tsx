import type { GithubUser } from '../hooks/useGithubUser';

type ProfileProps = {
  user: GithubUser | null;
  loading: boolean;
  error: string | null;
};

const UserInfo = ({ user, loading, error }: ProfileProps) => {
  return (
    <section className="min-h-screen bg-[#364153] ">
      {error && (
        <p className="text-center text-red-400 font-bold p-8">{error}</p>
      )}
      {loading && <p className="text-[#CDD5E0] text-xl p-8">Loading...</p>}
      {user && (
        <div className="max-w-4xl ml-60  px-4">
          <div className="flex items-end gap-6 relative -mt-12 z-10">
            <div>
              <img
                className="w-32 h-32 object-cover rounded-full shrink-0"
                src={user?.avatar_url}
                alt={`Foto de perfil de ${user?.name}`}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex bg-[#111729] p-4 rounded-lg items-center gap-2">
                <p className="text-[#CDD5E0] text-sm font-bold">Followers</p>
                <p className="text-[#CDD5E0] text-sm font-bold">
                  {user.followers}
                </p>
              </div>
              <div className="flex bg-[#111729] p-4 rounded-xl items-center gap-2">
                <p className="text-[#CDD5E0] text-sm font-bold">Following</p>
                <p className="text-[#CDD5E0] text-sm font-bold">
                  {user.following}
                </p>
              </div>

              <div className="flex  bg-[#111729] p-4 rounded-xl items-center gap-2">
                <p className="text-[#CDD5E0] text-sm font-bold">Location</p>
                <p className="text-[#CDD5E0] text-sm font-bold">
                  {user.location ? user.location : "location not found"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserInfo;
