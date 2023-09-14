import React from "react";
import "./MainDisplay.css";
import { Formik, Field, Form } from "formik";

const initialValues = {
  checked: [],
};

const onSubmit = (values) => {
  console.log(values.checked);
};

function MainDisplay() {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <div className="main-display-container">
          <div>
            <label htmlFor="temperature">Temperature </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="temperature"
            />
          </div>
          <div>
            <label htmlFor="door">Door </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="door"
            />
          </div>
        </div>
        <div className="main-display-container">
          <div>
            <label htmlFor="pressure">Pressure </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="pressure"
            />
          </div>
          <div>
            <label htmlFor="curtain">Curtain </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="curtain"
            />
          </div>
        </div>
        <div className="main-display-container">
          <div>
            <label htmlFor="humidity">Humidity </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="humidity"
            />
          </div>
          <div>
            <label htmlFor="damper">Damper </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="damper"
            />
          </div>
        </div>
        <div className="main-display-container">
          <div>
            <label htmlFor="airFlow">Air Flow </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="airFlow"
            />
          </div>
          <div>
            <label htmlFor="agss">AGSS </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="agss"
            />
          </div>
        </div>
        <div className="main-display-container">
          <div>
            <label htmlFor="medicalGas">Medical Gas </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="medicalGas"
            />
          </div>
          <div>
            <label htmlFor="xRayWarning">X-Ray Warning </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="xRayWarning"
            />
          </div>
        </div>
        <div className="main-display-container">
          <div>
            <label htmlFor="hepaFilter">HEPA Filter </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="hepaFilter"
            />
          </div>
          <div>
            <label htmlFor="operationStatus">Operation Status </label>
          </div>
          <div>
            <Field
              type="checkbox"
              className="formik-checkbox"
              name="checked"
              value="operationStatus"
            />
          </div>
        </div>
        <div className="main-display-container buttons">
          <div>
            <button type="submit" className="btn">
              Save
            </button>
          </div>
          <div>
            <button type="button" className="btn">
              Cancel
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default MainDisplay;
