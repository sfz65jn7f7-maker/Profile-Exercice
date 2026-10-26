
import { useState, useEffect } from "react";
import { ProfilesProvider, useProfiles } from "./ProfilesContext";

const profileImages = [
  "/profile.jpg",
  "/Pink%20Sunset.png",
  "/Red%20Sunset.jpg",
];

function ProfileStories() {
  return (
    <div className="flex shrink-0 items-center gap-4 px-6 pt-6">
      {profileImages.map((imageSrc, index) => (
        <div
          key={imageSrc}
          className="h-[68px] w-[68px] rounded-full bg-[linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)] p-[3px]"
        >
          <img
            src={imageSrc}
            alt={`Story de profil ${index + 1}`}
            className="block h-full w-full rounded-full border-[2px] border-white object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function ProfileCard({ profile, imageSrc }) {
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
          src={imageSrc}
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
    return <p className="m-auto text-gray-600">Chargement des profils...</p>;
  }

  if (error) {
    return <p className="m-auto text-red-600">{error}</p>;
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-[25px] p-[30px]">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={profile.id}
          profile={profile}
          imageSrc={profileImages[index]}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <ProfilesProvider>
      <main className="flex min-h-screen items-center justify-center bg-black p-4">
        <div className="flex min-h-[min(844px,calc(100vh-32px))] w-full max-w-[390px] flex-col rounded-[2rem] bg-[#f8f7f4] shadow-[0_16px_50px_rgba(0,0,0,0.12)]">
          <ProfileStories />
          <div className="mx-6 mt-5 border-t border-gray-300" />
          <h1 className="px-6 pt-3 text-sm font-bold text-[#222]">Compteurs</h1>
          <ProfileList />
        </div>
      </main>
    </ProfilesProvider>
  );
}

export default App;
