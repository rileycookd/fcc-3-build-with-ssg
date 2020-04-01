module.exports = function(config) {
  
  config.setBrowserSyncConfig({
    https: true
  });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };

};

// [
//   "ae",
//   "ar",
//   "at",
//   "au",
//   "be",
//   "bg",
//   "br",
//   "ca",
//   "ch",
//   "cn",
//   "co",
//   "cu",
//   "cz",
//   "de",
//   "eg",
//   "fr",
//   "gb",
//   "gr",
//   "hk",
//   "hu",
//   "id",
//   "ie",
//   "il",
//   "in",
//   "it",
//   "jp",
//   "kr",
//   "lt",
//   "lv",
//   "ma",
//   "mx",
//   "my",
//   "ng",
//   "nl",
//   "no",
//   "nz",
//   "ph",
//   "pl",
//   "pt",
//   "ro",
//   "rs",
//   "ru",
//   "sa",
//   "se",
//   "sg",
//   "si",
//   "sk",
//   "th",
//   "tr",
//   "tw",
//   "ua",
//   "us",
//   "ve",
//   "za"
// ]