import { Overview } from "../../DTO/Overview";
import TotalRates from "../TotalRates";
import ListOfTags from "../Group/ListOfTags";
export default function TeacherOverview({
  Name = "Name Here",
  College = "College Name",
  Department = "Department College",
  Subjects = [
    { Color: "red", Label: "Math" },
    { Color: "orange", Label: "English" },
    { Color: "yellow", Label: "Programming" },
  ],
  OverAllRate = {
    Quality: 0,
    TotalReviews: 0,
    TeacherLink: "123",
  },
}: Overview) {
  return (
    <>
      <div className="w-full items-center p-7 justify-center text-nowrap hover:bg-gray-100">
        <article className="flex  items-center gap-6 text-gray-700 ">
          <section className="w-full">
            <div className="text-lg font-bold">{Name}</div>
            <div className="text-sm">{College}</div>{" "}
            <div className="text-sm py-2 text-gray-600">
              {Department}
            </div>
            <ListOfTags/>
            <TotalRates
                Quality={OverAllRate.Quality} TotalReviews={OverAllRate.TotalReviews} TeacherLink={OverAllRate.TeacherLink}
            />
          </section>
        </article>
      </div>
    </>
  );
}
