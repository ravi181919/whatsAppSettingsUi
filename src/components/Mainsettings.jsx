import React, { useState } from "react";
import { MdOutlineKey } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineChat } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { MdDataSaverOff } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdHelpOutline } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { PiFacebookLogoBold } from "react-icons/pi";

function Mainsettings() {
  const allData = [
    {
      icon: <MdOutlineKey />,
      settingName: "Account",
      canDo: "Security notifications, change number",
    },
    {
      icon: <MdOutlineLock />,
      settingName: "Privacy",
      canDo: "Block contacts, disappearing messsages",
    },
    {
      icon: <RxAvatar />,
      settingName: "Avatar",
      canDo: "Create, edit, profile photo",
    },
    {
      icon: <MdOutlineChat />,
      settingName: "Chats",
      canDo: "Theme, wallpapers, chat history",
    },
    {
      icon: <MdNotificationsNone />,
      settingName: "Notifications",
      canDo: "Message, group & call tones",
    },
    {
      icon: <MdDataSaverOff />,
      settingName: "Storage and data",
      canDo: "Network usage, auto-download",
    },
    {
      icon: <TbWorld />,
      settingName: "App language",
      canDo: "English (device's language)",
    },
    {
      icon: <MdHelpOutline />,
      settingName: "Help",
      canDo: "Help center, contact us, privacy policy",
    },
    {
      icon: <FaUserFriends />,
      settingName: "Invite a friend",
    },
    {
      icon: <MdOutlineSecurityUpdateGood />,
      settingName: "App updates",
    },
    {
      copyRight: "Also from meta",
    },
    {
      icon: <FaInstagram />,
      settingName: "Open Instagram",
    },
    {
      icon: <PiFacebookLogoBold />,
      settingName: "Open Faceebook",
    },
  ];

  const [settingsData, setSettingsData] = useState(allData);

  return (
    <div className="w-full flex flex-col gap-6 px-4 py-2">
      {settingsData.map((settingsItem, settingsIndex) => (
        <div key={settingsIndex} className="w-full flex gap-6 items-center">
          <div className="text-white/50 md:text-black">
            <span className="text-2xl">{settingsItem.icon}</span>
          <h4 className="text-md text-white/60 tracking-wide ">{settingsItem.copyRight}</h4>
          </div>
          <div className="">
            <h1 className="font-normal tracking-wide text-xl text-white md:text-sm md:text-black">
              {settingsItem.settingName}
            </h1>
            <h4 className="text-md md:text-xs text-white/60 md:text-black/60 tracking-wide">
              {settingsItem.canDo}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mainsettings;
