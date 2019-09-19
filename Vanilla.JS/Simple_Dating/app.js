// Simple dating website, app.js file 
// Zijing Mo

// Hard-code data array
const data = [
    {
        name: 'John Doe',
        age: 29,
        gender: 'male',
        lookingfor: 'female',
        location: 'Washington, DC',
        image: 'https://randomuser.me/portraits/men/81.jpg'
    },
    {
        name: 'Jane Smith',
        age: 36,
        gender: 'female',
        lookingfor: 'female',
        location: 'Chicago, IL',
        image: 'https://randomuser.me/portraits/women/81.jpg'
    },
    {
        name: 'William Johnson',
        age: 28,
        gender: 'male',
        lookingfor: 'male',
        location: 'Boston, MA',
        image: 'https://randomuser.me/portraits/men/35.jpg'
    },
    {
        name: 'Rachel Wong',
        age: 24,
        gender: 'female',
        lookingfor: 'male',
        location: 'Los Angeles, CA',
        image: 'https://randomuser.me/portraits/women/27.jpg'
    },
    {
        name: 'Lisa Taylor',
        age: 38,
        gender: 'female',
        lookingfor: 'male',
        location: 'New York, NY',
        image: 'https://randomuser.me/portraits/women/23.jpg'
    },
    {
        name: 'Michael Davis',
        age: 21,
        gender: 'male',
        lookingfor: 'female',
        location: 'Philadelphia, PA',
        image: 'https://randomuser.me/portraits/men/16.jpg'
    },
    {
        name: 'Ashley Anderson',
        age: 23,
        gender: 'female',
        lookingfor: 'male',
        location: 'Minneapolis, MN',
        image: 'https://randomuser.me/portraits/women/34.jpg'
    },
    {
        name: 'Nicole Brown',
        age: 31,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/portraits/women/30.jpg'
    },
    {
        name: 'Robert Patel',
        age: 33,
        gender: 'male',
        lookingfor: 'female',
        location: 'Dallas, TX',
        image: 'https://randomuser.me/portraits/men/39.jpg'
    },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
    const currentProfile =  profiles.next().value;

    if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}
        </li>
        <li class="list-group-item">Age: ${currentProfile.age}
        </li>
        <li class="list-group-item">Location: ${currentProfile.location}
        </li>
        <li class="list-group-item">Preference: A ${currentProfile.gender} is looking for a ${currentProfile.lookingfor}
        </li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}" style ="width:200px;height:200px;">`;
    }  else {
        // No more profiles
        window.location.reload();
    }
}

// Porfile Interator
function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    };
}