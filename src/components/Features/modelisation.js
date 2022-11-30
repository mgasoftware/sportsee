export default class Modelisation {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = data?.sessions;
        this.kind = data?.kind;
        this.dataPerfs = data?.data;
        this.todayScore = data?.todayScore;
        this.score = data?.score;
        this.keyDatas = data?.keyData;
    }

    get formatedActivity() {
        return this.formatActivity();
    }

    get formatedAverage() {
        return this.formatAverage();
    }

    get formatedPerf() {
        return this.formatPerf().reverse();
    }

    formatActivity() {
        return (
            this.sessions = this.sessions?.map((session, index) => ({
                index: index + 1, kg: session.kilogram, kcal: session.calories
            }))
        );
    }

    formatAverage() {
        return (
            this.sessions = this.sessions?.map((session) => ({
                day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'], min: session.sessionLength
            }))
        );
    }

    formatPerf() {
        return (
            this.dataPerfs = this.dataPerfs?.map((dataPerf) => ({
                kind: this.kind[dataPerf.kind].charAt(0).toUpperCase() + this.kind[dataPerf.kind].slice(1), value: dataPerf.value
            }))
        );
    }
}