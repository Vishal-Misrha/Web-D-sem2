
        let intervalId = null;

        function startCountdown() {
            const input = document.getElementById('number');
            let count = parseInt(input.value);
            
            if (isNaN(count) || count < 1) {
                alert('Please enter a valid positive number!');
                return;
            }

            input.disabled = true;
            const button = document.querySelector('button');
            button.disabled = true;
            button.textContent = 'Counting...';

            const countdownEl = document.getElementById('countdown');
            const messageEl = document.getElementById('message');
            
            countdownEl.textContent = count;
            messageEl.textContent = '';

            if (intervalId) clearInterval(intervalId);

            intervalId = setInterval(() => {
                count--;
                countdownEl.textContent = count;

                if (count <= 0) {
                    clearInterval(intervalId);
                    countdownEl.textContent = '🎉';
                    messageEl.textContent = 'Countdown Complete!';
                    
                    input.disabled = false;
                    button.disabled = false;
                    button.textContent = 'Start Countdown';
                }
            }, 1000);
        }

        document.getElementById('number').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') startCountdown();
        });