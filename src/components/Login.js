import React, { useRef } from "react";
import { Navigate } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   } else if (values.name.length > 15) {
//     errors.name = "Must be 15 characters or less";
//   }
//   return errors;
// };

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const Login = () => {
  //   const inputRef = useRef();
  const getName = localStorage.getItem("name");

  //   const handleSubmit = () => {
  //     return (
  //       inputName.current.value === "Tonny" &&
  //       localStorage.setItem("name", "Tonny")
  //     );
  //   };

  //   const formik = useFormik({
  //     initialValues: {
  //       name: "",
  //     },
  //     validationSchema: Yup.object({
  //       name: Yup.string()
  //         .max(15, "Must be 15 characters or less")
  //         .required("Required"),
  //     }),
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });

  return (
    // { getName ? <Navigate to = "/" /> : (

    getName ? (
      <Navigate to="/" replace={true} />
    ) : (
      <Formik
        initialValues={{ name: "Tonny" }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            console.log(values.name);
            values.name === "Tonny" &&
              localStorage.setItem("name", values.name);
            window.location.reload();
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* {getName ? (
        <Navigate to="/" replace={true} />
      ) : ( */}
        {/* {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps("name")}
            ref={inputRef}
            defaultValue="Tonny"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
          ></input> */}
        {/* {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null} */}

        {/* <button type="submit">Login</button>
        </form>
      )} */}
        {/* )} */}
        <Form>
          {/* <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" /> */}

          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Name"
            // defaultValue="Tonny"
          />

          <button type="submit">Login</button>
        </Form>
      </Formik>
    )
    // )}
  );
};

export default Login;
