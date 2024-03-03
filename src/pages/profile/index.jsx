import { useQuery } from "react-query";
import { useAuth, useAxios, useProfile } from "../../hooks";
import { getProfile } from "../../api/profile";

export default function Profile() {
  const { api } = useAxios();
  const { auth } = useAuth();
  const { onUpdateUser, onUpdatePosts } = useProfile();

  const handleProfileSuccess = (profileData) => {
    onUpdateUser(profileData.user);
    onUpdatePosts(profileData.posts);
  };

  const { data, error, isLoading } = useQuery(
    ["profile", auth.user.id],
    () => getProfile(api, auth.user.id),
    {
      enabled: !!auth.user.id,
      onSuccess: handleProfileSuccess,
    }
  );

  return <></>;
}
