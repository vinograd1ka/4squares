(function counter(){
    var click1 = document.querySelector('.click1');
    var click2 = document.querySelector('.click2');
    var click3 = document.querySelector('.click3');
    var click4 = document.querySelector('.click4');
    var blocksEl = document.querySelectorAll('.block')
    var block1 = document.querySelector('.block1')
    var block2 = document.querySelector('.block2')
    var block3 = document.querySelector('.block3')
    var block4 = document.querySelector('.block4')
    var counter1 = 0;
    var counter2 = 0;
    var counter3 = 0;
    var counter4 = 0;

    block1.addEventListener("click", function (){
        counter1++;
        click1.textContent = counter1;
        if(click1.textContent === '11'){
            counter1 = 0;
            click1.style.display = 'none';
        }
        else{
            click1.style.display = 'block';
        }
    });

    block2.addEventListener("click", function (){
        counter2++;
        click2.textContent = counter2;
        if(click2.textContent === '11'){
            counter2 = 0;
            click2.style.display = 'none';
        }
        else{
            click2.style.display = 'block';
        }
    });

    block3.addEventListener("click", function (){
        counter3++;
        click3.textContent = counter3;
        if(click3.textContent === '11'){
            counter3 = 0;
            click3.style.display = 'none';
        }
        else{
            click3.style.display = 'block';
        }
    });

    block4.addEventListener("click", function (){
        counter4++;
        click4.textContent = counter4;
        if(click4.textContent === '11'){
            counter4 = 0;
            click4.style.display = 'none';
        }
        else{
            click4.style.display = 'block';
        }
    });

})();

