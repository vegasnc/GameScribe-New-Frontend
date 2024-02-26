import DashboardScreen from "./_components/DashboardScreen";
import { Nav } from "~/components/Navbar/Nav";

export default function Page() {
  return (
    <>
      <div className="min-w-screen relative min-h-screen bg-bg px-[74px] py-[36px]">
        <Nav />
        <main className="flex h-full flex-col items-center">
          <DashboardScreen />
        </main>
      </div>
    </>
  );
}
