import { AuthScreen } from "./_components/AuthScreen";
import { FloatingImage } from "~/components/Background/FloatingImage";
import { Suspense } from "react";

const AuthView = () => {
  // server functions here
  return (
    <>
      <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[#070C15]">
        <div className="jusfify-center relative flex w-full flex-row">
          <Suspense>
            <FloatingImage />
          </Suspense>
          <div className="z-30 flex w-full flex-row justify-center">
            <div className="w-max">
              <h1 className="absolute left-[74px] font-stat text-[32px] font-bold leading-[110%] text-bg sm:top-[36px] 2xl:top-[58px]">
                GAMESCRIBE
              </h1>
            </div>
            <div className="flex w-full flex-row justify-center sm:py-[36px] 2xl:px-[74px] 2xl:py-[58px]">
              <Suspense>
                <div className="z-30 flex w-[500px] shrink-0 flex-col items-center justify-between overflow-x-hidden rounded-[52px] bg-bg-80 p-[52px] shadow-lg backdrop-blur-[40px]">
                  <AuthScreen />
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthView;
