import Header from "./components/Header";
import RepoList from "./components/RepoList";
import UserInfo from "./components/UserInfo";
import { useGithubUser } from "./hooks/useGithubUser";

function App() {
  const {user,repos, loading, error, fetchUser} = useGithubUser();
  return (
    <main className="bg-[#20293A] min-h-screen">
      <Header onSearch={fetchUser} user={user} loading={loading} error={error} />
      <UserInfo user={user} loading={loading} error={error}/>
      <RepoList repos={repos} />
    </main>
  );
}

export default App;
