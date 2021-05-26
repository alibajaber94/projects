var unit = 0,
    tens = 1;

    for ( var i = 0; i < 30; i++ ) {
        
        unit++;

        if ( unit > 9 ){
            tens++;
            unit = 0;            
        }

        while ( tens + unit >= 5 && tens + unit <= 10){
            console.log( i+ '-> ' + tens + "" + unit );
            break;
        }
        
    }

    // new task

    console.log('#'.repeat(20));

// new task    
// console.log(' '.repeat(out) + '*' + ' '.repeat(inside) + '*' + ' '.repeat(out));
var p = 0,
    inside = 5 - p,
    out = 5 - inside;

for ( var   counter = 0; counter < 10; counter++)
{
    inside = 5 - p;
    out = 5 - inside;
    if (counter <= 4){

        console.log(' '.repeat(out) + '*' + ' '.repeat(inside) + '*' + ' '.repeat(out) + '<=4');
        p += 2;
        // console.log('<=4');

    }
    else if (counter >= 5){

        console.log(' '.repeat(out) + '*' + ' '.repeat(inside) + '*' + ' '.repeat(out) + '>=5');
        p -= 2;
        // console.log('>=5')

    }
    console.log('inside ' + inside)
    console.log('out ' + out)
    console.log('p ' + p)
    // console.log(' '.repeat(p) + '*' + ' '.repeat(inside) + '*' + ' '.repeat(p));


}