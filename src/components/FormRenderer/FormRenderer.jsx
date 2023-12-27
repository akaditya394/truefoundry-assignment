import PropTypes from "prop-types";
import TextInputField from "../TextInputField/TextInputField";
import SelectField from "../SelectField/SelectField";
import SwitchField from "../SwitchField/SwitchField";
import RadioField from "../RadioField/RadioField";
import styles from "./FormRenderer.module.css";

const FormRenderer = ({ schema, onChange, formData }) => {
  console.log("Number of form elements:", schema.length); // Debugging log

  const renderField = (field) => {
    switch (field.uiType) {
      case "Input":
        return (
          <TextInputField
            key={field.jsonKey}
            schema={field}
            formData={formData}
            onChange={onChange}
          />
        );
      case "Select":
        return (
          <SelectField
            key={field.jsonKey}
            schema={field}
            formData={formData}
            onChange={onChange}
          />
        );
      case "Switch":
        return (
          <SwitchField
            key={field.jsonKey}
            schema={field}
            formData={formData}
            onChange={onChange}
          />
        );
      case "Radio":
        return (
          <RadioField
            key={field.jsonKey}
            schema={field}
            formData={formData}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.formContainer}>
      {schema.map((field) => renderField(field))}
    </div>
  );
};

FormRenderer.propTypes = {
  schema: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormRenderer;
