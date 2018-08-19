import * as React from "react";
import { Button, Form, FormGroup, FormFeedback, Label } from "reactstrap";
import * as yup from "yup";
import { withFormik, Field, FormikProps } from "formik";
import cx from "classnames";

export interface IFormNewProps {}

interface IFormValues {
  firstname: string;
  lastname?: string;
  email: string;
}

const InnerForm = (props: FormikProps<IFormValues>) => {
  const { handleSubmit, touched, errors, isSubmitting } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>First name</Label>
          <Field
            type="text"
            name="firstname"
            placeholder="First name"
            className={cx("form-control", {
              "is-invalid": errors.firstname && touched.firstname
            })}
          />
          <FormFeedback>{errors.firstname}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Field
            type="text"
            name="lastname"
            placeholder="Last name"
            className={cx("form-control", {
              "is-invalid": errors.lastname && touched.lastname
            })}
          />
          <FormFeedback>{errors.lastname}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Email address</Label>
          <Field
            type="email"
            name="email"
            placeholder="Email address"
            className={cx("form-control", {
              "is-invalid": errors.email && touched.email
            })}
          />
          <FormFeedback>{errors.email}</FormFeedback>
        </FormGroup>
        <Button type="submit" disabled={isSubmitting} color="primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const IForm = withFormik<{}, IFormValues>({
  mapPropsToValues: () => {
    return {
      firstname: "",
      lastname: "",
      email: ""
    };
  },
  validationSchema: yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string(),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required.")
  }),
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }
})(InnerForm);

const FormNew = () => (
  <div>
    <IForm />
  </div>
);

export default FormNew;
