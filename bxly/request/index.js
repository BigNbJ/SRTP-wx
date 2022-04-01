export const request=(params)=>{
    return new Promise((resolve, reject) => {
        wx.request({
            ...params,//自动解构参数
            success:(result)=>{
                //成功
                resolve(result);
            },
            fail:(err)=>{
                //失败
                reject(err);
            }
        })
      });
}