import axios from "axios";

// const BASEURL = "https://www.instagram.com/(this needs to be a value from an input)/?__a=1";
// const BASEURL = "https://api.instagram.com/oembed?url=https://www.instagram.com/p/";
const BASEURL = "https://www.instagram.com/express/?__a=1"

// const query = "this is the value of the shortcodes";

const YelpURL = "https://api.yelp.com/v3/"

export default {
  IGsearch: function() {
    return axios.get(BASEURL);
  },
  Yelpsearch: function(){
    return axios.get(YelpURL);
  }
};


