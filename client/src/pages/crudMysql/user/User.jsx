import { useGetUsersQuery } from "../../../app/api/userApiSlice";
import UserItems from "./UserItems";
import UserPost from "./UserPost";

const User = () => {
  const { data = [], isLoading, isSuccess, isError, error } = useGetUsersQuery();

  let content;
  if (isLoading) content = <div>loading</div>;
  else if (isError) content = <div>{error}</div>;
  else if (isSuccess) {
    if (data.length > 0) {
      const renderedUser = data && data.map((item) => <UserItems key={item?.id} item={item} />);
      content = renderedUser;
    } else content = <div>data kosong</div>;
  }

  return (
    <div>
      User
      <UserPost />
      {content}
    </div>
  );
};

export default User;
