import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./UISchemaEditor.module.css";

const UISchemaEditor = ({ onSchemaChange }) => {
  const [schemaText, setSchemaText] = useState("");

  useEffect(() => {
    try {
      console.log("Parsing:", schemaText);
      const parsedSchema = JSON.parse(schemaText);
      onSchemaChange(parsedSchema);
    } catch (error) {
      console.error("Error parsing UI schema:", error);
    }
  }, [schemaText, onSchemaChange]);

  const handleTextareaChange = (event) => {
    setSchemaText(event.target.value);
  };

  return (
    <div className={styles.editorContainer}>
      <h3>UI Schema Editor</h3>
      <textarea
        className={styles.textarea}
        rows="10"
        cols="50"
        value={schemaText}
        onChange={handleTextareaChange}
        placeholder="Paste your UI schema here..."
      />
    </div>
  );
};

UISchemaEditor.propTypes = {
  onSchemaChange: PropTypes.func.isRequired,
};

export default UISchemaEditor;
