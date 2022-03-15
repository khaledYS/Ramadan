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

export function msToTime(duration, options = {returnZeroIfNegative:true}) {
    var milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor((duration / (1000 * 60 * 60 * 24)) % 24);
  
    days = Number((days < 10) ? "0" + days : days)
    hours = Number((hours < 10) ? "0" + hours : hours)
    minutes = Number((minutes < 10) ? "0" + minutes : minutes)
    seconds = Number((seconds < 10) ? "0" + seconds : seconds)
    
    let time = days + "days - " + hours + "hours - " + minutes + "minutes - " + seconds + "." + milliseconds + "seconds";
    
    if(duration <= 0 && options?.returnZeroIfNegative){
        return {
            days : 0,
            hours : 0,
            minutes : 0,
            seconds : 0,
            duration : 0
        }
    }else{
        return {
            days,
            hours,
            minutes,
            seconds,
            duration
        }
    }


  
  }