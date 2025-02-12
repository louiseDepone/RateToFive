import { createFileRoute } from "@tanstack/react-router";
import TeacherProfile from "../../../../../components/Group/TeacherProfile";
import IndividualReports from "../../../../../components/Group/IndividualReports";
export const Route = createFileRoute(
  "/authenticated/_layout/teacher/_layout/$teacherId"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-10 p-7">
      <TeacherProfile />
      <div className="flex flex-col gap-10  ">
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
        <IndividualReports />
      </div>
    </div>
  );
}
