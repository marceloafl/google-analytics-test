"use client";

import Link from "next/link";
import React from "react";

export default function SecondPage() {
  return (
    <div>
      <p>This is a Google Analytics test.</p>
      <p>Page 2.</p>
      <Link href='/first-page'>Go to first page</Link>
    </div>
  );
}
