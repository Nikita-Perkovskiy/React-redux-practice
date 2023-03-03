import { createSlice } from "@reduxjs/toolkit";

export const defaultState = {
  cv: {
    name: "igor tobolyakov",
    profession: "Frontend developer",
    region: "Ukraine, Kiev",
    skype: "",
    email: "igor.dan596@google.com",
    phone: "073 000 00 00",
    telegram: "",
    github: "",
    gitlab: "",
    linkedin: "",
    photo: "",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    workProfession: "Lorem Ipsum is simply dummy text",
    workTimeStart: "",
    workTimeEnd: "",
    workCompanyName: "Lorem Ipsum is simply dummy",
    workJobDescription:
      "Lorem Ipsum is simply dummy text of the printing  and typesetting industry. Lorem Ipsum has been the  industry's standard dummy text ever since the 1500s, when an",
    professionHardSkills:
      "ReactJS; JavaScript; HTML5/HTML; CSS/CSS3; SCSS; Flexbox, GridCSS; Jade,Pug; Adaptive design, Cross-browser coding",
    professionSoftSkills:
      "Communicable; Active life position; Purposefulness; Creativity; Organizational qualities, sociability; Responsibility: I have leadership. qualities and experience in tean work and management; Fasy to learn;",
    professionMainSkills:
      "ReactJS; JavaScript; HTML5/HTM; CSS/CSS3; SCSS; Flexbox, GridCSS; Jade,Pug; Adaptive design, Cross-browser coding",
    languageEnglish: "Proficiency",
    languageUkrainian: "Proficiency",
    educationTitle: "Lorem Ipsum is simply dummy text",
    educationTime: "2014 - 2016",
    educationDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    coursesTitle: "DAN IT",
    coursesTime: "2014 - 2016",
    coursesDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  loading: true,
};

const initialState = {
  count: 0,
};

export const coutSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    actionIncrease: (state) => {
      state.count += 1;
    },
    actionDecrease: (state) => {
      state.count -= 1;
    },
  },
});

export const { actionIncrease, actionDecrease } = coutSlice.actions;

export default coutSlice.reducer;
