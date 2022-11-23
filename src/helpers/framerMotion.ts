export const framerMotionPhotosAndPackets = (): { container: any; item: any } => {
  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.3,
        delay: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return { container, item };
};

export const framerMotionPinnedPackets = (): { container: any; item: any } => {
  const container = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.3,
        delay: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };
  return { container, item };
};
