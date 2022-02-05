const acc_header = document.querySelectorAll('.acc-header');

acc_header.forEach( acc_item => {
    acc_item.addEventListener('click', function() {
        acc_item.classList.toggle('active');

        acc_header.forEach( acc_item => {
           if( acc_item != this){
            acc_item.classList.remove('active');
            acc_item.nextElementSibling.style.height = '0px'
            acc_item.style.color = '#000'
           }
        } )

        if(acc_item.classList.contains('active')){
            acc_item.nextElementSibling.style.height =acc_item.nextElementSibling.scrollHeight +'px'
            acc_item.style.border = '1px solid #5E98EE'
            acc_item.style.color = '#5E98EE'
        }else{
            acc_item.nextElementSibling.style.height = '0px'
            acc_item.style.border = 'none'
            acc_item.style.color = '#000'
        }
    })
})