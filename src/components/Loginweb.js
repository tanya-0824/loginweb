import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Your login logic here
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: "url('your-background-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Login Side */}
      <div className="bg-white p-8 shadow-md rounded-md w-96 text-gray-600">
        <div className="flex items-center justify-center mb-4">
          <img src="https://staging-internal.d1nwfechdidmfz.amplifyapp.com/_next/static/media/hifiLogo.6b03b00d.svg" alt="HiFi Icon" className="w-8 h-8 mr-2" />
          <h1 className="text-3xl font-bold">HiFi Pay</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome</h2>
        <p className="text-center mb-4">Sign in to Hifi Pay</p>

        {/* Sign in with Google Container */}
        <div className="mb-4">
          <button className="bg-red-500 text-white p-2 rounded-md flex items-center justify-center w-full">
            <img src="" alt="Google Icon" className="w-6 h-6 mr-2" />
            Sign in using Google
          </button>
        </div>

        {/* OR Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="border-b border-gray-300 w-1/4"></div>
          <span className="text-sm px-2">OR</span>
          <div className="border-b border-gray-300 w-1/4"></div>
        </div>

        {/* Email Container */}
        <div className="mb-4 relative">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.email && formik.errors.email ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Container */}
        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`mt-1 p-2 w-full border rounded-md ${
              formik.touched.password && formik.errors.password ? 'border-red-500' : ''
            }`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>

        {/* Sign In Button */}
        <button
          onClick={formik.handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-md w-full mb-4"
        >
          Sign In
        </button>

        {/* OR Option */}
        <div className="text-center text-gray-500 mb-4">
          <span>OR</span>
        </div>

        {/* Forgot Password Tag */}
        <div className="text-blue-500 text-center mb-4">
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        {/* Don't have an account Tag */}
        <div className="flex items-center justify-center">
          <span className="text-sm">Don't have an account?</span>
          <a href="/get-started" className="text-blue-500 text-sm ml-1">
            Get Started
          </a>
        </div>

        {/* Form Error */}
        {formik.touched.email || formik.touched.password ? (
          <p className="text-red-500 text-sm mt-4">{formik.errors.email || formik.errors.password}</p>
        ) : null}
      </div>
    </div>
  );
};

export default LoginPage;
