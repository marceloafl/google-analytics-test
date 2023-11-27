"use client";

import Link from "next/link";
import React from "react";

export default function FirstPage() {
  return (
    <div>
      <p>This is a Google Analytics test.</p>
      <p>Page 1</p>
      <Link href='/second-page'>Go to second page</Link>
    </div>
  );
}
