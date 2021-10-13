 let url='https://api.wheretheiss.at/v1/satellites/25544'
 let issLat=document.querySelector('#iss-lat')
 let issLong=document.querySelector('#iss-long')
 let timeIssLocationFetched=document.querySelector('#time')
  let update=10000
 let maxFailAttempts=3
  let issIcon=L.icon({
      iconUrl:'iss_icon.png',
      iconSize:[50,50],
      iconAnchor:[25,25]
  })

 let issMarker

let map=L.map('iss-map').setView([0,0],1)
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">' +
         'OpenStreetMap</a>',
 }).addTo(map)
 iss(maxFailAttempts)
 setInterval(iss,update)


 function  iss(attempts){

    if(attempts<=0){
        alert('Failed to Contact Server after several attempts ')
        return
    }
     fetch(url).then(res=>{
         return res.json()
     }).then((issData)=>{


         console.log(issData)
         let lat =issData.latitude
         let long=issData.longitude

         issLat.innerHTML=lat
         issLong.innerHTML=long
         if(!issMarker){
             issMarker=L.marker([lat,long],{icon:issIcon}).addTo(map)
         }else {
            issMarker.setLatLng([lat,long])
         }
         let now=Date()
         timeIssLocationFetched.innerHTML=`At ${now}  the ISS is Over the following coordinates:`

     }).catch((err)=>{
         console.log('Error!',err)
         attempts--
     }).finally( ()=>{
         setTimeout(iss,update,attempts)
     })


}