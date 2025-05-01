/**
 *  Esta función me permite tomar una carta
 * @param {array <string>} deck es un arreglo de cartas
 * @returns {string} retorna la carta del deck
 */


export const pedirCarta = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta= deck.pop();
    return carta;
}
