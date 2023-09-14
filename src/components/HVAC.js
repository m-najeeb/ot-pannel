import React from "react";
import { useFormik } from "formik";
import "./HVAC.css";

const initialValues = {
  slaveID: "",
  functionalCode: "",
  baudRate: "",
  temperatureControl: "",
  pressureControl: "",
  airflowControl: "",
  fanControl: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.slaveID) {
    errors.slaveID = "Required";
  }

  if (!values.functionalCode) {
    errors.functionalCode = "Required";
  }

  if (!values.baudRate) {
    errors.baudRate = "Required";
  }

  if (!values.temperatureControl) {
    errors.temperatureControl = "Required";
  }

  if (!values.pressureControl) {
    errors.pressureControl = "Required";
  }

  if (!values.airflowControl) {
    errors.airflowControl = "Required";
  }

  if (!values.fanControl) {
    errors.fanControl = "Required";
  }

  return errors;
};

function HVAC() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="hvac-container">
            <div className="hvac-container-items">
              <div>
                <label htmlFor="slaveID">Slave ID</label>
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  id="slaveID"
                  name="slaveID"
                  {...formik.getFieldProps("slaveID")}
                />
                {formik.touched.slaveID && formik.errors.slaveID ? (
                  <div>{formik.errors.slaveID}</div>
                ) : null}
              </div>
            </div>
            <div className="hvac-container-items">
              <div>
                <label htmlFor="functionalCode">Functional Code</label>
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  id="functionalCode"
                  name="functionalCode"
                  {...formik.getFieldProps("functionalCode")}
                />
                {formik.touched.functionalCode &&
                formik.errors.functionalCode ? (
                  <div>{formik.errors.functionalCode}</div>
                ) : null}
              </div>
            </div>
            <div className="hvac-container-items">
              <div>
                <label htmlFor="baudRate">Baud Rate</label>
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  id="baudRate"
                  name="baudRate"
                  {...formik.getFieldProps("baudRate")}
                />
                {formik.touched.baudRate && formik.errors.baudRate ? (
                  <div>{formik.errors.baudRate}</div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="hvac-container">
            <div>
              <label htmlFor="temperatureControl">Temperature Control</label>
            </div>
            <div>
              <input
                type="text"
                className="l"
                id="temperatureControl"
                placeholder="Register Address"
                name="temperatureControl"
                {...formik.getFieldProps("temperatureControl")}
              />
              {formik.touched.temperatureControl &&
              formik.errors.temperatureControl ? (
                <div>{formik.errors.temperatureControl}</div>
              ) : null}
            </div>
          </div>
          <div className="hvac-container">
            <div>
              <label htmlFor="pressureControl">Pressure Control</label>
            </div>
            <div>
              <input
                type="text"
                className="l"
                id="pressureControl"
                placeholder="Register Address"
                name="pressureControl"
                {...formik.getFieldProps("pressureControl")}
              />
              {formik.touched.pressureControl &&
              formik.errors.pressureControl ? (
                <div>{formik.errors.pressureControl}</div>
              ) : null}
            </div>
          </div>
          <div className="hvac-container">
            <div>
              <label htmlFor="airflowControl">Air Flow Control</label>
            </div>
            <div>
              <input
                type="text"
                className="l"
                id="airflowControl"
                placeholder="Register Address"
                name="airflowControl"
                {...formik.getFieldProps("airflowControl")}
              />
              {formik.touched.airflowControl && formik.errors.airflowControl ? (
                <div>{formik.errors.airflowControl}</div>
              ) : null}
            </div>
          </div>
          <div className="hvac-container">
            <div>
              <label htmlFor="fanControl">Fan Control</label>
            </div>
            <div>
              <input
                type="text"
                className="l"
                id="fanControl"
                placeholder="Register Address"
                name="fanControl"
                {...formik.getFieldProps("fanControl")}
              />
              {formik.touched.fanControl && formik.errors.fanControl ? (
                <div>{formik.errors.fanControl}</div>
              ) : null}
            </div>
          </div>
          <div className="hvac-container buttons">
            <div>
              <button type="submit" className="btn">
                Save
              </button>
            </div>
            <div>
              <button className="btn">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default HVAC;
