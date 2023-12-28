const wishes = [
    'Хочу пожелать тебе в Новом году больших успехов, счастливых событий и незабываемых встреч.<br>Пусть всё в жизни будет прекрасно!',
    'С Новым годом.<br>Желаю счастья без границ, удачи без перерыва, успеха без подвоха, богатой жизни без потерь!',
    'Дорогой друг, в наступающем году желаю тебе много радостных моментов и великих достижений.<br>Пусть рядом с тобой всегда будут родные и близкие люди, и в твоей жизни будет праздничное настроение.<br>Желаю тебе крепкого здоровья, исполнения всех желаний и бесконечного финансового благополучия.',
    'Желаю счастья, любви и океана положительных эмоций!<br>Искренне желаю тебе огромного счастья в Новом году.<br>Пусть он принесет лишь положительные эмоции, радость и процветание.<br>Желаю, чтобы доходы увеличивались, здоровье укреплялось, а любовь была вечной,',
    'Желаю тебе большой удачи и любви на весь год.<br>Пусть с волшебной ночи в твоей жизни начнется полоса невероятного везения, постоянного успеха, уверенных стремлений, гениальных идей и торжественных побед.<br>Желаю тебе, друг мой, здоровья и благополучия, веселых новогодних приключений и в целом нескучных дней в новом году!',
]

const modalWindow = document.querySelector('.modalWindow')
const closedEnvelope = document.querySelector('.closedEnvelope')
const openedEnvelope = document.querySelector('.openedEnvelope')
const SantaClaus = document.querySelector('.SantaClaus')
const wishWindow = document.querySelector('.wishWindow')

let counter = 0

document.addEventListener('DOMContentLoaded', () => {
    modalWindow.style.opacity = '1'
})

document.addEventListener('click', () => {
    if (counter == 0) {
        modalWindow.style.opacity = '0'
        setTimeout(() => {
            modalWindow.style.display = 'none'
        }, 500)
        counter++
    } else if (counter == 1) {
        closedEnvelope.style.top = '29vh'
        setTimeout(() => {
            closedEnvelope.style.opacity = '0'
            openedEnvelope.style.opacity = '1'
        }, 500)

        counter++
    } else if (counter == 2) {
        wishWindow.style.opacity = 1
        wishWindow.innerHTML = `<div class="wishtext"><h1>${
            wishes[getRandomInt(wishes.length)]
        }</h1></div>`
        counter++
    }
})

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
