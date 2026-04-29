import { Link } from "react-router-dom";
import Header from "../components/Header";
import RepoList from "../components/RepoList";
import UserInfo from "../components/UserInfo";
import { useUser } from "../context/UserContext";

function App() {
  const {user,repos, loading, error, fetchUser} = useUser();
  return (
    <main className="bg-[#20293A] min-h-screen pb-12">
      <Header onSearch={fetchUser} user={user} loading={loading} error={error} />
      <UserInfo user={user} loading={loading} error={error}/>
      <RepoList repos={repos} />
      {user && repos.length > 0 && (
        <div className="flex justify-center mt-8">
          <Link
            to={`repositories/${user.login}`}
            className="text-[#97A3B6] hover:text-[#CDD5E0] text-sm sm:text-base font-medium transition-colors"
          >
            View all Repositories
          </Link>
        </div>
      )}
    </main>
  );
}

export default App;

