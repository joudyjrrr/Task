import { MenuItem } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import dialCodes from "../../constant/dialCode";
import { useLocales } from "../../locales";
import RHFSelect from "./RHFSelect";
import RHFTextField from "./RHFTextField";
import { transparentBorderTxtField, txtFieldBorderStyle } from "./style";

const defaultValue = dialCodes[0].dial_code;

const RHFPhoneNumber = ({ inputName, selectName, label, isLableinTop }) => {
  const { control, getValues, setValue, trigger } = useFormContext();
  const { translate } = useLocales();

  const changePhoneNumberHandler = (isSelectValue, e) => {
    const inputValue = !isSelectValue
      ? e.target.value
      : getValues(inputName) || defaultValue;
    const selectValue = isSelectValue
      ? e.target.value
      : getValues(selectName) || defaultValue;
    const newValue = isSelectValue ? selectValue : inputValue;

    if (isSelectValue) {
      setValue(selectName, newValue);
      setValue(inputName, newValue + " ");
      return;
    } else if (!inputValue.includes(selectValue + " ")) {
      setValue(inputName, selectValue + " ");
      return;
    }
    setValue(inputName, newValue);
  };

  const bulrInputHandler = () => {
    trigger(inputName);
  };

  return (
    <RHFTextField
      name={inputName}
      onChange={changePhoneNumberHandler.bind(null, false)}
      label={label}
      sx={{ "& .MuiOutlinedInput-input": { pl: "10px" } }}
      defaultValue={defaultValue + " "}
      onBlur={bulrInputHandler}
      isLableinTop={isLableinTop}
      InputProps={{
        startAdornment: (
          <RHFSelect
            name={selectName}
            defaultValue={defaultValue}
            sx={{
              ...transparentBorderTxtField,

              "& .MuiSvgIcon-root": {
                right: "-6px!important",
                top: "0%",
                marginInlineStart: "18px",
              },
              "& .country-name": {
                display: "none",
              },
              width: "40px",
            }}
            // value={getValues(selectName)}
            SelectProps={{
              native: false,
            }}
            onChange={changePhoneNumberHandler.bind(null, true)}
          >
            {dialCodes.map((country) => (
              <MenuItem
                key={country.dial_code}
                sx={{
                  fontFamily: "segoe",
                }}
                value={country.dial_code}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    className="country-name"
                    style={{ marginInlineStart: "8px" }}
                  >
                    {country.name}
                  </span>
                  <span>{country.flag}</span>
                </div>
              </MenuItem>
            ))}
          </RHFSelect>
        ),
      }}
    />
  );
};

export default RHFPhoneNumber;

const PhoneInputSx = { display: "flex" };

const selectSx = {
  width: "60px",
  "& fieldset": {
    borderRight: "none",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
  },
};

const inputSx = {
  ...txtFieldBorderStyle,
  width: "100%",
  "& fieldset": {
    borderLeft: "none",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
};
