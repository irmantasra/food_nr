import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer PhR_PLL24OplubSKHXXc3Sdvgxm4NSYeJNkmA2OCfE3g34VLChNlf2NKejXY_S8_zNIOSZwvEQUFRMWiF_dy-uk5dHqq99bKKFan0-ekAsMblrcRRh-vH7gOxFh3XXYx'
    }
});