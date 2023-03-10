const routines = [
    {
        name: 'Programming',
        description: 'Programming for problem solving',
        emoji: '๐ง๐ปโ๐ป',
        type: 'weekly',
        time: {
            1: ['10:20', '11:10'],
            2: ['12:00', '12:50'],
            3: ['10:20', '11:10'],
            4: ['12:00', '12:50'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Mathematics',
        description: 'Mathematics-IIA',
        emoji: 'โ',
        type: 'weekly',
        time: {
            1: ['12:00', '12:50'],
            3: ['11:10', '12:00'],
            4: ['11:10', '12:00'],
            5: ['11:10', '12:00'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Chemistry',
        description: 'Chemistry-IA',
        emoji: '๐งช',
        type: 'weekly',
        time: {
            1: ['11:10', '12:00'],
            2: ['11:10', '12:00'],
            3: ['12:00', '12:50'],
            5: ['10:20', '11:10'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Language',
        description: 'English',
        emoji: '๐',
        type: 'weekly',
        time: {
            2: ['10:20', '11:10'],
            4: ['10:20', '11:10'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Graphics & Design',
        description: 'Graphics & Design Class',
        emoji: '๐จ',
        type: 'weekly',
        time: {
            5: ['13:30', '2:20'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Programming Lab X',
        description: 'Let\'s code X group',
        emoji: '๐จ๐ปโ๐ป',
        type: 'weekly',
        time: {
            3: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Programming Lab Y',
        description: 'Let\'s code Y group',
        emoji: '๐จ๐ปโ๐ป',
        type: 'weekly',
        time: {
            1: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Chemistry Lab X',
        description: 'Chemistry Lab for X group',
        emoji: '๐งช',
        type: 'weekly',
        time: {
            1: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Chemistry Lab Y',
        description: 'Chemistry Lab for Y group',
        emoji: '๐งช',
        type: 'weekly',
        time: {
            3: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Language Lab X',
        description: 'English Lab for X group',
        emoji: '๐',
        type: 'weekly',
        time: {
            2: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Language Lab Y',
        description: 'English Lab for Y group',
        emoji: '๐',
        type: 'weekly',
        time: {
            4: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Graphics & Design X',
        description: 'Graphics & Design Lab for X group',
        emoji: '๐จ',
        type: 'weekly',
        time: {
            2: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    },
    {
        name: 'Graphics & Design Y',
        description: 'Graphics & Design Lab for Y group',
        emoji: '๐จ',
        type: 'weekly',
        time: {
            4: ['13:30', '16:40'],
        },
        sub: 'BUIE-CSE-2'
    }

]

// console.log(JSON.stringify(routines));

const fs = require('fs');
fs.writeFile('./sampleRoutine.json', JSON.stringify(routines), function (err) {
    if (err) {
        console.log(err);
    }
})

// export default routines