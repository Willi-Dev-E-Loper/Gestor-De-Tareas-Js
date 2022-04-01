const { rawListeners } = require('process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Primer modo: lectura de tareas
const fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getUTCMonth() + 1;
const año = fecha.getFullYear();
let taskList = [];
let task = readline.createInterface

function addTask(taskList, taskDescription) {
    taskList.push({ done: false, description: taskDescription });
}

function printTaskList(taskList) {
    //[] Si no esta echo
    //[x]Si si esta echo
    let doit = taskList.done;
    for (let i = 0; i < taskList.length; ++i) {
        if (taskList[i].done) {
            console.log((i + 1) + ' [x]    ' + taskList[i].description + '    ' +
                dia + '/' + mes + '/' + año);
        } else {
            console.log((i + 1) + ' [ ]    ' + taskList[i].description + '    ' +
                dia + '/' + mes + '/' + año);
        }
    }
}

function mode1(taskList) {
    rl.question('Introduce un nueva tarea (fin si has terminado)', function(taskDesc) {
        switch (taskDesc) {
            case 'fin':
                console.log('finalizado');
                mode2(taskList);
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskDesc);
                console.log('La lista de tareas actual es: ');
                printTaskList(taskList);
                mode1(taskList);


        }

    });

}

function markTask(taskList, index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].done = true;
    } else {
        console.log('Numero de tarea incorrecto')
    }
}

function mode2(taskList) {
    printTaskList(taskList);
    rl.question('Que tarea has acabado? (1 - N)', function(taskNum) {
        switch (taskNum) {
            case 'fin':
            case 'exit':
                console.log('No olvides: no procrastines.')
                rl.close();
                break;
            default:
                markTask(taskList, taskNum - 1);
                mode2(taskList);


        }

    });
}
mode1(taskList);



//Segundo modo: marcar las tareas realizadas