const { DateTime } = require("luxon");
const {v4: uuidv4} = require('uuid');
const events = [
{
    id:'1',
    category:'Sports',
    title:'Football',
    hostName:'NCAA',
    startDateTime: DateTime.local(2023, 10, 14, 19, 30).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 10, 14, 21, 30).toLocaleString(DateTime.DATETIME_SHORT),
    details: 'This event provides entertainment for fans, alumni, students, and the general public. Many people enjoy watching football as a form of leisure entertainment, and college football games offer an opportunity for people to connect together and enjoy the sport.',
    image:'/images/football.png'
},
{
    id:'2',
    category:'Sports',
    title:'Soccer',
    hostName:'NCAA',
    startDateTime: DateTime.local(2023, 11, 1, 19, 0).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 11, 1, 21, 0).toLocaleString(DateTime.DATETIME_SHORT),
    details:'This soccer event promises an exhilarating experience for fans, alumni, students, and the wider community. College soccer matches serve as a hub for people to come together, share in the excitement, and revel in the beautiful game.',
    image:'/images/soccer.png'
},
{
    id:'3',
    category:'Sports',
    title:'Basketball',
    hostName:'NCAA',
    startDateTime: DateTime.local(2023, 12, 22, 19, 0).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 12, 22, 21, 0).toLocaleString(DateTime.DATETIME_SHORT),
    details:'Whether you are a seasoned basketball enthusiast or a casual observer, this event promises an unforgettable opportunity to be swept up in the excitement of the game and join a passionate, united crowd.',
    image:'/images/basketball.png'
},
{
    id:'4',
    category:'Employment',
    title:'Job Fair',
    hostName:'UNCC Career Center',
    startDateTime: DateTime.local(2023, 11, 4, 11, 0).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 11, 4, 14, 0).toLocaleString(DateTime.DATETIME_SHORT),
    details:'Job fairs give organizations the opportunity to directly recruit candidates. The largest events hold each year, drawing hundreds or thousands of candidates (students/alumni from UNC Charlotte and other colleges/universities)',
    image:'/images/fair.png'
},
{
    id:'5',
    category:'Employment',
    title:'Interview',
    hostName:'UNCC Career Center',
    startDateTime: DateTime.local(2023, 11, 27, 10, 0).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 11, 27, 10, 30).toLocaleString(DateTime.DATETIME_SHORT),
    details:'Practice interview is a professional development opportunity for you to gain feedback on your interview skills and resume from Employers, Career Coaches, Alumni, and More!',
    image:'/images/interview.png'
},
{
    id:'6',
    category:'Employment',
    title:'Internship',
    hostName:'UNCC Career Center',
    startDateTime: DateTime.local(2023, 6, 10, 9, 0).toLocaleString(DateTime.DATETIME_SHORT),
    endDateTime: DateTime.local(2023, 6, 10, 11, 0).toLocaleString(DateTime.DATETIME_SHORT),
    details:'The internships offered through the University Professional Internship Program differ significantly from most other student employment positions on campus as they are designed to provide professional knowledge and skill development consistent with your major/career goals.',
    image:'/images/internship.png'
}
];

exports.find = () => events;

exports.findById = id => events.find(event=>event.id === id);

exports.save = event => {
    event.id = uuidv4();
    events.push(event);
};

exports.getCategories = ()=>{
    let categories = new Array();
    events.forEach(event => {
        if (!categories.includes(event.category)) {
            categories.push(event.category);
        }
    });
    return categories;
}