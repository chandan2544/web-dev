// 1.Axios - library to  make http requests

  async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res)
    } catch (e) {
        console.log("error - ",e);
    }
  }