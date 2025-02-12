import TotalRates from "../TotalRates";
import ListOfTags from "../Group/ListOfTags";
import { SchoolOverview } from "../../DTO/SchoolOverview";
import { Link } from "@tanstack/react-router";
export default function SchoolsOverview({
  Name = "School Name Here",
  Department = ["1","2","3","4","5"]
}: SchoolOverview) {
  return (
    <>
      <div className="w-full items-center p-7 justify-center text-nowrap hover:bg-gray-100">
        <article className="flex  items-center gap-6 text-gray-700 ">
          <section className="w-full flex flex-col gap-2">
            <div className="text-lg font-bold">{Name}</div>
            <ListOfTags Subjects={Department}/>
          </section>
           <Link
                 to={"/authenticated/school/"+Name}
                 className=" w-full text-right text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
               >
                 get all teachers
               </Link>
        </article>
      </div>
    </>
  );
}
