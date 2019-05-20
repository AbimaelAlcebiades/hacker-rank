function countVotes(a, b) {
    let winner = {
        name: '',
        votes: 0
    };
    let organizedVotes = {};
    for (let index = 0; index < b.length; index++) {
        const name = b[index].trim().toLowerCase();
        organizedVotes[name] = (organizedVotes[name] == undefined) ? 1 : organizedVotes[name] += 1;

        if (organizedVotes[name] >= winner.votes && (winner.name == '' || name < winner.name)) {
            winner.name = name;
            winner.votes = organizedVotes[name];
        }
    }
    console.log(winner.name);
}

countVotes(
    1,
    ['Abel', 'alcebiades', 'Abel', 'Abimael', 'Alcebíades', 'Abimael', 'Abimael', 'Other', 'Silva', 'Other', 'Other', 'Abel']
);