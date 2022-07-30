export const emojis = {
    radiant: require('../../../assets/humores/radiant.png'),
    happy: require('../../../assets/humores/happy.png'),
    ok: require('../../../assets/humores/ok.png'),
    sad: require('../../../assets/humores/sad.png'),
    terrible: require('../../../assets/humores/terrible.png')
}

export const corETraducao = {
    radiant: { cor: 'yellow', name: 'radiante'},
    happy: { cor: '#E24B4B', name: 'feliz' },
    ok: { cor: 'black', name: 'ok' },
    sad: { cor: '#4B75E2', name: 'mal' },
    terrible: { cor: '#4BE263', name: 'triste' }
}

const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro");

export const dateFormat = (dateInitial) => {
    const date = new Date(dateInitial);
    const hh = date.getHours();
    const mm = date.getMinutes();
    const dd = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const dateList = {
        hora: hh < 10 ? `0${hh}` : hh,
        minutes: mm < 10 ? `0${mm}` : mm,
        day: dd < 10 ? `0${dd}` : dd,
        month: monthName[date.getMonth()],
        monthIndex: month < 10 ? `0${month}` : month,
        year: date.getFullYear()
    }

    return dateList;
}

export const genderTranslate = {
    female: 'feminino',
    male: 'masculino',
}