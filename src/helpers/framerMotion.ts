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
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 0.8,
        // delay: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return { container, item };
};

export const framerMotionPhotosShowOnView = (): { container: any; item: any } => {
  const container = {
    hidden: { opacity: 0, y: 50, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        staggerChildren: 0.4,
        duration: 0.8,
        // delay: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return { container, item };
};

export const animationLinksOnMainPage = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.2, duration: 0.4 },
  }),
};

export const animationBtnMorePhotos = {
  hidden: {
    opacity: 0,
  },
  visible: () => ({
    opacity: 1,
    transition: { duration: 0.4 },
  }),
};

export const animationTitleCategory = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: () => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  }),
};

export const hiddenAndScale = {
  hidden: {
    opacity: 0,
    scale: 0.3,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.4, duration: 0.6 },
  }),
};

export const hiddenUnderLine = {
  hidden: {
    width: 0,
    opacity: 0,
    scale: 0.2,
  },
  visible: (custom: { delay: number; widthFull: number }) => ({
    width: custom.widthFull,
    opacity: 1,
    scale: 1,
    transition: { delay: custom.delay * 0.4, duration: 0.5 },
  }),
};

export const animationOpacityTransitionRightToLeft = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const animationOpacityTransitionLeftToRight = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
};

export const animationScaleAndOpacity = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: custom * 0.3, duration: 0.7, staggerChildren: 0.3 },
  }),
};

export const animationInstagramPosts = (): { animateInstagramContainer: any; animateInstagramPost: any } => {
  const animateInstagramContainer = {
    hidden: {
      opacity: 0,
      //  y: 50,
    },
    show: {
      opacity: 1,
      // y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };

  const animateInstagramPost = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return { animateInstagramContainer, animateInstagramPost };
};

export const animationInvestmentOnMainPage = (): {
  animationInvestmentOnMainPageContainer: any;
  animationInvestmentOnMainPageItem: any;
} => {
  const animationInvestmentOnMainPageContainer = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.7,
      },
    },
  };

  const animationInvestmentOnMainPageItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };
  return { animationInvestmentOnMainPageContainer, animationInvestmentOnMainPageItem };
};
