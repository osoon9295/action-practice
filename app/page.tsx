// src/app/page.tsx

"use client";
import * as Sentry from "@sentry/nextjs";

export default function Home() {
  return (
    <div>
      <button
        onClick={async () => {
          Sentry.captureException(new Error("Test Error"));
        }}
        className="rounded-md bg-blue-500 p-2 text-white"
      >
        discord로 알림보내기
      </button>
    </div>
  );
}
