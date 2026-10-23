
import {
  createContext,
  use,
  useEffect,
  useState,
} from "react";

const ProfilesContext = createContext(null);

export function ProfilesProvider({ children }) {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération");
        }

        return response.json();
      })
      .then((data) => {
        setProfiles(data.slice(0, 3));
      })
      .catch(() => {
        setError("Impossible de charger les profils.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <ProfilesContext.Provider
      value={{ profiles, loading, error }}
    >
      {children}
    </ProfilesContext.Provider>
  );
}

export function useProfiles() {
  return use(ProfilesContext);
}
