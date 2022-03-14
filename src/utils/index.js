export function filterObject(obj, removes, callback=()=>{}) {
    let newOb = {};
    let obInAr = []
    Object.fromEntries(Object.entries(obj).
      filter(([key, val]) => {
        obInAr.push([key, val])
      }));
      obInAr.forEach(([key, val])=>{
          if(typeof removes == "string") {
              if(key != removes){
                  newOb[key] = val
              }
          }else if(typeof removes == "object"){
              let isBlocked = null;
              removes.forEach(remove=>{
                  if(key == remove){
                    isBlocked = true;
                  }
              })
              if(!isBlocked){
                newOb[key] = val
              }
          }
      })
    return newOb;
}