import { ComponentProps, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../ui/input";
import Typography from "../ui/typography";

interface RHFTextFieldProps {
  type: ComponentProps<typeof Input>["type"];
  name: string;
  label: string;
}

const RHFTextField: React.FunctionComponent<RHFTextFieldProps> = ({
  name,
  label,
  type,
  ...other
}) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordHandler = () => {
    if (type === "password") setShowPassword(() => !showPassword);
  };

  const passwordIcon = renderIcon(type === "password" && showPassword);

  return (
    <>
      <Typography variant="body2" className="regular">
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            {...field}
            id={name}
            type={showPassword && type === "password" ? "text" : type}
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            {...other}
          />
        )}
      />
    </>
  );
};

const renderIcon = (show: boolean) => {
  switch (show) {
    case false:
      return "eva:eye-fill";
    case true:
      return "eva:eye-off-fill";
    default:
      return undefined;
  }
};

export default RHFTextField;
