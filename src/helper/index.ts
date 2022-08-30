export  async function resolveAsset(url:string | undefined, async:boolean = true) {
  try {
    if(!url){
      throw new Error("URL is undefined!")
    }

    if(async){
      return await import("src/assets/" + url).then(item => {
        return item.default
      })
    }
    return require("src/assets/" + url)

  } catch (error: any) {
    console.error(error?.message);
    return 'https://via.placeholder.com/50'
  }
}
