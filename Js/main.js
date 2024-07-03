//Nav

function closeNav() { 
    $('.closebtn').on('click',function(){
        $('#sideMenu').hide()
    })
}

function openNav() { 
    $('.openNav').on('click',function(){
        $('#sideMenu').show()
    })
}