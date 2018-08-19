import * as React from "react";
import { Button, Form, FormGroup, FormFeedback, Label } from "reactstrap";
import * as yup from "yup";
import { withFormik, Field, FormikErrors, FormikProps } from "formik";
import cx from "classnames";

export interface IFormSigninProps {}

interface IFormValues {
  username: string;
  password: string;
}

interface IProps {
  submit: (values: IFormValues) => Promise<FormikErrors<IFormValues> | null>;
}

const InnerForm = (props: FormikProps<IFormValues> & IProps) => {
  const { handleSubmit, touched, errors, isSubmitting } = props;
  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup>
          <Label>Username</Label>
          <Field
            type="text"
            name="username"
            className={cx("form-control", {
              "is-invalid": errors.username && touched.username
            })}
          />
          <FormFeedback>{errors.username}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Field
            type="password"
            name="password"
            className={cx("form-control", {
              "is-invalid": errors.password && touched.password
            })}
          />
          <FormFeedback>{errors.password}</FormFeedback>
        </FormGroup>
        <Button
          className="mt-4"
          type="submit"
          block={true}
          disabled={isSubmitting}
          color="primary"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const FormSignin = withFormik<IProps, IFormValues>({
  mapPropsToValues: () => {
    return {
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    username: yup.string().required("Username is required."),
    password: yup.string().required("Password is required")
  }),
  handleSubmit: async (values, { props, setSubmitting, setStatus }) => {
    try {
      await props.submit(values);
      setStatus(true);
    } catch (err) {
      setStatus(err.response);
    }
    setSubmitting(false);
  }
})(InnerForm);

export default FormSignin;
