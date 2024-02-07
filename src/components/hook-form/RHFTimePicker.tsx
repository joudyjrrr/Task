import { Box, TextField, Typography } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLocales } from "../../locales";
import ClockIcon from "../iconify/ClockIcon";
// import { labelSx } from "./styles";

const RHFTimePicker = ({
  name,
  label,
  defaultValue,
  minTime,
  maxTime,
  disabled,
  sx,
  showTopLabel,
}) => {
  const { control } = useFormContext();
  const { translate } = useLocales();
  const timeRef = useRef();

  const [forceRender, setForceRender] = useState(false);

  useEffect(() => {
    if (!forceRender) setForceRender(true);
  }, []);

  return (
    <>
      {showTopLabel && <Typography >{translate(label)}</Typography>}
      <Box ref={timeRef} sx={sx}>
        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error, invalid } }) => (
            <TimePicker
              {...field}
              defaultValue={defaultValue}
              minTime={minTime}
              maxTime={maxTime}
              disabled={disabled}
              label={!showTopLabel ? translate(label) : undefined}
              fullWidth
              sx={{
                backgroundColor: disabled ? "action.disabledBackground" : "",
              }}
              dayOfWeekFormatter={(day) => day.toUpperCase()}
              showDaysOutsideCurrentMonth
              slotProps={{
                popper: {
                  // sx: defaultPopperSx,
                  style: { position: "fixed" },
                  anchorEl: timeRef?.current,
                },
              }}
              slots={{
                openPickerIcon: () => (
                  <ClockIcon color={disabled && "#BCBCBC"} />
                ),
                textField: (params) => (
                  <>
                    <TextField
                      {...params}
                      disabled={disabled}
                      sx={{
                        ...inputSx,
                        color: disabled ? "action.disabled" : "",
                        width: "100%",
                      }}
                      error={error?.message ? error : null}
                      helperText={error?.message}
                      id={name}
                    />
                  </>
                ),
              }}
            />
          )}
        />
      </Box>
    </>
  );
};

export default RHFTimePicker;

const inputSx = {
  "& input": { padding: "16px 12px" },
  borderColor: "#ECECEC",
};
