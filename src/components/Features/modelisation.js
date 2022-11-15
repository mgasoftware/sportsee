export default class Modelisation {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = data?.sessions;
    }

    get formatedActivity() {
        return this.formatActivity()
    }

    formatActivity() {
        return (
            this.sessions = this.sessions?.map((session, index) => ({ index: index+1, kg: session.kilogram, kcal: session.calories }))
        )
    }
}