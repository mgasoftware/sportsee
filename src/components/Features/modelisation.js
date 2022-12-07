import PropTypes from 'prop-types';

export default class Modelisation {
    /**
     * 
     * @param {object} data 
     * @param {number} data.userId
     * @param {object} data.sessions
     * @param {object} data.kind
     * @param {object} data.data
     * @param {number} data.todayScore
     * @param {number} data.score
     * @param {object} data.keyData
     */
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = data?.sessions;
        this.kind = data?.kind;
        this.dataPerfs = data?.data;
        this.todayScore = data?.todayScore;
        this.score = data?.score;
        this.keyData = data?.keyData;
        this.category = ['Cardio', 'Energie', 'Endurance', 'Force', 'Vitesse', 'Intensité'];
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

    /**
     * @param {object} sessions
     * @returns {object}
     */
    formatActivity() {
        return (
            this.sessions = this.sessions?.map((session, index) => ({
                index: index + 1, kg: session.kilogram, kcal: session.calories
            }))
        );
    }

    /**
     * @param {object} sessions
     * @returns {object}
     */
    formatAverage() {
        return (
            this.sessions = this.sessions?.map((session) => ({
                day: ['L', 'M', 'M', 'J', 'V', 'S', 'D'], min: session.sessionLength
            }))
        );
    }

    /**
     * @param {object} dataPerfs
     * @returns {object}
     */
    formatPerf() {
        return (
            this.dataPerfs = this.dataPerfs?.map((dataPerf) => ({
                kind: this.category[dataPerf.kind - 1], value: dataPerf.value
            }))
        );
    }
}

Modelisation.propTypes = {
    data: PropTypes.object.isRequired
};