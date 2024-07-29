// src/components/Flow.jsx
import PropTypes from "prop-types";
import SimpleFlow from "./SimpleFlow";
import CreatingNodes from "./CreatingNodes";
import AddingEdges from "./AddingEdges";

const Flow = ({ selectedOption }) => {
  switch (selectedOption) {
    case "simple-flow":
      return <SimpleFlow />;
    case "creating-nodes":
      return <CreatingNodes />;
    case "adding-edges":
      return <AddingEdges />;
    default:
      return <SimpleFlow />;
  }
};

Flow.propTypes = {
  selectedOption: PropTypes.string.isRequired,
};

export default Flow;
