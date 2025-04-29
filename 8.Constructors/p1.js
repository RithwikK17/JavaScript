/* 
    Built-in constructor
        Date()
        Array()
        Boolean()
        String()
        Number()
        Object()

        Custom_name()
*/

var x = new Date();
console.log(`date object =`, x)
document.writeln(`<h1>${x}</h1>`)

// methods of date - IST 
document.writeln(`<h3> Day = ${x.getDay()}</h3>`)
document.writeln(`<h3> Date = ${x.getDate()}</h3>`)
document.writeln(`<h3> Month = ${x.getMonth()}</h3>`) /* 0-> January & 11->December */
document.writeln(`<h3> Year = ${x.getYear()}</h3>`)
document.writeln(`<h3> Full Year = ${x.getFullYear()}</h3>`)

document.writeln(`<hr/>`)

// methods of time - IST
document.writeln(`<h3>Hour = ${x.getHours()}</h3>`)
document.writeln(`<h3>Min = ${x.getMinutes()}</h3>`)
document.writeln(`<h3>Sec = ${x.getSeconds()}</h3>`)
document.writeln(`<h3>MilliSec = ${x.getMilliseconds()}</h3>`)

document.writeln(`<hr/>`)

// GMT (Greenwich Mean Time) / UTC (Co-ordinated Universal Time)
document.writeln(`<h3>UTC Date =${x.getUTCDate()}</h3>`)
document.writeln(`<h3>UTC Day =${x.getUTCDay()}</h3>`)
document.writeln(`<h3>UTC Month =${x.getUTCMonth()}</h3>`)
document.writeln(`<h3>UTC Year =${x.getUTCFullYear()}</h3>`)

document.writeln(`<hr/>`)

document.writeln(`<h3>UTC Hour =${x.getUTCHours()}</h3>`)
document.writeln(`<h3>UTC Min =${x.getUTCMinutes()}</h3>`)
document.writeln(`<h3>UTC Sec =${x.getUTCSeconds()}</h3>`)
document.writeln(`<h3>UTC MilliSec =${x.getUTCMilliseconds()}</h3>`)