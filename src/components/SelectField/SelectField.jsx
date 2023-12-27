import PropTypes from "prop-types";
import styles from "./SelectField.module.css";

const SelectField = ({ schema, formData, onChange }) => {
  const { label, options, jsonKey } = schema;

  // Check if options is an array before using map
  const optionElements = Array.isArray(options)
    ? options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))
    : null;

  return (
    <div key={jsonKey}>
      <label className={styles.label} htmlFor={jsonKey}>
        {label}
      </label>
      <select
        className={styles.select}
        id={jsonKey}
        name={jsonKey}
        value={formData[jsonKey] || ""}
        onChange={(e) => onChange(jsonKey, e.target.value)}
      >
        {optionElements}
      </select>
    </div>
  );
};

SelectField.propTypes = {
  schema: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectField;
