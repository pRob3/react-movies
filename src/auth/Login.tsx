import axios from 'axios';
import { authenticationResponse, userCredentials } from './auth.model';
import AuthForm from './AuthForm';
import { urlAccounts } from '../endpoints';
import { useContext, useState } from 'react';
import DisplayErrors from '../utils/DisplayErrors';
import { getClaims, saveToken } from './handleJWT';
import AuthenticationContext from './AuthenticationContext';
import { useHistory } from 'react-router-dom';
import './Login.css';
import TextField from '../forms/TextField';
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '../utils/Button';

export default function Login() {
  const [errors, setErrors] = useState<string[]>([]);
  const { update } = useContext(AuthenticationContext);
  const history = useHistory();

  async function login(credentials: userCredentials) {
    try {
      setErrors([]);
      const response = await axios.post<authenticationResponse>(
        `${urlAccounts}/login`,
        credentials
      );
      saveToken(response.data);
      update(getClaims());
      history.push('/');
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  return (
    <div className='login-container text-center'>
      <main className='form-signin w-100 m-auto'>
        <h1 className='h3 mb-3 fw-normal'>Login</h1>
        <DisplayErrors errors={errors} />
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
          validationSchema={Yup.object({
            email: Yup.string()
              .required('Required')
              .email('You have to insert a valid email'),
            password: Yup.string().required('Required'),
          })}
        >
          {(formikProps) => (
            <Form className='needs-validation'>
              <div className='form-floating'>
                <TextField
                  displayName='Email'
                  field='email'
                  type='email'
                  classes='form-control'
                  placeholder='name@example.com'
                  required={true}
                />
                <label htmlFor='email'>Email address</label>
              </div>
              <div className='form-floating'>
                <TextField
                  displayName='Password'
                  field='password'
                  type='password'
                  placeholder='Password'
                  required={true}
                />
              </div>

              <div className='checkbox mb-3'>
                <label>
                  <input type='checkbox' value='remember-me' /> Remember me
                </label>
              </div>
              <Button
                disabled={formikProps.isSubmitting}
                type='submit'
                className='w-100 btn btn-lg btn-primary'
              >
                Sign in
              </Button>
              <p className='mt-5 mb-3 text-muted'>&copy; 2017–2022</p>
            </Form>
          )}
        </Formik>
      </main>
    </div>
    // <h3>Login</h3>
    // <DisplayErrors errors={errors} />
    // <AuthForm
    //   model={{ email: '', password: '' }}
    //   onSubmit={async (values) => await login(values)}
    // />
  );
}
