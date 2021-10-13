let usCenterCoordinates=[37.0902, -95.7129]
let zoomLevel=3
let map=L.map('bridge-map').setView(usCenterCoordinates,zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(map)



	let bridges=[

        {'bridges_name':'Verrazano-Narrows Bridge',
            'meter':1298.4,
            'location':
                {
                    'latitude': 40.6066,
                    'longitude': -74.0447
                }
        },
        {'bridges_name':'Golden Gate',
            'meter':1280.2,
            'location':
                {
                    'latitude': 37.8199,
                    'longitude': -122.4783
                }
        }, {'bridges_name':'Mackinac Bridge',
            'meter':1158.0,
            'location':
                {
                    'latitude': 45.8174,
                    'longitude': -84.7278
                }
        },{'bridges_name':'George Washington Bridge',
            'meter':1067.0,
            'location':
                {
                    'latitude': 40.8517,
                    'longitude': -73.9527
                }
        },{'bridges_name':'Tacoma Narrows Bridge',
            'meter':853.44,
            'location':
                {
                    'latitude': 47.2690,
                    'longitude': -122.5517
                }
        }


    ]

let  briges_name=['Verrazano-Narrows Bridge','Golden Gate Bridge','','','']
let  locationList=[ {"latitude":40.6066,    "longitude":-74.0447},
    {"latitude":37.8199,    "longitude":-122.4783},
    {"latitude":45.8174,    "longitude":-84.7278},
    {"latitude":40.8517,    "longitude":-73.9527},
    {"latitude":47.2690,    "longitude":-122.5517}

]
let spanList=[1298.4,1280.2,1158.0,1067.0,853.44]
//let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup('Minnepolis College<br><a href="https://minneapolis.edu">Website</a>')
//     .addTo(map)

//console.log(name)
bridges.forEach(function (bridge_info){
    let latitudeValue=bridge_info.location.latitude
    console.log(latitudeValue)
    let longitudeValue=bridge_info.location.longitude

    let bridgeCoordinate=[latitudeValue,longitudeValue]

    let brigeName=bridge_info.bridges_name
    let spanLength=bridge_info.meter
    let info=`Name: ${brigeName} <br> Span ${spanLength}m`


    let bridgeMarker=L.marker(bridgeCoordinate).bindPopup(info).addTo(map)


})












