const greeter = (name = 'annonymous', age = 0) => {
    console.log('Hello ' + name + ' you are ' + age + ' years old.');
}


greeter('Dakota', 29);
greeter();