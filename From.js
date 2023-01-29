import { Formik, Form, Field, ErrorMessage } from 'formik';

function SignupForm() {
  const handleSubmit = (values) => {
    console.log(values);
    // Submit form data to the server here
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
          errors.email = 'Invalid email format';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
          errors.password = 'Password must be at least 8 characters long, and contain at least one letter and one number';
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = 'Confirm Password is required';
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = 'Passwords do not match';
        }
        return errors;
      }}
    >
      {({ touched, errors, isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
