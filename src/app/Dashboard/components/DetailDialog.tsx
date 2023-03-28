import React, { useEffect, useState } from "react";
import { Names } from "@nami/app/filters";
import Dialog from "@nami/core/Dialog";
import { BiLoaderAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface Props {
  open: boolean;
  data: Names | null;
  onClose: () => void;
}

const DetailDialog = ({ open, data, onClose }: Props) => {
  const [meaningLong, setMeaningLong] = useState<string>("");
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    if (open) {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
        setMeaningLong(
          "abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd",
        );
      }, 2000);
    } else {
      setLoad(false);
      setMeaningLong("");
    }
  }, [open]);
  return (
    <Dialog
      size="sm"
      open={open}
      onClose={onClose}
      className="flex w-full !max-w-[28.6875rem] flex-col gap-5 rounded-3xl bg-bluish-default p-5 text-white inner-border-2 inner-border-bluish-lighter"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold leading-[2.25rem]">
          {data?.name}
        </span>
        <IoClose onClick={onClose} size={24} className="cursor-pointer p-0.5" />
      </div>
      {!load ? (
        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-bluish-lighter p-4 inner-border-[1px] inner-border-bluish-lightest">
          <span className="w-0 flex-1">{meaningLong}</span>
        </div>
      ) : null}
      {load ? (
        <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-bluish-lighter p-4 inner-border-[1px] inner-border-bluish-lightest">
          <BiLoaderAlt className="animate-spin" />
        </div>
      ) : null}
    </Dialog>
  );
};

export default DetailDialog;
