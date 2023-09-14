import React from "react";
import { useFormik } from "formik";
import "./Network.css";

const initialValues = {
  ipAddress: "",
  address: "",
  baudRate: "",
  subnetMask: "",
  gateway: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validate = (values) => {
  let errors = {};

  if (!values.ipAddress) {
    errors.ipAddress = "Required";
  }

  if (!values.address) {
    errors.address = "Required";
  }

  if (!values.baudRate) {
    errors.baudRate = "Required";
  }

  if (!values.subnetMask) {
    errors.subnetMask = "Required";
  }

  if (!values.gateway) {
    errors.gateway = "Required";
  }

  return errors;
};

function Network() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="network-container-title">
          <div>
            <h4>Ethernet Setting</h4>
          </div>
          <div>
            <h4>RS - 485 Setting</h4>
          </div>
        </div>
        <div className="network-container">
          <div className="network-container">
            <div>
              <label htmlFor="ipAddress">IP Address</label>
            </div>
            <div>
              <input
                type="text"
                className=""
                id="ipAddress"
                name="ipAddress"
                {...formik.getFieldProps("ipAddress")}
              />
              {formik.touched.ipAddress && formik.errors.ipAddress ? (
                <div>{formik.errors.ipAddress}</div>
              ) : null}
            </div>
          </div>
          <div className="network-container">
            <div>
              <label htmlFor="address">Address</label>
            </div>
            <div>
              <input
                type="text"
                className=""
                id="address"
                name="address"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && formik.errors.address ? (
                <div>{formik.errors.address}</div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="network-container">
          <div className="network-container">
            <div>
              <label htmlFor="subnetMask">Subnet Mask</label>
            </div>
            <div>
              <input
                type="text"
                className=""
                id="subnetMask"
                name="subnetMask"
                {...formik.getFieldProps("subnetMask")}
              />
              {formik.touched.subnetMask && formik.errors.subnetMask ? (
                <div>{formik.errors.subnetMask}</div>
              ) : null}
            </div>
          </div>
          <div className="network-container">
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
        <div className="network-container">
          <div>
            <label htmlFor="gateway">Gateway</label>
          </div>
          <div>
            <input
              type="text"
              className=""
              id="gateway"
              name="gateway"
              {...formik.getFieldProps("gateway")}
            />
            {formik.touched.gateway && formik.errors.gateway ? (
              <div>{formik.errors.gateway}</div>
            ) : null}
          </div>
        </div>
        <div className="network-container buttons">
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
    </>
  );
}

export default Network;
