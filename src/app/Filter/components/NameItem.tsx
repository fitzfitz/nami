import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";

interface Props {
  id: number;
  name: string;
  meaning: string;
  isLoved?: boolean;
  onLoved?: (id: number | null) => void;
}

const NameItem = ({ id, name, meaning, isLoved, onLoved }: Props) => {
  return (
    <div className="mb-3 flex w-full max-w-sm cursor-pointer items-center overflow-hidden rounded-xl p-4 hover:bg-[#F9EAE7]">
      <div className="flex w-0 flex-1 flex-col pr-3">
        <span className="truncate text-xl font-bold" title={name}>
          {name}
        </span>
        <span className="truncate text-sm text-[#687178]" title={meaning}>
          {meaning}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onLoved && onLoved(isLoved ? null : id);
          }}
        >
          {isLoved ? (
            <RiHeart2Fill className="animate-loved" size={20} />
          ) : (
            <RiHeart2Line
              className="animate-unloved text-[#F7AFA7]"
              size={20}
            />
          )}
        </button>
        <IoShareSocialOutline className="text-[#F7AFA7]" size={20} />
      </div>
    </div>
  );
};

export default NameItem;
