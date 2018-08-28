import * as React from "react";
import { Button, FormGroup } from "@blueprintjs/core";
import * as yup from "yup";
import { withFormik, Field, FormikErrors, FormikProps } from "formik";

export interface IFormSignupProps {}

interface IFormValues {
  firstname: string;
  lastname?: string;
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
      <form onSubmit={handleSubmit} noValidate>
        <FormGroup
          helperText={errors.firstname && touched.firstname && errors.firstname}
          label="First name"
          intent={errors.firstname && touched.firstname ? "danger" : "none"}
          labelFor="text-input"
        >
          <div className="bp3-input-group">
            <Field
              type="text"
              name="firstname"
              id="firstname"
              className="bp3-input"
            />
          </div>
        </FormGroup>
        <FormGroup
          helperText={errors.lastname && touched.lastname && errors.lastname}
          label="Last name"
          intent={errors.lastname && touched.lastname ? "danger" : "none"}
          labelFor="text-input"
        >
          <div className="bp3-input-group">
            <Field
              type="text"
              name="lastname"
              id="lastname"
              className="bp3-input"
            />
          </div>
        </FormGroup>
        <FormGroup
          helperText={errors.username && touched.username && errors.username}
          label="Username"
          intent={errors.username && touched.username ? "danger" : "none"}
          labelFor="text-input"
        >
          <div className="bp3-input-group">
            <Field
              type="text"
              name="username"
              id="username"
              className="bp3-input"
            />
          </div>
        </FormGroup>
        <FormGroup
          helperText={errors.password && touched.password && errors.password}
          label="Password"
          intent={errors.password && touched.password ? "danger" : "none"}
          labelFor="text-input"
        >
          <div className="bp3-input-group">
            <Field
              type="password"
              name="password"
              id="password"
              className="bp3-input"
            />
          </div>
        </FormGroup>
        <div className="mb-3">
          <Button
            type="submit"
            disabled={isSubmitting}
            fill={true}
            intent="primary"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

const FormSignup = withFormik<IProps, IFormValues>({
  mapPropsToValues: () => {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    };
  },
  validationSchema: yup.object().shape({
    firstname: yup.string().required("First name is required."),
    lastname: yup.string(),
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

export default FormSignup;
