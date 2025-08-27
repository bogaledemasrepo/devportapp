
export interface ContentType {
  id: string
  title: string
  url: string
  reviews: {
    like:number,
    love:number,
    dislike:number
  }
}


class ContentService {
  // Get paged note
  async getContents(page:number,size:number): Promise<ContentType[]> {
    try { 
      // const response = await fetch(`http://localhost:8080/contents/paged?page=${page}&&size${size}`);
      // if(response.ok){
      //   return await response.json();
      // }
     const response = await new Promise<ContentType[]>((res,rej)=>{
        setTimeout(()=>{
          res([{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          },{
              id: "string",
              title: "string",
              url: "string",
              reviews: {
                like:2,
                love:2,
                dislike:2
              }
          }])
        },1000)
      })
      console.log(response)
      return response;
    } catch (error) {
      console.error("Error loading notes:", error)
      return []
    }
  }
}

export default new ContentService()
