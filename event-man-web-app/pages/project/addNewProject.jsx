import React from "react";
import CommonLayout from "../../components/Layouts/CommonLayout";
import TextField from "../../components/Input/TextField";
import {
  CancelButton,
  PrimaryButton,
  SecondaryButton,
} from "../../components/Buttons/buttons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  SectionColumn,
  SectionRow,
} from "../../components/Layouts/sectionLayouts";

const AddNewProject = () => {
  return (
    <div className="flex-1">
      <CommonLayout title={"Add new event"}>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <SectionColumn className={"items-center "}>
              <label htmlFor="firstName" className={"w-10/12"}>
                First Name
              </label>
              <Field
                className={"main-text-field"}
                name="firstName"
                type="text"
              />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName" className={"w-10/12"}>
                Last Name
              </label>
              <Field
                className={"main-text-field"}
                name="lastName"
                type="text"
              />
              <ErrorMessage name="lastName" />

              <label htmlFor="email" className={"w-10/12"}>
                Email Address
              </label>
              <Field className={"main-text-field"} name="email" type="email" />
              <ErrorMessage name="email" />
            </SectionColumn>
            <SectionRow className={"w-full justify-center px-20 mt-14"}>
              <PrimaryButton title={"Submit"} type={"submit"} />
              <CancelButton title={"Cancel"} type={"reset"} />
            </SectionRow>
          </Form>
        </Formik>
      </CommonLayout>
    </div>
  );
};

export default AddNewProject;
