import React, { Fragment } from "react";
import Image from "next/image";
import Select, { MenuProps, StylesConfig, components } from "react-select";

import "./style.css";
import chroma from "chroma-js";
import img from "../../Assets/SVGs/SingIn/Avatar.png";
import { StaticImageData } from "next/image";
const MulriSelect = () => {
  interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
    title: string;
    description: string;
    image: string | StaticImageData;
  }
  const colourOptions = [
    {
      value: "Spicy Jalapeño Burger",
      label: "Spicy Jalapeño Burger",
      img: img,
      description: "Lettuce, tomato, onion, and pickles",
    },
    {
      value: "Mushroom Swiss Burger",
      label: "Mushroom Swiss Burger",
      img: img,
      description: "Lettuce, tomato, onion, and pickles",
    },
    {
      value: "Bacon Burger",
      label: "Bacon Burger",
      img: img,
      description: "Lettuce, tomato, onion, and pickles",
    },
    {
      value: "Guacamole Burger",
      label: "Guacamole Burger",
      img: img,
      description: "Lettuce, tomato, onion, and pickles",
    },
  ];

  const colourStyles: StylesConfig = {
    menuList: (style) => ({
      ...style,
      padding: "1rem",
    }),
    option: (style) => ({
      ...style,
      ':hover':{
        backgroundColor:"#F9FAFB"
      }
    }),
  };

  const Option: any = (props: any) => {
    return (
      <>
        <components.Option {...props}>
          <div className="flex gap-2 ">
            <Image
              alt=""
              src={props.data.img}
              className="w-[2.5rem] h-[2.5rem] rounded-full"
            />
            <div>
              <h1 className="text-gray-900 font-sm text-Text-sm leading-5">
                {props.data.label}
              </h1>
              <p className="text-gray-600 font-xs text-Text-sm leading-5">
                {props.data.description}
              </p>
            </div>
          </div>
        </components.Option>
      </>
    );
  };

  return (
    <div>
      <Select
        defaultValue={colourOptions[0]}
        options={colourOptions}
        styles={colourStyles}
        components={{
          Option,
        }}
        isMulti
      />
    </div>
  );
};

export default MulriSelect;
