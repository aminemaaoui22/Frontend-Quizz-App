export const API_URL: string = "http://54.37.9.160:8080/fr.n7.web.app.main-web/rest"

// export const SOCKET_URL: string = "http://54.37.9.160:8080/fr.n7.web.app.main-web/quizz/game"
export let SOCKET_URL: string = "ws://54.37.9.160:8080/fr.n7.web.app.main-web/quizz/game"

export let setURL = (id: string) => {
    SOCKET_URL = "ws://54.37.9.160:8080/fr.n7.web.app.main-web/quizz/game/"+id;
    console.log('set URL called!')
    console.log(`new URL = ${SOCKET_URL}`)
}