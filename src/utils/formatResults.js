const filterValidResults = (results) => {
  return results.filter(result => {
    return result.title && result.text;
  });
};

const removeNewlinesAndSpaces = (resultString) => {
  return resultString.trim().replace(/(\n+|\s+)/g, ' ');
};

// Function to fix common errors in the JSON structure of a generated result.
const fixJsonStructure = (jsonString) => {
  let json = jsonString.trim();

  json = json.replace(/^.*{/, '{')
                 .replace(/}\s*.*$/, '}');

  let start = json[0];
  let end = json[json.length - 1];

  if (start !== '{') json = `{${json}`;

  if (end !== '}') {
    if (end === ',') json = json.slice(0, -1);

    if (end !== '"') json = `${json}"`;

    json = `${json}}`;
  }

  json = json.replace(/{\s*("|')\s*/g, '{"')
                 .replace(/\s*("|')\s*}/g, '"}')
                 .replace(/\s*("|')\s*:\s*("|')\s*/g, '":"')
                 .replace(/\s*("|')\s*,\s*("|')\s*/g, '","');

  return json;
};

// Function to fix the end of the "text" property of a result,
// so that it ends with ellipsis.
const fixEndOfText = (resultJson) => {
  let result = resultJson;

  if (result) result.text = result.text.replace(/\s*\.*$/, ' ...');
  else result = {};

  return result;
};

// Function to format the results, fix the JSON structure,
// parse the JSON, and filter the valid results.
const formatResults = (resultsString) => {
  let results = resultsString.trim().split(/}\s*{/);

  results = results.map((resultString) => {
    let resultJson = {};

    let result = removeNewlinesAndSpaces(resultString);
    result = fixJsonStructure(result);

    try {
      resultJson = JSON.parse(result);
      resultJson = fixEndOfText(resultJson);
    } catch (e) {}

    return resultJson;
  });

  return filterValidResults(results);
};

export default formatResults;