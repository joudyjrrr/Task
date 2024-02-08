import Select, { StylesConfig, components } from "react-select";
import "./style.css";

const MultiSelect: React.FunctionComponent<{
  style?: StylesConfig;
}> = ({ style }) => {
  const Styles: StylesConfig = {
    valueContainer: (style) => ({
      ...style,
      display: "flex",
      alignItems: "start",
      padding: "0.75rem",
      height: "100%",
      gap: "0.5rem",
    }),
    control: (style) => ({
      ...style,
      height: "120px",
      ":focus": {
        outline: "none",
        border: "none",
      },
    }),
    menuList: (style) => ({
      ...style,
      padding: "1rem",
    }),
    option: (style) => ({
      ...style,
      ":hover": {
        backgroundColor: "#F9FAFB",
      },
    }),
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const Option: any = (props: any) => {
    return (
      <>
        <components.Option {...props}>
          <div className="flex gap-2  ">
            <div className="flex-grow">{props.data.label}</div>
            <img
              alt=""
              src={'/'}
              className="w-[0.8rem] h-[0.8rem] rounded-full"
            />
          </div>
        </components.Option>
      </>
    );
  };
  return (
    <div>
      <Select
        defaultValue={options[0]}
        options={options}
        styles={style || Styles}
        isMulti
        components={{
          Option,
        }}
      />
    </div>
  );
};

export default MultiSelect;
