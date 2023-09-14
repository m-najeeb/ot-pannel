import React from "react";
import { useFormik } from "formik";
import "./IsolationPT.css";

const initialValues = {
  slaveID: "",
  functionalCode: "",
  baudRate: "",
  insulation: "",
  voltage: "",
  current: "",
  temperature: "",
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

  if (!values.insulation) {
    errors.insulation = "Required";
  }

  if (!values.voltage) {
    errors.voltage = "Required";
  }

  if (!values.current) {
    errors.current = "Required";
  }

  if (!values.temperature) {
    errors.temperature = "Required";
  }

  return errors;
};

function IsolationPT() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="isolation-pt">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="slaveID">Slave ID</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="slaveID"
                name="slaveID"
                {...formik.getFieldProps("slaveID")}
              />
              {formik.touched.slaveID && formik.errors.slaveID ? (
                <div>{formik.errors.slaveID}</div>
              ) : null}
            </div>
            <div className="col-md-3">
              <label htmlFor="functionalCode">Functional Code</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="functionalCode"
                name="functionalCode"
                {...formik.getFieldProps("functionalCode")}
              />
              {formik.touched.functionalCode && formik.errors.functionalCode ? (
                <div>{formik.errors.functionalCode}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="baudRate">Baud Rate</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="baudRate"
                name="baudRate"
                {...formik.getFieldProps("baudRate")}
              />
              {formik.touched.baudRate && formik.errors.baudRate ? (
                <div>{formik.errors.baudRate}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="insulation">Insulation</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                id="insulation"
                placeholder="Register Address"
                name="insulation"
                {...formik.getFieldProps("insulation")}
              />
              {formik.touched.insulation && formik.errors.insulation ? (
                <div>{formik.errors.insulation}</div>
              ) : null}
            </div>
            <div className="col-md-4">
              <select className="form-select" name="insulation" id="insulation">
                <option defaultValue>Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="voltage">Voltage</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                id="voltage"
                placeholder="Register Address"
                name="voltage"
                {...formik.getFieldProps("voltage")}
              />
              {formik.touched.voltage && formik.errors.voltage ? (
                <div>{formik.errors.voltage}</div>
              ) : null}
            </div>
            <div className="col-md-4">
              <select className="form-select" name="voltage" id="voltage">
                <option defaultValue>Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="current">Current</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                id="current"
                name="current"
                placeholder="Register Address"
                {...formik.getFieldProps("current")}
              />
              {formik.touched.current && formik.errors.current ? (
                <div>{formik.errors.current}</div>
              ) : null}
            </div>
            <div className="col-md-4">
              <select className="form-select" name="current" id="current">
                <option defaultValue>Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="temperature">Temperature</label>
            </div>
            <div className="col-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Register Address"
                id="temperature"
                name="temperature"
                {...formik.getFieldProps("temperature")}
              />
              {formik.touched.temperature && formik.errors.temperature ? (
                <div>{formik.errors.temperature}</div>
              ) : null}
            </div>
            <div className="col-md-4">
              <select
                className="form-select"
                name="temperature"
                id="temperature"
              >
                <option defaultValue>Unit</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="row isolation-btns">
            <button type="submit" className="btn">
              Save
            </button>
            <button className="btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default IsolationPT;
