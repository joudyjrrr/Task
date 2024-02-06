import { FormHelperText, Typography, Box } from "@mui/material";
import React, { useCallback } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useLocales } from "../../locales";
import ImageViewCard from "../../components/cards/common/ImageViewCard";
import { convertFileToBase64Format } from "../../utils/fileConverters";
import {
  browseFilesForUploadSx,
  imageBoxSx,
  imageDragDropHereSx,
  imageInputSx,
  imageOrSx,
  imageTextHelperSx,
  labelSx,
} from "./style";

const RHFInputFile = ({ name, label, boxShadow, sx, required, srcImg }) => {
  const { control, setValue, getValues, watch } = useFormContext();
  const { translate } = useLocales();

  const changeHandler = useCallback(
    async (e) => {
      if (e.target.files[0]) {
        await convertFileToBase64Format(e.target.files[0]).then((res) => {
          setValue(
            name,
            res,
            // JSON.stringify({ base64, fileName: e.target.files[0].name }),
            { shouldValidate: true }
          );
        });
      }
    },
    [name, setValue]
  );

  const dropFileHandler = (ev) => {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach(async (item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          await convertFileToBase64Format(file).then((res) => {
            setValue(
              name,
              res,
              // JSON.stringify({ base64, fileName: e.target.files[0].name }),
              { shouldValidate: true }
            );
          });
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };
  return (
    <Box
      sx={{ ...sx, boxShadow: boxShadow ? "2px 2px 10px 0px #0000001A" : "" }}
    >
      <Typography
        component="h6"
        sx={{
          ...labelSx,
          textAlign: "center",
          paddingBottom: "16px",
        }}
      >
        {translate(label)}
      </Typography>
      <Box
        sx={{
          ...imageBoxSx,
          cursor: "pointer",
        }}
      >
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <Box
              sx={imageInputSx}
              aria-label="upload picture"
              component="label"
            >
              <input
                accept="image/*"
                type="file"
                required={required}
                onChange={changeHandler}
                onDrop={dropFileHandler}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  opacity: 0,
                  height: "100%",
                  cursor: "pointer",
                }}
              />
              <img
                src="/assets/icons/imageFace.svg"
                alt=""
                style={{
                  width: "24px",
                  height: "24px",
                  margin: "auto",
                }}
              />
              <FormHelperText sx={{ ...imageTextHelperSx }} error={!!error}>
                {error?.message}
              </FormHelperText>
            </Box>
          )}
        />
        <Typography sx={imageDragDropHereSx}>
          {translate("drag_drop_here")}
        </Typography>
        <Typography sx={imageOrSx}>{translate("or")}</Typography>
        <Typography sx={browseFilesForUploadSx}>
          {translate("browse_files_for_upload")}
        </Typography>
      </Box>
      {watch(name) !== "" && (
        <ImageViewCard
          ImgSrc={srcImg}
          file={getValues(name)}
          width="81px"
          sx={{ "& span": { maxWidth: "20ch" } }}
          isVideo
        />
      )}
    </Box>
  );
};

export default RHFInputFile;
