"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Welcome } from "./Welcome";
import Dashboard from "./Dashboard";

type PageMap = Record<string, JSX.Element>;

const DashboardScreen = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const pageMap: PageMap = {
    dash: <Suspense><Dashboard /></Suspense>,
    welcome: <Suspense><Welcome /></Suspense>,
  };

  return page ? pageMap[page] : pageMap.dash;
};

export default DashboardScreen;
