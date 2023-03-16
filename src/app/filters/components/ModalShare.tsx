import Dialog from "@nami/core/Dialog";
import { useToast } from "@nami/utils";
import React, { useState } from "react";
import {
  IoClose,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ModalShare = ({ open, onClose }: Props) => {
  const { successSnackbar, errorSnackbar } = useToast();
  const [text, setText] = useState<string>(
    "https://www.figma.com/file/4dU3BjkUdIdKdbLZ5Eza0r/Nami?node-id=336%3A2&t=v5cJm0vBXrEGPKCi-",
  );
  const onCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text);
      successSnackbar("Text copied to clipboard");
    } catch (err) {
      errorSnackbar("Failed to copy text");
    }
  };
  return (
    <Dialog
      size="sm"
      open={open}
      onClose={onClose}
      className="flex w-full !max-w-[28.6875rem] flex-col gap-5 rounded-3xl bg-bluish-default p-5 text-white inner-border-2 inner-border-bluish-lighter"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold leading-[2.25rem]">
          Bagikan melalui
        </span>
        <IoClose onClick={onClose} size={24} className="cursor-pointer p-0.5" />
      </div>
      <div className="flex flex-wrap gap-5">
        <button
          onClick={() => setText("https://twitter.com")}
          className="flex w-full max-w-[5.609rem] flex-col items-center justify-center gap-1 rounded-xl bg-bluish-lighter py-3 inner-border-[1px] inner-border-bluish-lightest"
        >
          <IoLogoTwitter size={28} className="p-0.5" />
          <span className="text-sm font-medium leading-[1.313rem] -tracking-[0.04em]">
            Twitter
          </span>
        </button>
        <button
          onClick={() => setText("https://instagram.com")}
          className="flex w-full max-w-[5.609rem] flex-col items-center justify-center gap-1 rounded-xl bg-bluish-lighter py-3 inner-border-[1px] inner-border-bluish-lightest"
        >
          <IoLogoInstagram size={28} className="p-0.5" />
          <span className="text-sm font-medium leading-[1.313rem] -tracking-[0.04em]">
            Instagram
          </span>
        </button>
        <button
          onClick={() => setText("https://facebook.com")}
          className="flex w-full max-w-[5.609rem] flex-col items-center justify-center gap-1 rounded-xl bg-bluish-lighter py-3 inner-border-[1px] inner-border-bluish-lightest"
        >
          <IoLogoFacebook size={28} className="p-0.5" />
          <span className="text-sm font-medium leading-[1.313rem] -tracking-[0.04em]">
            Facebook
          </span>
        </button>
        <button
          onClick={() => setText("https://whatsapp.com")}
          className="flex w-full max-w-[5.609rem] flex-col items-center justify-center gap-1 rounded-xl bg-bluish-lighter py-3 inner-border-[1px] inner-border-bluish-lightest"
        >
          <IoLogoWhatsapp size={28} className="p-0.5" />
          <span className="text-sm font-medium leading-[1.313rem] -tracking-[0.04em]">
            Whatsapp
          </span>
        </button>
      </div>
      <div className="flex w-full items-center justify-center gap-2 rounded-xl bg-bluish-lighter p-4 inner-border-[1px] inner-border-bluish-lightest">
        <span className="w-0 flex-1 truncate">{text}</span>
        <button onClick={onCopyText} className="text-base font-bold">
          Salin link
        </button>
      </div>
    </Dialog>
  );
};

export default ModalShare;
