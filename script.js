// Ожидаем загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    // Находим кнопку и аудио
    const playButton = document.getElementById('playButton');
    const music = document.getElementById('music');

    // Добавляем обработчик события на кнопку
    playButton.addEventListener('click', function () {
        if (music.paused) {
            music.play(); // Включаем музыку
            playButton.classList.add('hidden'); // Скрываем кнопку
        }
    });

    // Кнопка "Выключить музыку (не работает)"
    document.getElementById('fakeStopButton').addEventListener('click', function () {
        alert('Эта кнопка не выключает музыку!');
    });
});