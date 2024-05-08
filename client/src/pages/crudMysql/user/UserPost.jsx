import { useState } from "react";
import { usePostUserMutation } from "../../../app/api/userApiSlice";
import toast from "react-hot-toast";

const UserPost = () => {
  const [data, setData] = useState({});
  const [postUser] = usePostUserMutation();

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUser(data)
      .unwrap()
      .then((res) => {
        toast.success(res.message);
        setData({});
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <div>
      UserPost
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" onChange={handleChange} className="border" />
        <input name="email" type="text" onChange={handleChange} className="border" />
        <input name="password" type="text" onChange={handleChange} className="border" />
        <input name="confPassword" type="text" onChange={handleChange} className="border" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UserPost;
