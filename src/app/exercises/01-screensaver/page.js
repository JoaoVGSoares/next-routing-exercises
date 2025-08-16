import React from "react";

import ScreenSaver from "../../../components/ScreenSaver";
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensave/blue">Blue</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/hotpink">Hotpink</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/green">Green</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/orange">Orange</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
