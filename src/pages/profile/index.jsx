import { useEffect } from "react";
import { useAuth, useAxios } from "../../hooks";

export default function Profile() {
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    const fetchProfileData = async () => {
      const res = await api.get(`/profile/${auth.user.id}`);
      console.log(res);
    };

    fetchProfileData();
  }, [api, auth.user.id]);

  return <div>Profile</div>;
}
