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
import ValidationErrorText from "../../components/FormComponents/ValidationErrorText";
import { getUID } from "../../api/authProvider";
import { createEvent } from "../../api/eventApi";

import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

const AddNewProject = () => {
  const router = useRouter();
  return (
    <div className="flex-1">
      <CommonLayout title={"Add new event"}>
        <Image
          src={"/event.png"}
          width={"300px"}
          lang={"fill"}
          height={"200px"}
        />
        <Formik
          initialValues={{
            name: "",
            location: "",
            date: "",
            description: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(50, "Must be 15 characters or less")
              .required("Name Required"),
            location: Yup.string()
              .max(50, "Must be 20 characters or less")
              .required("Location Required"),
            date: Yup.string().required("Date Required"),
            description: Yup.string().max(
              200,
              "Must not be exceeded 200 characters"
            ),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            let _values = values;
            const uid = getUID();
            setSubmitting(false);
            createEvent(uid, values)
              .then(() => {
                setSubmitting(false);
                resetForm();
                toast.success("Event Created Successfully !");
                router.push("/home");
              })
              .catch((e) => {
                toast.error("Event Created Unsuccessfully !");
                console.log(e);
              });
          }}
        >
          <Form>
            <SectionColumn className={"items-center "}>
              <label htmlFor="name" className={"w-10/12"}>
                Event Name
              </label>
              <Field className={"main-text-field"} name="name" type="text" />
              <ValidationErrorText name="name" />

              <label htmlFor="location" className={"w-10/12"}>
                Location
              </label>
              <Field
                className={"main-text-field"}
                name="location"
                type="text"
              />
              <ValidationErrorText name="location" />

              <label htmlFor="date" className={"w-10/12"}>
                Date
              </label>
              <Field className={"main-text-field"} name="date" type="date" />
              <ValidationErrorText name="date" />

              <label htmlFor="description" className={"w-10/12"}>
                Description
              </label>
              <Field
                className={"main-text-field"}
                name="description"
                type="text"
              />
              <ValidationErrorText name="description" />
            </SectionColumn>
            <SectionRow className={"w-full justify-center px-20 mt-14"}>
              <PrimaryButton
                title={"Submit"}
                type={"submit"}
                className={"!mb-6"}
              />

              <CancelButton
                title={"Cancel"}
                type={"reset"}
                className={"!mb-6"}
              />
            </SectionRow>
          </Form>
        </Formik>
      </CommonLayout>
    </div>
  );
};

export default AddNewProject;
