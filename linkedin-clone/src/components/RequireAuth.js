import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function RequireAuth({ user, children }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
      return;
    }
  }, [user]);
  return children; //header and home page , this if there user we allow access
}
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(RequireAuth);
