interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'https://lfg12.github.io',
  logo: 'https://xbgis-1321241379.cos.ap-chongqing.myqcloud.com/image%2Fimg%2Flogo.jpg',
  description: 'LFG的跑步运动主页',
  navLinks: [
    {
      name: 'LFG\'S Blog',
      url: 'https://lfg12.github.io',
    },
    {
      name: 'About',
      url: 'https://lfg12.github.io/about',
    },
  ],
};

export default data;
