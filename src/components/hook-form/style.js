export const txtFieldBorderStyle = {
  width: "100%",

  "& .MuiFormLabel-root": {
    color: "#BCBCBC",
    fontSize: "16px",
    top: "-3px",
  },
  "& .MuiOutlinedInput-root": {
    height: "100%",
    // "&:hover fieldset": {
    //   borderColor: "rgba(255, 204, 99, 0.3)",
    // },
    "&:hover fieldset": {
      borderColor: "rgba(255, 204, 99, 0.4)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgba(255, 204, 99, 0.3)",
    },
  },
};

export const transparentBorderTxtField = {
  alignItem: "center",
  "& .MuiOutlinedInput-input": {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "16px",
    color: "#535353",
    p: "0px!important",
  },
  "& .MuiInputLabel-root": {
    color: "#121212",
    fontWeight: 500,
  },
  "& .MuiOutlinedInput-root": {
    pr: "0px",
    alignItems: "baseline",
    "& fieldset": {
      borderColor: "transparent!important",
    },
    "&:hover fieldset": {
      borderColor: "transparent!important",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent!important",
    },
  },
};

export const labelSx = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#535353",
  lineHeight: "24px",
  mb: "8px",
};

export const imageTextHelperSx = {
  width: "max-content",
  transform: "translate(0px, -44px)",
  color: "primary.main",
};

export const imageDragDropHereSx = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "18px",
  color: "#9DA0A4",
  paddingTop: "12px",
  paddingBottom: "6px",
  marginTop: "0",
};

export const imageOrSx = {
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "18px",
  color: "#9DA0A4",
};

export const browseFilesForUploadSx = {
  fontSize: "12px",
  fontWeight: "500",
  lineHeight: "18px",
  color: "#121212",
};

export const dialCodeSx = {
  "& fieldset": {
    border: "none !important",
  },
  "& img": {
    marginInlineStart: "0 !important",
  },
  "& .MuiSvgIcon-root": {
    right: "-6px!important",
    top: "0%",
    // marginInlineStart: "18px",
  },
  "& .country-name": {
    display: "none",
  },

  m: 0,
  marginInlineEnd: "20px",
  width: "40px",
};

export const imageBoxSx = {
  paddingTop: "25px",
  paddingBottom: "20px",
  marginBottom: "20px",
  background: "#FAFAFA",
  border: "1px dashed #8AC185",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
};

export const imageInputSx = {
  cursor: "pointer",
};
