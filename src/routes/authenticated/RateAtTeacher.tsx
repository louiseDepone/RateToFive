import { createFileRoute } from "@tanstack/react-router";
import Header from "../../components/Header";

export const Route = createFileRoute("/authenticated/RateAtTeacher")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen w-full pt-20 ">
      <Header />
      <div>
        <div className="md:flex  w-full h-full  ">
          <div className="flex h-screen flex-1   flex-col items-center p-10 md:fixed md:w-[50%] top-20   gap-7">
            <div className="flex w-full gap-7">
              <div className="w-full flex items-center gap-2 ">
                <p className="text-nowrap ">Professor's Name </p>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Ryan Louise Depone EPis"
                  disabled
                />
              </div>
              <div className="w-full flex items-center gap-2 ">
                <p className="text-nowrap ">University's Name </p>
                <input
                  type="text"
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value="Naga College Foundation"
                  disabled
                />
              </div>
            </div>
            <input
              type="text"
              placeholder="Title"
              className="w-full border-none  focus:outline-none focus:border-none  text-4xl focus:ring-0"
            />
            <div className="h-1 w-1/2 border-t"></div>
            <textarea
              placeholder="Share Your Experience..."
              className="  h-[70%] focus:outline-none focus:border-none  w-full border-none text-2xl focus:ring-0"
            />
          </div>
          <div className="h-1/2 w-1 hidden md:inline  border-r"></div>
          <div className="flex flex-1 h-full md:w-[50%]   md:pl-[50%] flex-col gap-7 md:overflow-auto p-10 ">
            <div className="flex gap-10">
              <div className="mx-auto  flex flex-1 items-center gap-2">
                <label
                  for="countries"
                  className=" text-nowrap text-sm  text-gray-900 dark:text-white"
                >
                  Subject To Rate
                </label>
                <select
                  id="countries"
                  className=" w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ring-0 focus:ring-0"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="mx-auto  flex flex-1 items-center gap-2">
                <label
                  for="countries"
                  className=" text-nowrap text-sm  text-gray-900 dark:text-white"
                >
                  Class Mode
                </label>
                <select
                  id="countries"
                  className=" w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 ring-0 focus:ring-0"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3">
              <div className=" w-full text-center">
                <div>
                  <p className="text-lg font-bold">
                    Knowledge of Subject and Delivery of Instruction
                  </p>
                  <p className="text-xs">
                    Evaluates the professor's expertise in the subject and their
                    ability to deliver content clearly and effectively.
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 gap-1">
                <div className="h-12 flex-1 rounded-l-full   bg-red-500 "></div>
                <div className="h-12 flex-1  bg-purple-500"></div>
                <div className="h-12 flex-1  bg-orange-500"></div>
                <div className="h-12 flex-1  bg-gray-100"></div>
                <div className="h-12 flex-1 rounded-r-full  bg-gray-100"></div>
              </div>

              <div className="w-full text-center font-semibold text-sm">
                5 Commendable
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3">
              <div className=" w-full text-center">
                <div>
                  <p className="text-lg font-bold">Interest and Stimulation </p>
                  <p className="text-xs">
                    Assesses how well the professor fosters curiosity,
                    engagement, and motivation in students.
                  </p>
                </div>
              </div>

              <div className="flex w-1/2 gap-1">
                <div className="h-12 flex-1 rounded-l-full   bg-red-500 "></div>
                <div className="h-12 flex-1  bg-purple-500"></div>
                <div className="h-12 flex-1  bg-orange-500"></div>
                <div className="h-12 flex-1  bg-gray-100"></div>
                <div className="h-12 flex-1 rounded-r-full  bg-gray-100"></div>{" "}
              </div>

              <div className="w-full text-center font-semibold text-sm">
                5 Commendable
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3">
              <div className=" w-full text-center">
                <div>
                  <p className="text-lg font-bold">
                    Management and Organization
                  </p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae voluptatem unde pariatur aspernatur quaerat sunt
                    corporis veritatis commodi ducimus,
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 gap-1">
                <div className="h-12 flex-1 rounded-l-full   bg-red-500 "></div>
                <div className="h-12 flex-1  bg-purple-500"></div>
                <div className="h-12 flex-1  bg-orange-500"></div>
                <div className="h-12 flex-1  bg-gray-100"></div>
                <div className="h-12 flex-1 rounded-r-full  bg-gray-100"></div>{" "}
              </div>

              <div className="w-full text-center font-semibold text-sm">
                5 Commendable
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-3">
              <div className=" w-full text-center">
                <div>
                  <p className="text-lg font-bold">
                    Professor-Student Relations
                  </p>
                  <p className="text-xs">
                    Measures the professor's ability to plan lessons, manage
                    time, and provide structure.
                  </p>
                </div>
              </div>
              <div className="flex w-1/2 gap-1">
                <div className="h-12 flex-1 rounded-l-full   bg-red-500 "></div>
                <div className="h-12 flex-1  bg-purple-500"></div>
                <div className="h-12 flex-1  bg-orange-500"></div>
                <div className="h-12 flex-1  bg-gray-100"></div>
                <div className="h-12 flex-1 rounded-r-full  bg-gray-100"></div>{" "}
              </div>

              <div className="w-full text-center font-semibold text-sm">
                5 Commendable
              </div>
            </div>

            <div className="flex w-full gap-2 md:pt-5 pb-10 ">
              <div></div>
              <div className="flex flex-1 items-center rounded-sm border border-gray-200 ps-4 dark:border-gray-700">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="size-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  for="bordered-radio-1"
                  className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I’d still enroll with this instructor.
                </label>
              </div>
              <div className="flex flex-1 items-center rounded-sm border border-gray-200 ps-4 dark:border-gray-700">
                <input
                  checked
                  id="bordered-radio-2"
                  type="radio"
                  value=""
                  name="bordered-radio"
                  className="size-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                <label
                  for="bordered-radio-2"
                  className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I wouldn’t enroll with this instructor again.
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
