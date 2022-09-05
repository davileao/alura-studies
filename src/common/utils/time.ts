export function timeToSeconds(time: string){
  const [hours = "0", minutes = "0", seconds= "0"] = time.split(':')

    const hoursInSeconds = parseInt(hours) * 60 * 60;
    const minutesInSeconds = parseInt(minutes) * 60;
    const secondsInSeconds = parseInt(seconds);
    return hoursInSeconds + minutesInSeconds + secondsInSeconds;

}