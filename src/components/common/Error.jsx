import { PropTypes } from "prop-types";

export default function Error({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div role="alert" className="text-red-600">
      {error}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};
