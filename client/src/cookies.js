const cookies = {
  set(setObject) {
    // converts key/value pairs in object, to cookies
    let newCookie = '';
    for (const key in setObject) {
      console.log(key);
      newCookie += `${key}=${setObject[key]}; `
    }
    document.cookie = newCookie;
  },
  get(thisOne) {
    const cookieList = document.cookie
      .split(';')
      .map((cookie) => cookie.split('='))
      .reduce((accumulator, [key, value]) => (
        { ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});
    if (thisOne) {
      return cookieList[thisOne];
    }
    return cookieList;
  },
};

export default cookies;
