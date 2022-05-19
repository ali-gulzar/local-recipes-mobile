import axios from 'axios';
import { getType } from 'mime';

const localRecipeAPIBaseUrl = 'https://g72nix.deta.dev/';

export const fetchRecipes = (image) => {
    const file = {
        ...image,
        type: getType(image.uri),
        name: image.uri.split('/').pop(),
    };
    console.log(file);
    let formData = new FormData();
    formData.append('image', file);

    return axios.post(localRecipeAPIBaseUrl, formData, {
        headers: { 'content-type': 'multipart/form-data' },
    });
};
