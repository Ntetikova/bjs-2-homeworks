class AlarmClock {
    constructor() {
        this.alarmCollection =[];
        this.intervalId = null;
    }


addClock(time, callback) {
    if(!time || !callback) {
        throw new Error("Отсутствуют обязательные аргументы");
    }

    if(this.alarmCollection.some(alarm => alarm.time === time)) {
        console.warn("Уже присутствует звонок на это же время");
    }

    const newAlarm = {
        callback,
        time,
        canCall: true
    };
    this.alarmCollection.push(newAlarm);
}

removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
}

getCurrentFormattedTime() {
    const now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let nowTime = currentHours + ":" + currentMinutes;
    return nowTime;
}

start() {
    if(this.intervalId) {
        return;
    }
    this.intervalId = setInterval(() => {
        const currentTime = this.getCurrentFormattedTime();
        
        this.alarmCollection.forEach(alarm => {
            if (alarm.time === currentTime && alarm.canCall) {
                alarm.canCall = false;
                alarm.callback();
            }
        });
    }, 1000);      
}

stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
}

resetAllCalls() {
    this.alarmCollection.forEach(alarm => {
        alarm.canCall = true;
    });
}

clearAlarms() {
    this.stop();
    this.alarmCollection = [];
}

}
