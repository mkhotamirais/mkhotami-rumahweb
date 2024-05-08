import toast from "react-hot-toast";
import { useDeleteUserMutation } from "../../../app/api/userApiSlice";

const UserItems = ({ item }) => {
  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = () => {
    deleteUser(item.id)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };
  return (
    <div className="border mb-2">
      <div>{item?.username}</div>
      <div>{item?.email}</div>
      <div>{item?.role}</div>
      <button onClick={handleDelete}>hapus</button>
    </div>
  );
};
UserItems.propTypes;

export default UserItems;
