'use strict' ;

const firstNestingSearchObject = {
    "id": 6 
}
const secondNestingSearchObject = {
    "suite": "Apt. 692",
}
const thirdNestingSearchObject = {
    "lng": "-168.8889"
}

const mainFunction = ( searchObject ) => {

    return users.filter ( object => {

        let flag = false ;

        return (function searchFunction( objectFromArray ) {
            for ( let key in objectFromArray ) {
                if( typeof objectFromArray[ key ] === 'object' ) {
                    searchFunction ( objectFromArray[ key ] ) ;
                }
                else {
                    if( key in searchObject ) {
                        if( String( objectFromArray[ key ] ) === String( searchObject[ key ] ) ) {
                            flag = true;
                        }
                        else {
                            flag = false;
                        }
                    }
                    else {
                        continue ;
                    }
                }
            }
            return flag ;
        } ( object )) ;

    } ) ;

}

console.log( `Поиск первого уровня вложенности ${JSON.stringify( firstNestingSearchObject )}` ) ;
mainFunction( firstNestingSearchObject ).forEach( object => {
    console.log( object ) ;
} ) ;

console.log( `Поиск второго уровня вложенности ${JSON.stringify( secondNestingSearchObject )} `);
mainFunction( secondNestingSearchObject ).forEach( object => {
    console.log( object ) ;
} ) ;

console.log( `Поиск третьего уровня вложенности ${JSON.stringify( secondNestingSearchObject )} `);
mainFunction( thirdNestingSearchObject ).forEach( object => {
    console.log( object ) ;
} ) ;