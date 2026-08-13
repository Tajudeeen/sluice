import { useEffect, useState } from "react";

// Brief branded splash shown the instant the app boots, before the real UI is
// revealed. Covers initial bundle/hydration + a short minimum so the brand mark
// registers. Fades out, then unmounts itself.
export default function LaunchSplash({ onDone }: { onDone: () => void }) {
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const MIN_MS = 1100; // minimum time the splash is visible (brief branded boot)
    const timer = setTimeout(() => setFade(true), MIN_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fade) return;
    // after the fade transition completes, tell the parent to remove us
    const t = setTimeout(() => {
      setGone(true);
      onDone();
    }, 520);
    return () => clearTimeout(t);
  }, [fade, onDone]);

  if (gone) return null;

  return (
    <div className={`launch ${fade ? "launch--out" : ""}`} aria-hidden="true">
      <div className="launch-bg">
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="orb o3" />
      </div>
      <div className="launch-core">
        <div className="launch-mark">▱</div>
        <div className="launch-name">SLUICE</div>
        <div className="launch-tag">AI execution firewall for tokenized assets</div>
        <div className="launch-bar"><div className="launch-bar-fill" /></div>
      </div>
    </div>
  );
}
