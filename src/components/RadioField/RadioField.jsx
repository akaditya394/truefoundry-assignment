import PropTypes from "prop-types";
const RadioField = ({ schema, formData, onChange }) => {
  const { label, options, jsonKey } = schema;
  return (
    <div key={jsonKey}>
      <label>{label}</label>
      <div>
        {options.map((option) => (
          <label key={option.value}>
            <input
              type="radio"
              name={jsonKey}
              value={option.value}
              checked={formData[jsonKey] === option.value}
              onChange={() => onChange(jsonKey, option.value)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

RadioField.propTypes = {
  schema: PropTypes.object.isRequired, // Add PropTypes validation
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioField;
