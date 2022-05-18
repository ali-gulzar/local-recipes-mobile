const localRecipeAPIBaseUrl = 'https://g72nix.deta.dev/';

const fetchRecipes = (filesData) => {
    fetch(localRecipeAPIBaseUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: filesData,
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        .catch(console.error(error));
};
