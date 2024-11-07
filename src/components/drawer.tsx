import { Modal, ModalContent } from "@nextui-org/react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const Drawer: React.FC<Props> = ({ className, ...props }) => {
  return (
    <Modal
      scrollBehavior="inside"
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      placement="center"
      backdrop="opaque"
      size="full"
      classNames={{
        wrapper: "flex justify-end",
      }}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            x: 50,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      className={twMerge(
        "rounded-md max-w-sm w-full h-screen max-h-screen",
        className
      )}
    >
      <ModalContent>{() => <>{props.children}</>}</ModalContent>
    </Modal>
  );
};

export default Drawer;
