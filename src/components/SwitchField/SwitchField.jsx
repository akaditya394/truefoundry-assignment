import PropTypes from "prop-types";
const SwitchField = ({ schema, formData, onChange }) => {
  const { label, jsonKey } = schema;
  return (
    <div key={jsonKey}>
      <label htmlFor={jsonKey}>{label}</label>
      <input
        type="checkbox"
        id={jsonKey}
        name={jsonKey}
        checked={formData[jsonKey] || false}
        onChange={() => onChange(jsonKey, !formData[jsonKey])}
      />
    </div>
  );
};

SwitchField.propTypes = {
  schema: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SwitchField;
