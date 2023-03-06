import React from "react";
import Input from "../Form/Input/Input";
import Textarea from "../Form/Textarea/Textarea";
import { Formik } from "formik";
import "./index.scss";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { selectorCvData } from "../../selects";
import { setCvData } from "../../store/Actions";

const Block2 = () => {
  const cvData = useSelector(selectorCvData);
  const dispatch = useDispatch();

  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "#ffffff" }}>
      <Container>
        <h1>2</h1>
        <div className="page__dashboard">
          <div className="page">
            {" "}
            <Formik
              initialValues={cvData}
              onSubmit={(values) => {
                dispatch(setCvData(values));
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <fieldset className="form-block">
                    <legend>User block</legend>
                    <div className="row">
                      <div className="col">
                        <Input
                          name="name"
                          placeholder="name"
                          className="mb-3"
                          label="Name"
                          error={errors.name && touched.name}
                        />
                        <Input
                          name="profession"
                          placeholder="profession"
                          className="mb-3"
                          label="Profession"
                          error={errors.profession && touched.profession}
                        />
                        <Input
                          name="region"
                          placeholder="Ukraine, Kiev"
                          label="Region"
                          error={errors.region && touched.region}
                        />
                      </div>
                      <div className="col-6">
                        <div className="row">
                          <div className="col">
                            <Input
                              name="skype"
                              placeholder="skype"
                              className="mb-3"
                              label="Skype"
                              error={errors.skype && touched.skype}
                            />
                            <Input
                              name="email"
                              type="email"
                              placeholder="email"
                              className="mb-3"
                              label="Email"
                              error={errors.email && touched.email}
                            />
                            <Input
                              name="phone"
                              type="number"
                              placeholder="phone"
                              className="mb-3"
                              label="Phone"
                              error={errors.phone && touched.phone}
                            />
                            <Input
                              name="telegram"
                              placeholder="telegram"
                              label="Telegram"
                              error={errors.telegram && touched.telegram}
                            />
                          </div>
                          <div className="col">
                            <Input
                              name="github"
                              placeholder="github"
                              className="mb-3"
                              label="Github"
                              error={errors.github && touched.github}
                            />
                            <Input
                              name="gitlab"
                              placeholder="gitlab"
                              className="mb-3"
                              label="Gitlab"
                              error={errors.gitlab && touched.gitlab}
                            />
                            <Input
                              name="linkedin"
                              placeholder="linkedin"
                              label="Linkedin"
                              error={errors.linkedin && touched.linkedin}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <Input name="photo" type="file" label="Add photo" />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-block">
                    <legend>Summary</legend>

                    <Textarea
                      name="summary"
                      label="Summary"
                      error={errors.summary && touched.summary}
                    />
                  </fieldset>
                  <fieldset className="form-block">
                    <legend>Work</legend>
                    <div className="row mb-3">
                      <div className="col">
                        <Input
                          name="workProfession"
                          placeholder="Profession"
                          label="Profession"
                          error={
                            errors.workProfession && touched.workProfession
                          }
                        />
                      </div>
                      <div className="col">
                        <div className="row">
                          <div className="col">
                            <Input
                              name="workTimeStart"
                              type="number"
                              placeholder="Time start"
                              label="Time start"
                              error={
                                errors.workTimeStart && touched.workTimeStart
                              }
                            />
                          </div>
                          <div className="col">
                            <Input
                              name="workTimeEnd"
                              type="number"
                              placeholder="Time end"
                              label="Time end"
                              error={errors.workTimeEnd && touched.workTimeEnd}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Input
                      name="workCompanyName"
                      placeholder="company name"
                      className="mb-3"
                      label="Company name"
                      error={errors.workCompanyName && touched.workCompanyName}
                    />
                    <Textarea
                      name="workJobDescription"
                      placeholder="Job Description"
                      label="Job Description"
                    />
                  </fieldset>
                  <fieldset className="form-block">
                    <legend>Profession info</legend>
                    <div className="row">
                      <div className="col">
                        <Input
                          name="professionHardSkills"
                          placeholder="ReactJS, JavaScript; SCSS"
                          label="Hard skills"
                          error={
                            errors.professionHardSkills &&
                            touched.professionHardSkills
                          }
                        />
                      </div>
                      <div className="col">
                        <Input
                          name="professionSoftSkills"
                          placeholder="Communicable; Purposefulness;"
                          label="Soft skills"
                          error={
                            errors.professionSoftSkills &&
                            touched.professionSoftSkills
                          }
                        />
                      </div>
                      <div className="col">
                        <Input
                          name="professionMainSkills"
                          placeholder="ReactJS, JavaScript; SCSS"
                          label="Main skills"
                          error={
                            errors.professionMainSkills &&
                            touched.professionMainSkills
                          }
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-block">
                    <legend>Languages</legend>
                    <div className="row">
                      <div className="col">
                        <Input
                          name="languageEnglish"
                          placeholder="Proficiency"
                          label="English"
                          error={
                            errors.languageEnglish && touched.languageEnglish
                          }
                        />
                      </div>
                      <div className="col">
                        <Input
                          name="languageUkrainian"
                          placeholder="Proficiency"
                          label="Ukrainian"
                          error={
                            errors.languageUkrainian &&
                            touched.languageUkrainian
                          }
                        />
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-block">
                    <legend>Education</legend>
                    <div className="row">
                      <div className="col">
                        <Input
                          name="workCompanyName"
                          placeholder="Education title"
                          className="mb-3"
                          label="Education title"
                          error={
                            errors.workCompanyName && touched.workCompanyName
                          }
                        />
                        <Input
                          name="workCompanyName"
                          placeholder="2010 - 2014"
                          label="Education time"
                          error={
                            errors.workCompanyName && touched.workCompanyName
                          }
                        />
                      </div>
                      <div className="col">
                        <Textarea
                          name="educationDescription"
                          label="Education Description"
                          error={
                            errors.educationDescription &&
                            touched.educationDescription
                          }
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className="form-block">
                    <legend>Courses</legend>
                    <div className="row">
                      <div className="col">
                        <Input
                          name="coursesTitle"
                          className="mb-3"
                          placeholder="Courses title"
                          label="Courses title"
                          error={errors.coursesTitle && touched.coursesTitle}
                        />
                        <Input
                          name="coursesTime"
                          placeholder="Courses time"
                          label="Courses time"
                          error={errors.coursesTime && touched.coursesTime}
                        />
                      </div>
                      <div className="col">
                        <Textarea
                          name="coursesDescription"
                          label="Courses Description"
                          error={
                            errors.coursesDescription &&
                            touched.coursesDescription
                          }
                        />
                      </div>
                    </div>
                  </fieldset>

                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Create CV
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Block2;
