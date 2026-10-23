
import { useState, useEffect } from "react";
import { ProfilesProvider, useProfiles } from "./ProfilesContext";


function ProfileCard({ profile }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${profile.username} : ${count}`);
  }, [count, profile.username]);

  function handlePlus() {
  setCount((previousCount) =>
    previousCount < 20 ? previousCount + 1 : 20
  );
}

function handleMinus() {
  setCount((previousCount) =>
    previousCount > 0 ? previousCount - 1 : 0
  );
}

  const numberColor =
    count <= 10
      ? "text-red-500"
      : count <= 15
        ? "text-orange-500"
        : "text-green-500";

  return (
    <div className="flex flex-col items-center gap-[10px]">
      <div className="h-[86px] w-[86px] rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] p-[4px]">
        <img
          src="/profile.jpg"
          alt={profile.username}
          className="block h-full w-full rounded-full border-[3px] border-white object-cover"
        />
      </div>

      <h2 className="m-0 font-[Arial,sans-serif] text-[20px] font-semibold text-[#222]">
        {profile.username}
      </h2>

      <div className="flex items-center gap-4">
        <button
          onClick={handleMinus}
          aria-label={`Diminuer le compteur de ${profile.username}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-2xl font-bold text-gray-800 transition hover:bg-gray-300 active:scale-95"
        >
          −
        </button>

        <span
          className={`min-w-8 text-center text-2xl font-bold ${numberColor}`}
        >
          {count}
        </span>

        <button
          onClick={handlePlus}
          aria-label={`Augmenter le compteur de ${profile.username}`}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200 text-2xl font-bold text-gray-800 transition hover:bg-gray-300 active:scale-95"
        >
          +
        </button>
      </div>
    </div>
  );
}

function ProfileList() {
  const { profiles, loading, error } = useProfiles();

  if (loading) {
    return <p className="text-gray-600">Chargement des profils...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center gap-[25px] p-[30px]">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

function App() {
  return (
    <ProfilesProvider>
      <ProfileList />
    </ProfilesProvider>
  );
}

export default App;
