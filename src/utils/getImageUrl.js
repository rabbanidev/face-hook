import config from "../config";

const getImageUrl = (url) => {
  return `${config.baseUrl}/${url}`;
};

export default getImageUrl;
