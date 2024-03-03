import { PropTypes } from "prop-types";

export default function Error({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div role="alert" className="mt-2 text-red-400">
      {error}
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
};
