import { useStore } from "@/store/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  // Bears
  const bears = useStore((state) => state.bears);
  const addBears = useStore((state) => state.addBears);

  // Fishes
  const fishes = useStore((state) => state.fishes);
  const addFishes = useStore((state) => state.addFishes);

  const [Bears, setBears] = useState(0);
  const [Fishes, setFishes] = useState(0);

  const [showChild, setShowChild] = useState(false);
  const Router = useRouter();

  useEffect(() => {
    if (!Router.isReady) return;
    setShowChild(true);
  }, [Router.isReady]);

  if (!showChild) {
    return null;
  }
  // const router = useRouter();
  // useEffect(() => {}, [router.isReady]);
  // useEffect(() => {
  //   setBears(bears);
  //   setFishes(fishes);
  // }, [bears, fishes]);
  return (
    <section>
      {bears}
      <button onClick={addBears}>Add Bears</button>

      {fishes}
      <button onClick={addFishes}>Add fishes</button>
    </section>
  );
}
