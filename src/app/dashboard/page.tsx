import Avatar from "~/components/Avatar/Avatar";
import DashboardScreen from "./_components/DashboardScreen";

export default function Page() {
  return (
    <>
      <div className="min-w-screen relative min-h-screen bg-bg px-[74px] py-[36px]">
        <div className="flex w-full justify-between">
          <h1 className="font-stat text-[32px] font-bold leading-[110%] text-text ">
            GAMESCRIBE
          </h1>
          <Avatar size="xs" />
        </div>
        <main className="flex h-full flex-col items-center">
          <DashboardScreen />
        </main>
      </div>
    </>
  );
}
