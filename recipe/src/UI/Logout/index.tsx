import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetRole } from "../../Slice/StateSlice";

interface LogoutModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const LogoutModal = ({ onConfirm, onCancel }: LogoutModalProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token (or sessionStorage if you use that)
    dispatch(resetRole());              // Clear role from Redux
    onConfirm();                     // Close modal
    navigate("/");                   // Navigate to landing page
  };

  return (
    <div className="fixed inset-0 ml-[700px] mt-[100px] bg-opacity-50 flex items-center justify-center z-100 w-[300px]">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[300px]">
        <h2 className="text-lg font-bold mb-4">Are you sure you want to logout?</h2>
        <div className="flex justify-center gap-4">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Yes, Logout
          </button>
          <button
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
