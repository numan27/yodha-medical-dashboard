// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// import FullScreenLoader from "../../components/Layout/Loader/FullScreenLoader";
import Public from "../../components/Layout/PageStructure/Public";
// import PATH from "../../utils/path.js";

function PublicRoute({ element }) {
  // const navigate = useNavigate();

  // const { user } = useSelector((state) => state.auth);

  // useEffect(() => {

  //     navigate(PATH.STATS);
    
  // });

  // if (user === undefined) return <FullScreenLoader />;

  return  (
    <Public>
      {element}
    </Public>
  );
}

PublicRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PublicRoute;
