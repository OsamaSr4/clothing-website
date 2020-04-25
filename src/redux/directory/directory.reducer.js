const INITAL_STATE = {
    sections :[
        {
          title: 'HATS',
          imageSrc : 'hats.png',
          id: 1,
          linkUrl: 'shop/hats'
      },
    
      {
          title: 'JACKETS',
          imageSrc: 'jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'

      },

       {
          title: 'SNEAKERS',
          imageSrc : 'sneakers.png' ,
          id: 3,
          linkUrl: 'shop/sneakers'
      },
       
      {
          title: 'MENs',
          imageSrc : 'men.png' ,
          size:'large',
          id: 4,
          linkUrl: 'shop/mens'
      },
       
       {
          title: 'WOMENs',
          imageSrc : 'womens.png',
          size:'large',
          id: 5,
          linkUrl: 'shop/womens'
      }
      ] 
};

const directoryReducer = (state = INITAL_STATE, action) => {
    switch(action.type){
        default: 
        return state; 
    }
};

export default directoryReducer;
