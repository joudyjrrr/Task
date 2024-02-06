import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { txtFieldBorderStyle } from "./style";
import { Input } from "../ui/input";

// ----------------------------------------------------------------------

export default function RHFSelect({
  name,
  children,
  options,
  multiple,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          {...other}
          select
          fullWidth
          SelectProps={{ native: false, multiple: multiple }}
          error={!!error}
          helperText={error?.message}
          sx={{
            ...txtFieldBorderStyle,
            "& .MuiOutlinedInput-input": {
              display: "flex",
              alignItems: "center",
            },
            ...other.sx,
          }}
        >
          {options?.map(({ label, value, name, id }) => (
            <MenuItem key={id || value} value={value || id}>
              {label || name}
            </MenuItem>
          ))}
          {children}
        </Input>
      )}
    />
  );
}
