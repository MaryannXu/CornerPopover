import { AbsoluteCenter, IconButton, chakra} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { IoMdChatbubbles } from "react-icons/io";
import { HiPhoneIncoming } from "react-icons/hi";
import { GrSchedules } from "react-icons/gr";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";


const MotionBox = motion(chakra.div);
const MotionIconButton = motion(IconButton);

const ContactCards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mainButton = {
    open: { rotate: 90},
    closed: { rotate: 0},
  };

  const listButtons = {
    open: (index) => ({
      y: -(index * 10 + 70),
      opacity: 1,
      transition: { delay: index * 0.3 },
    }),
    closed: (index) => ({
      y: index * 10,
      opacity: 0,
      transition: { delay: index * 0.1 },
    }),
  };

  const buttons = [
    {
      icon: <HiPhoneIncoming />,
      popoverPlacement: 'left-end',
      color: 'grey',
    },
    {
      icon: <IoMdChatbubbles />,
      popoverPlacement: 'left-end',
      color: 'grey',
    }
  ];


  return (
    <MotionBox
      position="fixed"
      bottom="3rem"
      right="2rem"
      zIndex="sticky"
      flexDirection="column-reverse"
      display="flex"
    >
      <AnimatePresence>
        {isOpen &&
          buttons.map((button, i) => (
            <MotionBox
              boxShadow="5px 3px 10px gray"
              fontSize="30px"
              bg={button.color}
              as="a"
              key={button.url}
              href={button.url}
              variants={listButtons}
              initial="closed"
              animate="open"
              exit="closed"
              custom={i}
              width="55px"
              height="55px"
              transformOrigin="bottom"
              borderRadius="50%"
              textColor="white"
            >
              
              <Popover key={i} placement={button.popoverPlacement} offset={30} >
                <PopoverTrigger>
                  <AbsoluteCenter>{button.icon}</AbsoluteCenter>
                </PopoverTrigger>
                <PopoverContent >
                  <div style={{ backgroundColor: 'grey', borderRadius: '8px', padding: '10px'}}>
                    <div className="text-small font-bold" style={{color: 'white', marginLeft: '10px', marginRight: '10px'}}>Popover Content</div>
                    <div className="text-tiny" style={{color: 'white', marginLeft: '10px', marginRight: '10px'}}>This is the popover content</div>
                  </div>
                </PopoverContent>
              </Popover>
            </MotionBox>
          ))}
      </AnimatePresence>
      <MotionIconButton
        bg="gray.200"
        boxShadow="2px 3px 8px gray"
        position="fixed"
        bottom="3rem"
        right="2rem"
        zIndex="sticky"
        size="lg"
        icon={isOpen ? <FiX /> : <GrSchedules />}
        onClick={() => setIsOpen(!isOpen)}
        variants={mainButton}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variant="solid"
        isRound={true}
      />
    </MotionBox>
  );
};

export default ContactCards;
