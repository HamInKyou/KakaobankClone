window.onload = function(){
    let cards = Array.from(document.querySelectorAll('.card'));
    const leftBtn = document.getElementById('slide-left-btn');
    const rightBtn = document.getElementById('slide-right-btn');
    const position = [];
    for(var i=0; i<cards.length; i++){
        position.push(100/cards.length * i);
        slide(cards[i],i);
    }
    console.log(position);
    
    leftBtn.onclick = function(){
        console.log('left btn');
        cards.map( (card) => {
            const viewIdx =  parseInt(card.attributes['view-index'].value);
            if(viewIdx - 1 == -1){
                card.attributes['view-index'].value = cards.length - 1;
            }else
                card.attributes['view-index'].value = viewIdx - 1;
            slide(card, card.attributes['view-index'].value );
            console.log(card.attributes['view-index'].value);

         });
    };
    rightBtn.onclick = function(){
        console.log('right btn');
        cards.map( (card) => {
            const viewIdx =  parseInt(card.attributes['view-index'].value);
            if(viewIdx + 1 == cards.length){
                card.attributes['view-index'].value = 0;
            }else
                card.attributes['view-index'].value = viewIdx + 1;
            slide(card, card.attributes['view-index'].value );
        });
    };
    function slide(card, viewIdx){
        if(viewIdx == parseInt(cards.length/2)){
            card.classList.add('card-center');
        }else{
            card.classList.remove('card-center');
        }
        card.style.left = `${position[viewIdx]}%`;

        if(viewIdx == 0 || viewIdx == cards.length -1){
            card.style.visibility = 'hidden';
        } else {
            card.style.visibility = 'visible';
        }
    }
}
