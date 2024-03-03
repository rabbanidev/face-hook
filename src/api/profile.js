export const getProfile = async (api, profileId) => {
  const res = await api.get(`/profile/${profileId}`);
  return res;
};
