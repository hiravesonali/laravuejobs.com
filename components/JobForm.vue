<template>
    <div class="mx-auto max-w-screen-xl pt-20">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="shadow-md sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-5 bg-white sm:p-6">
                <h2 class="pb-5 text-xl font-bold text-green-500">ABOUT JOB</h2>
                <div class="grid grid-cols-3 gap-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Position</label>
                    <div class="mt-1 flex rounded-md shadow-base">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="full stack developer"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Location</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="Berlin, Germany"
                      />
                     </div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Salary</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="80.000$-120.000$ / year"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Contact Person</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Contact Person Email</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="John@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >URL to apply</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="https://www.company.de/jobs/apply"
                      />
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-6 mt-6">
                  <div class="col-span-3 sm:col-span-2">
                    <label
                      for="company_website"
                      class="block text-md font-medium leading-5 text-gray-700"
                    >Tags</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <input
                        id="company_website"
                        class="form-input flex-1 block w-full rounded-md border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        placeholder="select option"
                      />
                    </div>
                  </div>
                </div>

                <div class="mt-6">
                  <label for="about" class="block text-md leading-5 font-medium text-gray-700">Description</label>
                  <div class="rounded-md shadow-sm">
                    <textarea
                      id="description"
                      rows="10"
                      class="form-textarea mt-1 block w-full border-2 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="you@example.com"
                    ></textarea>
                  </div>
                  <p
                    class="mt-2 text-sm text-gray-500"
                  >Brief description for your profile.</p>
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>
