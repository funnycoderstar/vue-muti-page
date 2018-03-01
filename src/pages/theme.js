import axios from 'axios';

axios.get('/static/themeColor.js')
   .then(({ data }) => {
    //    const style = getStyleTemplate(data);
       console.log(1111, data);
   });
function getStyleTemplate(data) {
    const colorMap = {
        '#B7A3FF': 'familyPrimary',
        '#879FFF': 'familySecondary',
        '#8981D8': 'sideBarTop',
    };
    Object.keys(colorMap).forEach((key) => {
        const value = colorMap[key];
        data = data.replace(new RegExp(key, 'ig'), value);
    });
    return data;
}
