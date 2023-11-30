/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CreateModal = ({ isOpen, closeModal, handleSubmit }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  Assignment Details
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit}>
                    {/* title */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text font-bold">Title</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        placeholder="title"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* Deadlin */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text font-bold">Deadline</span>
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        min={new Date().toISOString().split("T")[0]}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    {/* Deadlin */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text font-bold">
                          Description
                        </span>
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        placeholder="write description..."
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 w-full my-3 uppercase"
                      >
                        Create
                      </button>
                    </div>
                  </form>
                </div>
                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateModal;
