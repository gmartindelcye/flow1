// src/pages/FlowPage.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar"; // Adjust the import path if needed
import Flow from "../components/Flow"; // Import the Flow component
import { SimpleFlow, CreatingNodes, AddingEdges } from "../components/Flows"; // Ensure these components are correctly exported

const FlowPage = () => {
  const [selectedOption, setSelectedOption] = useState("simple-flow"); // Default option

  return (
    <div className="flex">
      <Sidebar
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <div className="flex-1 p-4">
        <Flow selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default FlowPage;
