"use client";

import { useSyncExternalStore } from "react";
import { getBengaliDate } from "@/lib/utils";

const emptySubscribe = () => () => {};

export default function BengaliDate() {
  const date = useSyncExternalStore(
    emptySubscribe,
    () => getBengaliDate(),
    () => ""
  );

  return (
    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
      {date}
    </span>
  );
}
