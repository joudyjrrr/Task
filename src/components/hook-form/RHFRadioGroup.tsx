import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useLocales } from "../../locales";
import CircleCheckedFilled from "@mui/icons-material/CheckCircle";
import CircleUnchecked from "@mui/icons-material/RadioButtonUnchecked";

// ----------------------------------------------------------------------

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
};

export default function RHFRadioGroup({
  name,
  options,
  sx,
  icon,
  checkIcon,
  ...other
}) {
  const { control } = useFormContext();

  const { translate } = useLocales();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={sx}>
          <RadioGroup {...field} row {...other}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={
                  <Radio
                    icon={icon || <CircleUnchecked />}
                    checkedIcon={checkIcon || <CircleCheckedFilled />}
                    // sx={{ mb: "50px" }}
                  />
                }
                label={
                  typeof option.label === "string"
                    ? translate(`${option.label}`)
                    : option.label
                }
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {translate(`${error.message}`)}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
}
