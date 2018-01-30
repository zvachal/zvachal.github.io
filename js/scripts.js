function weekAndDay() {

    var date = new Date,
        days = ['Sunday','Monday','Tuesday','Wednesday',
                'Thursday','Friday','Saturday'],
        prefixes = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];

    return prefixes[0 | date.getDate() / 7] + ' ' + days[date.getDay()];

}

weekAndDay();
