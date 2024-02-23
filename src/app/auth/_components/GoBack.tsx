import { useRouter } from "next/navigation";
import { ChevronLeft } from "~/components/Icons"

export const GoBack = () => {
  const router = useRouter();
  return (
    <div className="absolute text-gray top-0 bottom-0 left-0 cursor-pointer h-max" onClick={() => router.replace("/auth")}>
      <ChevronLeft />
    </div>
  )
}
