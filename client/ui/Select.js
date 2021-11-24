import {
  InputLabel,
  Select as MUISelect,
  FormControl,
} from "@material-ui/core";
import { Controller } from "react-hook-form";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Select = ({
  name,
  label,
  control,
  style,
  defaultValue,
  children,
  type,
  rules,
  value,
  controlled = false,
  onChange: handleChange,
  variant,
  ...props
}) => {
  const labelId = `${name}-label`;
  return (
    <FormControl {...props}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Controller
        value={value}
        defaultValue={defaultValue}
        // eslint-disable-next-line no-shadow
        render={({ onChange, ...props }) => (
          <MUISelect
            variant={variant}
            style={style}
            IconComponent={KeyboardArrowDownIcon}
            labelId={labelId}
            label={label || ""}
            {...props}
            onChange={controlled ? handleChange : onChange}
          >
            {children}
          </MUISelect>
        )}
        name={name}
        control={control}
        rules={rules}
      />
    </FormControl>
  );
};

export default Select;
