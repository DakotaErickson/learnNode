require('../src/db/mongoose.js');
const Task = require('../src/models/task.js');


Task.findByIdAndDelete('5fffbe64e89e6e365d470936', ).then(() => {
    return Task.countDocuments({ completed: false})
}).then((count) => {
    console.log(count);
}).catch(e => console.log(e));