import './style.css'

const appEl:HTMLDivElement = document.querySelector<HTMLDivElement>('#app')!
const videoEl:HTMLVideoElement = document.createElement('video')

navigator.mediaDevices.getUserMedia({ video: { deviceId: localStorage.getItem('deviceId')??'' }}).then(mediaStream =>{
  videoEl.srcObject = mediaStream
  const deviceId:string = mediaStream.getVideoTracks()[0]?.getSettings()?.deviceId ?? ''
  videoEl.play()
  localStorage.setItem('deviceId',deviceId)
})

appEl.appendChild(videoEl)