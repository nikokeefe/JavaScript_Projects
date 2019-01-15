const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log('Hello');

    // Interpolated
    var heart = '❤';
    console.log('Hello from here %s!', '❤')
    console.log(`Hello from here ${heart}!`);

    // Styled
    console.log('%c I am a great idea 😊', 
        'font-size:50px; background: yellow; text-shadow: 2px 2px 0 blue;');

    // warning!
    console.warn('Ohh NOO');

    // Error :|
    console.error("Shit!");

    // Info
    console.info('Crocodiles eat 3-4 people per year 😲');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'No it doesn\'t');

    // clearing
    // console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old.`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old.`);
        console.groupEnd(`${dog.name}`);
    })

    // counting
    console.count('Bob');
    console.count('Bob');
    console.count('Steve');
    console.count('Bob');
    console.count('Bob');
    console.count('Bob');
    console.count('Steve');
    console.count('Steve');
    console.count('Bob');
    console.count('Bob');


    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/nikokeefe')
        .then(data => data.json())
        .then(data => {
            console.timeEnd('fetching data');
            console.log(data);
        });

    // table
    console.table(dogs);
