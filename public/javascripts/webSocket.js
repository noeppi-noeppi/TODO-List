const webSocket = new WebSocket('ws://localhost:10000');

webSocket.addEventListener('message', (message) => {
    console.log(message.data);
    switch (message.data) {
        case "hide": {
            document.getElementById('blog').classList.add('hide');
            document.getElementById('blog').classList.remove('show');
            break;
        }
        case "show": {
            document.getElementById('blog').classList.remove('hide');
            document.getElementById('blog').classList.add('show');
            break;
        }
        case "toggleTaskOne": {
            if (document.getElementById('taskOne').classList.contains('finished')) {
                document.getElementById('taskOne').classList.remove('finished');
                document.getElementById('taskOne').classList.add('unfinished');
            } else {
                document.getElementById('taskOne').classList.remove('unfinished');
                document.getElementById('taskOne').classList.add('finished');
            }
            break;
        }
        case "toggleTaskTwo": {
            if (document.getElementById('taskTwo').classList.contains('finished')) {
                document.getElementById('taskTwo').classList.remove('finished');
                document.getElementById('taskTwo').classList.add('unfinished');
            } else {
                document.getElementById('taskTwo').classList.remove('unfinished');
                document.getElementById('taskTwo').classList.add('finished');
            }
            break;
        }
        case "toggleTaskThree": {
            if (document.getElementById('taskThree').classList.contains('finished')) {
                document.getElementById('taskThree').classList.remove('finished');
                document.getElementById('taskThree').classList.add('unfinished');
            } else {
                document.getElementById('taskThree').classList.remove('unfinished');
                document.getElementById('taskThree').classList.add('finished');
            }
            break;
        }
        case "toggleTaskFour": {
            if (document.getElementById('taskFour').classList.contains('finished')) {
                document.getElementById('taskFour').classList.remove('finished');
                document.getElementById('taskFour').classList.add('unfinished');
            } else {
                document.getElementById('taskFour').classList.remove('unfinished');
                document.getElementById('taskFour').classList.add('finished');
            }
            break;
        }
        case "reload": {
            location.reload();
            break;
        }
        case "stop": {
            webSocket.close();
            break;
        }
    }
    if (message.data.startsWith("settaskOne-")) {
        let data = message.data.substring(11, message.data.length)
        document.getElementById('taskOneText').textContent = data
        document.getElementById('taskOneStrike').textContent = data
    } else if (message.data.startsWith("settaskTwo-")) {
        let data = message.data.substring(11, message.data.length)
        document.getElementById('taskTwoText').textContent = data
        document.getElementById('taskTwoStrike').textContent = data
    } else if (message.data.startsWith("settaskThree-")) {
        let data = message.data.substring(13, message.data.length)
        document.getElementById('taskThreeText').textContent = data
        document.getElementById('taskThreeStrike').textContent = data
    } else if (message.data.startsWith("settaskFour-")) {
        let data = message.data.substring(12, message.data.length)
        document.getElementById('taskFourText').textContent = data
        document.getElementById('taskFourStrike').textContent = data
    }
});