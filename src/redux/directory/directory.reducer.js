const INITIAL_STATE = {
  sections: [
    {
      title: "HATS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "SNEAKERS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 2,
      linkUrl: "shop/sneakers"
    },
    {
      title: "JACKETS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 3,
      linkUrl: "shop/jackets"
    },
    {
      title: "WOMENS",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "MENS",
      size: "large",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
