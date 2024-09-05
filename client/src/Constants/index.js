export const journey = [
    {
        jId:"1",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"2",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"3",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"4",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"5",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"6",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"7",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
    {
        jId:"8",
        journey:"DBMS Learning",
        subject:"DBMS",
        Description:'What is a product description? A product description describes a product',
    },
]

export const textss = []

export const applogo = "https://cdn-icons-png.flaticon.com/512/5580/5580962.png"


// token
import Cookies from 'js-cookie';
export const token = Cookies.get('authToken');

export const logout = () => {
  Cookies.remove('authToken');
//   setUser(null);
};

export const extractPlaylistId = (url) => {
    const match = url.match(/(?:playlist\?list=|\/playlists\/)([^&?\/]+)/);
    return match ? match[1] : null;
};

export const extractVideoId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };
