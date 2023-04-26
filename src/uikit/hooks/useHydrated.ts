import { useEffect, useState } from "react";

let hydrating = true;

export const useHydrated = () => {
  const [hydrated, setHydrated] = useState(() => !hydrating);

  useEffect(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
};
