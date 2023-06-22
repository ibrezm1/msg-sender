function isFieldExists(json, fieldPath) {
    const fieldKeys = fieldPath.split('.');
    let currentObj = json;
  
    for (let i = 0; i < fieldKeys.length; i++) {
      const key = fieldKeys[i];
  
      if (!currentObj.hasOwnProperty(key)) {
        return false;
      }
  
      currentObj = currentObj[key];
    }
  
    return true;
  }
  
  module.exports = {
    isFieldExists
  };
  