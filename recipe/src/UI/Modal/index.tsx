const Modal = ({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-opacity-400">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative rounded-lg shadow-sm bg-white border-2 border-gray-300">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
          >
            <svg
              className="w-4 h-4 text-red-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <h1 className="text-2xl font-bold mb-5 text-red-600 font-title">
              RecipeNest
            </h1>
            <h3 className="mb-5 text-lg font-normal font-body">
              Are you sure you want to Logout?
            </h3>
            <button
              type="button"
              onClick={onConfirm}
              className="font-body text-white bg-red-600 cursor-pointer font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center hover:bg-red-800"
            >
              Yes, I'm sure
            </button>
            <button
              type="button"
              onClick={onClose}
              className="font-body py-2.5 px-5 ms-3 cursor-pointer text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-2 hover:bg-gray-100"
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
