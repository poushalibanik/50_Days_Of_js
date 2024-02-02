// Implement run-length encoding and decoding.

// Run-length encoding (RLE) is a simple form of data compression, where runs (consecutive data elements) are replaced by just one data value and count.

// For example we can represent the original 53 characters with only 13.
// RLE allows the original data to be perfectly reconstructed from the compressed data, which makes it a lossless data compression.

// "AABCCCDEEEE"  ->  "2AB3CD4E"  ->  "AABCCCDEEEE"
// For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.

//Solution:-


export const encode = (str) => {
    const regexp = /(.)\1*|(\s)\1*/g;
    let encode = str.match(regexp);
    let result = '';
    if (encode) {
      encode.map(group => {
        if (group.length > 1) {
          result = result + group.length;
        }
        result = result + group.slice(-1);
      });
    }
    return result;
  };
  export const decode = (str) => {
    const regexp = /([a-zA-Z]|\s\1*)/g;
    let decode = str.split(regexp);
    let result = '';
    if (decode) {
      let multi = 1;
      decode.map((seg) => {
        if (!isNaN(parseInt(seg))) {
          multi = +seg;
        } else {
          for (let index = 0; index < multi; index++) {
            result = result + seg;
          }
          multi = 1;
        }
      });
    }
    return result;
  };