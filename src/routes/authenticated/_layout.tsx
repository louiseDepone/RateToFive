import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import Header from "../../components/Header";
import TeacherOverview from "../../components/Group/TeacherOverview";

export const Route = createFileRoute("/authenticated/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full  ">
      <Header />
      <div className=" w-full  flex min-h-screen h-full   ">
        <div className=" flex-1  p-7  py-20  h-screen  hidden      md:block ">
        <div className="h-full overflow-auto py-20">
          <p className="font-bold">Saved Posts</p>
          <div className="flex flex-col gap-4 pt-9">
            <div className="  pb-4 ">
              <div className="font-bold">Best Teacher ever </div>
              <p className="text-xs text-gray-400">sdfdsf</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
                ullam repellendus expedita sunt quasi, nesciunt nemo ipsa
                architecto, placeat velit. Nihil voluptates delectus repudiandae
                quam quaerat eveniet.
              </p>
            </div>
            <div className="  pb-4 ">
              <div className="font-bold">Best Teacher ever </div>
              <p className="text-xs text-gray-400">sdfdsf</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
                ullam repellendus expedita sunt quasi, nesciunt nemo ipsa
                architecto, placeat velit. Nihil voluptates delectus repudiandae
                quam quaerat eveniet.
              </p>
            </div>
            <div className="  pb-4 ">
              <div className="font-bold">Best Teacher ever </div>
              <p className="text-xs text-gray-400">sdfdsf</p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
                ullam repellendus expedita sunt quasi, nesciunt nemo ipsa
                architecto, placeat velit. Nihil voluptates delectus repudiandae
                quam quaerat eveniet.
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="flex-3   h-screen  border-x border-gray-200">
          <div className="h-full overflow-auto py-20">
             <Outlet />
          </div>
        </div>
        <div className=" flex-1 p-7   h-screen hidden      md:block">
        <div className="h-full overflow-auto py-20">

          <p className="font-bold">Universitiries</p>
          <div className="flex flex-col gap-4 pt-9">
            <div className="  pb-4 ">
              <div className="font-bold">Ateneo De Naga University</div>
              <address className="text-xs">
                Ateneo Avenue Naga City Bicol Luzon Philipipnes
              </address>
            </div>
            <div className="  pb-4 ">
              <div className="font-bold">University Of Santa Isabel</div>
              <address className="text-xs">
                Ateneo Avenue Naga City Bicol Luzon Philipipnes
              </address>
            </div>
            <div className=" pb-4 ">
              <div className="font-bold">University Of Nueva Caceres</div>
              <address className="text-xs">
                Ateneo Avenue Naga City Bicol Luzon Philipipnes
              </address>
            </div>
            <Link href="/authenticated/school" className="font-smibold text-sm text-gray-400">See Full List</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
