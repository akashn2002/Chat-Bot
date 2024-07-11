import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { IoSettingsOutline } from "react-icons/io5";
import HelpIcon from '@mui/icons-material/Help';
import { GoQuestion } from "react-icons/go";
import { useContext } from 'react';
import { Context } from './Context/Context';
import { Switch } from '@mui/material';
import { IoMenu } from "react-icons/io5";

const Sidebar = () => {
  const { openToggler, mode } = useContext(Context);
  const { open, onSent, prevPrompts, setRecentPrompt, newChat, Themehandle } = useContext(Context);

  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div>
      <div className={`fixed top-0 flex justify-end items-center w-full h-10 text-2xl font-medium z-50 ${mode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <IoMenu className={`absolute top-0 left-0 text-3xl ml-1 my-1 ${mode ? 'text-white' : 'text-black'}`} onClick={openToggler} />
      </div>
      <div className={`fixed top-0 h-full transition-transform duration-1000 flex w-40 justify-between flex-col ${open ? 'translate-x-0' : '-translate-x-full'} z-30 ${mode ? 'bg-black' : 'bg-white'}`}>
        <div className='flex flex-shrink-0 flex-col w-full h-20 gap-2 mt-10'>
          <div className={`flex items-center gap-2 w-11/12 mt-4 mx-auto rounded cursor-pointer ${mode ? 'bg-gray-800' : 'bg-gray-200'}`} onClick={() => newChat()}>
            <AddBoxIcon className={`ml-1 ${mode ? 'text-white' : 'text-black'}`} />
            <div className={`ml-1 ${mode ? 'text-white' : 'text-black'}`}>
              New Chat
            </div>
          </div>
          <p className={`ml-3 font-bold ${mode ? 'text-white' : 'text-black'}`}>Recent</p>
        </div>
        <div className='flex flex-grow overflow-y-auto flex-col gap-1 w-full h-20'>
          {prevPrompts.map((item, index) => (
            <div key={index} className={`flex items-center gap-2 w-11/12 mx-auto rounded cursor-pointer ${mode ? 'bg-gray-800' : 'bg-gray-200'}`} onClick={() => loadPreviousPrompt(item)}>
              <ChatBubbleIcon className={`ml-1 ${mode ? 'text-white' : 'text-black'}`} />
              <div className={` ${mode ? 'text-white' : 'text-black'}`}>
                {item.slice(0, 10)}...
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-shrink-0 flex-col w-full h-1/5 gap-2'>
          <div className='flex items-center gap-2 w-11/12 mt-1 mx-auto rounded'>
            <GoQuestion className={`ml-1 text-xl ${mode ? 'text-white' : 'text-black'}`} />
            <div className={`ml-1 ${mode ? 'text-white' : 'text-black'}`}>
              Help
            </div>
          </div>
          <div className='flex items-center gap-2 w-11/12 mt-1 mx-auto rounded'>
            <IoSettingsOutline className={`ml-1 text-xl ${mode ? 'text-white' : 'text-black'}`} />
            <div className={`ml-1 ${mode ? 'text-white' : 'text-black'}`}>
              Settings
            </div>
          </div>
          <div className='flex  w-10/11 items-center mx-auto'>
            <Switch className='' checked={mode} onClick={Themehandle} />
            <div className={`ml-1 ${mode ? 'text-white' : 'text-black'}`}>Dark Mode</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
