"use client"; // must be the FIRST line!

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/signup"); // ✅ always start with a slash
  }, [router]);

  return null;
}
