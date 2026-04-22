import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import { useGithubUser } from "./hooks/useGithubUser";

function App() {
  const {user,repos, loading, error, fetchUser} = useGithubUser();
  return (
    <main>
      <Header onSearch={fetchUser} user={user} loading={loading} error={error} />
      <UserInfo user={user} loading={loading} error={error}/>
    </main>
  );
}

export default App;
