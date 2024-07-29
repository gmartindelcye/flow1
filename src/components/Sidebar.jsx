// src/components/Sidebar.jsx
import PropTypes from "prop-types";

const Sidebar = ({ selectedOption, setSelectedOption }) => {
  const options = [
    { name: "Simple Flow", value: "simple-flow" },
    { name: "Creating Nodes", value: "creating-nodes" },
    { name: "Adding Edges", value: "adding-edges" },
  ];

  return (
    <div className="w-64 h-full bg-gray-800 text-white">
      <h2 className="text-xl font-bold p-4">Menu</h2>
      <ul className="space-y-2">
        {options.map((option) => (
          <li key={option.value}>
            <button
              aria-pressed={selectedOption === option.value}
              className={`w-full text-left p-2 hover:bg-gray-700 ${
                selectedOption === option.value ? "bg-gray-600" : ""
              }`}
              onClick={() => setSelectedOption(option.value)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
};

export default Sidebar;
