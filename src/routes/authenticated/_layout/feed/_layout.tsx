import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/authenticated/_layout/feed/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-full p-7">
      
      <div className="pb-5 flex items-center  w-full border-b mb-6 border-gray-300">
        <div className="bg-blue-400 h-10 w-10 flex items-center justify-center rounded-full font-bold text-white">
          RL
        </div>
        <Link to={'/authenticated/RateAtTeacher'} className="p-2 text-gray-400">Write a review...</Link>





      </div>
      <Outlet />
    </div>
  );
}
