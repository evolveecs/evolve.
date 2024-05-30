let map;
let markers = [];
const locationAreas = [
  { label: 'Kukatpally', id: 'loc1',zoom: 11,center: [78.398742,17.490922] },
  { label: 'Charminar(Center)', id: 'loc2',zoom: 11, center: [78.474663,17.361565] },
  { label: 'Khairatabad', id: 'loc3',zoom: 12,center: [78.45366678385048, 17.411121686297562] },
  { label: 'Secenderabad', id: 'loc4',zoom: 13, center: [78.49576561453647,17.428674666565723] },
  // Add more location areas with their respective center coordinates
];

const locations = [
  { lng: 78.396797, lat: 17.499331, details: { address: 'Pure Earth Recyclers Pvt. Ltd', description: 'Plot No. 100, Phase III, Gandi Nagar, Hyderabad - 500037' }, redirectPath: 'https://www.pureearth.co.in/', areaId: 'loc1' },
  { lng: 78.407654, lat: 17.490950, details: { address: 'Envirokare Recycling Solutions Pvt. Ltd', description: 'A, 48, A.S.Raju Nagar, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500066' }, redirectPath: 'https://www.envirokare.in/', areaId: 'loc1' },
  { lng: 78.366631, lat: 17.464600, details: { address: 'E WASTE RECYCLING', description: '2-41/5/1, Ghousia Masjid Rd, Vinayaka Nagar, HITEC City, Khanammet, Hyderabad, Telangana 500084' }, redirectPath: 'https://www.globaltrader.in/', areaId: 'loc1' },
  { lng: 78.449730, lat: 17.514860, details: { address: 'Star Iron Traders', description: 'Plot No 198/P, Subhash Nagar, Jeedimetla, Hyderabad, Telangana 500055' }, redirectPath: 'https://starirontrader.com/', areaId: 'loc1' },
  { lng: 78.50431542247894, lat: 17.38753657602335, details: { address: 'RECYCLE ONE', description: '16-9-406/A/54/1, old malakpet, near zaqriya mosque, Wahed Nagar, Amberpet, Hyderabad, Telangana 500036' }, redirectPath: 'https://www.recycleone.in/', areaId: 'loc2' },
  { lng: 78.50284066873745, lat: 17.38077021491259, details: { address: 'Crapbin', description: '16-9-749/95, Race Course Rd, Papaiah Basthi, Old Malakpet, Hyderabad, Telangana 500036' }, redirectPath: 'https://crapbin.com/', areaId: 'loc2' },
  { lng: 78.4924661966161, lat: 17.42628837713739, details: { address: 'E-scrap Dealers', description: '4-308/3/b, Musheerabad, Bhagyalaxmi Nagar, Bhoiguda, Hyderabad, Telangana 500080' }, redirectPath: 'http://www.electronicscrapbuyer.com/', areaId: 'loc4' },
  { lng: 78.49593516653327, lat:17.422096412187383, details: { address: 'azka & company scrap buyer', description: '1-4-308/7, siddiq nagar, Musheerabad, Bholakpur, Kavadiguda, Hyderabad, Telangana 500020' }, redirectPath: 'https://cityscrapbuyer.com/', areaId: 'loc4' },
  { lng: 78.49482179791076, lat: 17.418484580930752, details: { address: 'Skrapbin - Scrap Buyers', description: '1-4-666/14, Vigneswar Enclave, Bakaram, Kavadiguda, Hyderabad, Telangana 500020' }, redirectPath: 'https://skrapbin.com/', areaId: 'loc4' },
  { lng: 78.49281773439026, lat: 17.419653122390173, details: { address: 'Hyderabad Scrap Buyer', description: '1-4-551/6/a, Bakaram, Kavadiguda, Hyderabad, Telangana 500020' }, redirectPath: 'http://www.hyderabadscrapbuyer.com/', areaId: 'loc4' },
  { lng: 78.42748217724629, lat: 17.42388041271249, details: { address: 'MS TRADERS', description: 'backside of cinemax, Plot no.102, Road No. 14, near tv9, BNR Colony, Venkat Nagar, Banjara Hills, Hyderabad, Telangana 500034' }, redirectPath: 'http://www.hyderabadscrapbuyers.com/', areaId: 'loc3' },
  { lng: 78.4407299329105, lat:17.4154887973299,details: { address: 'Recycling center', description: '8-2-601/G/292, Gouri Shankar Nagar Colony, Banjara Hills, Hyderabad, Telangana 500034' }, redirectPath: 'https://www.electronicrecycling.in/', areaId: 'loc3' },
  { lng: 78.4368427008596, lat: 17.41077295783755,details: { address: 'Z Enviro Industries Pvt Ltd', description: 'Road No. 12, NBT Nagar, Banjara Hills, Hyderabad, Telangana 500034' }, redirectPath: 'http://www.zenviroindustries.com/', areaId: 'loc3' },
  { lng: 78.51101065843497, lat: 17.386672490160837,details: { address: 'Reuze', description: '16-11-16/C/G/34, Afzal Nagar, Malakpet Extension, Malakpet, Hyderabad, Telangana 500036' }, redirectPath: 'https://www.reuze.in/', areaId: 'loc2' },
  
  // Add more locations with details, redirect paths, and areaId
];

function initMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY3J5cHRvYml0c2JlZSIsImEiOiJjbHZ2YTg1b3MwNXBjMmlvZzJvNjNyc3VjIn0.aa3ztvIycGGaIcOWiOoZbg';
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [78.412304, 17.430334], // Default center location
    zoom: 6
  });

  const areaSelect = document.getElementById('area-select');

  // Populate area options
  locationAreas.forEach(area => {
    const option = document.createElement('option');
    option.value = area.id;
    option.textContent = area.label;
    areaSelect.appendChild(option);
  });

  areaSelect.addEventListener('change', function() {
    const selectedArea = this.value;
    if (selectedArea) {
      clearMarkers();
      const areaDetails = locationAreas.find(area => area.id === selectedArea);
      if (areaDetails) {
        map.flyTo({ center: areaDetails.center, zoom: areaDetails.zoom });
        addMarkers(selectedArea);
      }
    }
  });
}

function addMarkers(areaId) {
  const areasAside = document.getElementById('areas-aside');
  areasAside.innerHTML = ''; // Clear previous pin details

  const locationsInArea = locations.filter(location => location.areaId === areaId);

  locationsInArea.forEach(function(location, index) {
    const marker = new mapboxgl.Marker()
      .setLngLat([location.lng, location.lat])
      .addTo(map);

    const popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<div><b>${index + 1}. ${location.details.address}</b><br>${location.details.description}</div>`);

    marker.setPopup(popup);

    markers.push(marker);

    // Create a div element to display the pin details
    const pinDetailsDiv = document.createElement('div');
    pinDetailsDiv.classList.add('w-full', 'p-2', 'mb-4');

    // Create a div for the pin details content
    const pinDetailsContent = document.createElement('div');
    pinDetailsContent.classList.add('border', 'border-gray-600', 'p-4', 'rounded', 'flex', 'flex-col', 'w-full', 'md:w-2/3');

    // Create a span element for the pin details address
    const pinDetailsAddress = document.createElement('span');
    pinDetailsAddress.textContent = `${index + 1}. ${location.details.address}`;
    pinDetailsContent.appendChild(pinDetailsAddress);

    // Create a span element for the pin details description
    const pinDetailsDescription = document.createElement('span');
    pinDetailsDescription.textContent = location.details.description;
    pinDetailsContent.appendChild(pinDetailsDescription);

    // Create a button element for redirection
    const redirectButton = document.createElement('button');
    redirectButton.textContent = 'Contact Us';
    redirectButton.classList.add('bg-green-500', 'text-white', 'px-2', 'py-1', 'rounded', 'mt-4', 'self-center');
    redirectButton.addEventListener('click', () => {
      window.location.href = location.redirectPath;
    });
    pinDetailsContent.appendChild(redirectButton);

    pinDetailsDiv.appendChild(pinDetailsContent);
    areasAside.appendChild(pinDetailsDiv);
  });
}


function clearMarkers() {
  markers.forEach(function(marker) {
    marker.remove();
  });
  markers = [];
}

function clickonlocate() {
  window.location.href = 'locate.html';
}
