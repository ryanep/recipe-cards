"use client";

import { useEffect } from "react";

export const WakeLock = () => {
  const isWakeLockSupported =
    typeof window !== "undefined" && "wakeLock" in navigator;

  useEffect(() => {
    let wakeLock: null | WakeLockSentinel = null;

    const setupWakeLock = async () => {
      if (!isWakeLockSupported) {
        console.warn("The wake lock API is not supported.");

        return;
      }

      try {
        wakeLock = await navigator.wakeLock.request("screen");
      } catch {
        console.error("Wake lock failed to initialise.");
      }
    };

    void setupWakeLock();

    return () => {
      void wakeLock?.release();
      wakeLock = null;
    };
  }, [isWakeLockSupported]);

  return null;
};
