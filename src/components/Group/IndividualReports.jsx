export default function IndividualReports() {
  return (
    <>
      <div className="flex gap-3 ">
        <div className="font-semibold   ">
          <button className="flex h-8 w-8 items-center justify-center rounded-t bg-gray-100 text-gray-500 hover:bg-gray-200">
            +
          </button>
          <div className="flex h-9  w-8 items-center justify-center bg-gray-100  text-sm text-gray-900">
            12
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-b bg-gray-100 text-gray-500 hover:bg-gray-200">
            -
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-2xl">
            <div className="flex h-full items-center  justify-center rounded-sm bg-pink-100 px-5 py-2  text-lg font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300">
              Subject here
            </div>{" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
          <div className="text-gray-600">
            Naga College Foundation
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nam
            ullam repellendus expedita sunt quasi, nesciunt nemo ipsa
            architecto, placeat velit. Nihil voluptates delectus repudiandae
            quam quaerat eveniet deserunt cum? Labore animi deleniti nisi
            asperiores corrupti voluptas, itaque illo ipsa placeat velit fugiat.
          </div>
          <div className="flex flex-col gap-2 pt-3">
            <div className="flex gap-2 font-bold">
              <span class="rounded-sm bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800 dark:bg-gray-700 dark:text-gray-300">
                5
              </span>

              <span className="font-normal">Knowledge & Delivery</span>
            </div>

            <div className="flex gap-2 font-bold">
              <span class="rounded-sm bg-orange-100 px-2.5 py-0.5 text-sm font-medium text-orange-800 dark:bg-gray-700 dark:text-gray-300">
                5
              </span>

              <span className="font-normal">Interest & Stimulation</span>
            </div>

            <div className="flex gap-2 font-bold">
              <span class="rounded-sm bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800 dark:bg-gray-700 dark:text-gray-300">
                5
              </span>

              <span className="font-normal">Management & Organization</span>
            </div>

            <div className="flex gap-2 font-bold">
              <span class="rounded-sm bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800 dark:bg-gray-700 dark:text-gray-300">
                5
              </span>

              <span className="font-normal">Professor-Student Relation</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

