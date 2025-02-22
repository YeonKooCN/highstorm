import { Loading as Spinner } from "@/components/loading";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Spinner />
    </div>
  );
}
