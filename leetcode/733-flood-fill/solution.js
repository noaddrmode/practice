// given 

// [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1]
// ]

// sr < 0 - row < 0 in x axis (out of bound)
// sc < 0 - col < 0 in y axis (out of bound)
// image.length - number of rows (out of bound)
// image[0].length - number of columns (out of bound)


var fill = function(image, sr, sc, old_color, new_color) {
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[0].length) {
        return;
    }

    if (image[sr][sc] === old_color) {
        image[sr][sc] = new_color;
        fill(image, sr+1, sc, old_color, new_color);
        fill(image, sr-1, sc, old_color, new_color);
        fill(image, sr, sc+1, old_color, new_color);
        fill(image, sr, sc-1, old_color, new_color);
    }    
    return image;
}

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let old_color = image[sr][sc];
    let new_color = color;
    if(old_color === new_color) {
        return image;
    } 
    fill(image, sr, sc, old_color, new_color);
    return image;
};