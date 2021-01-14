require('../src/db/mongoose.js');
const Task = require('../src/models/task.js');
const User = require('../src/models/user.js');


// User.findByIdAndUpdate('5fff70ee708ff92225af2363', {age: 1}).then((user) => {
//     console.log(user);

//     return User.countDocuments({age: 1});
// }).then((count) => {
//     console.log(count);
// }).catch(e => console.log(e));

const UpdateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

// UpdateAgeAndCount('5fffbbe0c208693523fc9f42', 2).then(count => {
//     console.log(count);
// }).catch(e => console.log(e))

const deleteTaskAndCount = async id => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCount('5fff68f42e19601ecf43c2a1').then(count => {
    console.log(count);
}).catch(e => console.log(e));