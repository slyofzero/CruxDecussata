import { cruxWhite, emoji, money, plane } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const ChatMessage = () => {
  return (
    <div className="relative ms-[1.6rem] w-full max-w-[12rem] pt-2.5 pr-2.5 pb-7 pl-4 bg-gray-800 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[14.5rem] hover:-translate-y-2 transition ease-in-out duration-500">
      <p className="text-white text-xl md:text-2xl">0.3 ETH Sent</p>
      <p className="text-sm py-1 text-gray-400">View Transaction</p>
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-gray-500 rounded-[0.75rem]">
        <img src={cruxWhite} width={26} height={26} alt="Chat" />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        10:12 PM
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-gray-800"
      />
    </div>
  );
};

export const SentMessage = () => {
  return (
    <div className="relative me-[2rem] w-fit ms-auto min-w-40 max-w-[8rem] pt-2.5 pr-5 pb-7 pl-2.5 bg-white rounded-t-xl rounded-bl-xl font-code text-base md:max-w-[17.5rem] text-black hover:-translate-y-2 transition ease-in-out duration-500">
      <p className="text-md">Thanks! Got it.</p>
      <p className="tagline absolute left-2.5 bottom-1 text-[0.625rem] uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute left-full bottom-0 scale-x-100"
        pathClassName="fill-white"
      />
    </div>
  );
};

export const UserInputField = () => {
  return (
    <div className="flex w-full mx-auto items-center justify-between bg-gray-800 p-4 rounded-xl border border-gray-600 shadow-sm hover:-translate-y-1 transition ease-in-out duration-500">
      <div className="flex-1 text-gray-400 mr-4 text-xs md:text-regular">
        Type a message...
      </div>
      <div className="flex gap-3">
        <img
          src={emoji}
          className="opacity-50 w-[18px] md:w-[26px]"
          alt="emoji icon"
        />
        <img
          src={money}
          className="opacity-50 w-[18px] md:w-[26px]"
          alt="send crypto icon"
        />
        <img
          src={plane}
          className=" w-[18px] md:w-[26px]"
          alt="send message icon"
        />
      </div>
    </div>
  );
};
