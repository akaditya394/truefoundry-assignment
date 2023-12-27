import styles from "./TextInputField.module.css";
import PropTypes from "prop-types";

const TextInputField = ({ schema, formData, onChange }) => {
  const { label, placeholder, jsonKey } = schema;
  return (
    <div key={jsonKey}>
      <label className={styles.label} htmlFor={jsonKey}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        id={jsonKey}
        name={jsonKey}
        value={formData[jsonKey] || ""}
        placeholder={placeholder}
        onChange={(e) => onChange(jsonKey, e.target.value)}
      />
    </div>
  );
};

TextInputField.propTypes = {
  schema: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputField;
