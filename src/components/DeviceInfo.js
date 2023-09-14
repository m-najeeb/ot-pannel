import React from "react";
import "./DeviceInfo.css";
import { useFormik } from "formik";

const initialValues = {
  serialno: "",
  firmware: "",
  version: "",
  language: "",
  otname: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.serialno) {
    errors.serialno = "Required";
  }

  if (!values.firmware) {
    errors.firmware = "Required";
  }

  if (!values.version) {
    errors.version = "Required";
  }

  if (!values.language) {
    errors.language = "Required";
  }

  if (!values.otname) {
    errors.otname = "Required";
  }

  return errors;
};

function DeviceInfo() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <>
      <div className="device-info">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="serialno">Serial no</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="serialno"
                name="serialno"
                {...formik.getFieldProps("serialno")}
              />
              {formik.touched.serialno && formik.errors.serialno ? (
                <div>{formik.errors.serialno}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="firmware">Firmware</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="firmware"
                name="firmware"
                {...formik.getFieldProps("firmware")}
              />
              {formik.touched.firmware && formik.errors.firmware ? (
                <div>{formik.errors.firmware}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="version">Version</label>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                id="version"
                name="version"
                {...formik.getFieldProps("version")}
              />
              {formik.touched.version && formik.errors.version ? (
                <div>{formik.errors.version}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="language">Language</label>
            </div>
            <div className="col-md-3">
              <select className="form-select" name="language" id="language">
                <option defaultValue>English</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              {formik.touched.language && formik.errors.language ? (
                <div>{formik.errors.language}</div>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="otname">OT Name</label>
            </div>
            <div className="col-md-3">
              <textarea
                type="text"
                className="form-control"
                id="otname"
                name="otname"
                {...formik.getFieldProps("otname")}
              />
              {formik.touched.otname && formik.errors.otname ? (
                <div>{formik.errors.otname}</div>
              ) : null}
            </div>
          </div>
          <div className="row device-info-btns">
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

export default DeviceInfo;
