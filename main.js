// HAMBURGER
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const aLink = document.getElementsByTagName('a');
const main = document.getElementsByTagName('main')[0];
const footer = document.getElementsByTagName('footer')[0];

hamburger.onclick = () => {

    if(!nav.active) {

        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    main.onclick = () => {

        if(document.getElementsByClassName('active')) {

            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }  
    }

    footer.onclick = () => {

        if(document.getElementsByClassName('active')) {

            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }  
    }

    for(let a in aLink) {

        aLink[a].onclick = () => {

            //console.log('click1')
            if(document.getElementsByClassName('active')) {

                nav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    }
};


// SIDEBAR
const startBtn = document.getElementsByClassName('start-now');
const sideBar = document.getElementById('sidebar');
const body = document.getElementsByTagName('body')[0];
const header = document.getElementsByTagName('header')[0];


function openNav() {

    sideBar.style.width = "50%";
}

function closeNav() {

    sideBar.style.width = "0%";
}

for (const btn of startBtn) {

    btn.addEventListener('click', () => {

        console.log('button clicked');
        sideBar.classList.toggle('open');
        openNav()
        let all = document.createElement('div');
        body.appendChild(all);
        all.appendChild(header);
        all.appendChild(main);
        all.appendChild(footer);
        if (sideBar.classList.contains('open')) {

            all.addEventListener('click', () => {

                sideBar.classList.remove('open')
                if (sideBar.classList.contains('open') === false)
                body.appendChild(header);
                body.appendChild(main);
                body.appendChild(footer);
                all.remove();
            })
        }
    })
};


// SEARCH
const searchBar = document.getElementById('search');

const loadSearchData = () => {
    let cities = [
        'London',
        'Madrid',
        'Barcelona',
        'Berlin',
        'Paris',
        'Tarragona'
    ];

    cities.forEach((city)=>{
        let a = document.createElement("a");
        a.innerText = city;
        a.classList.add("listItem");
        list.appendChild(a);
        a.href = "./notAv.html";
        a.target = '_blank'
    })
}

const search = () => {
    let list = document.getElementById('list');
    let listItems = document.getElementsByClassName('listItem');
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let noResoluts = true;
    for (i = 0; i < listItems.length; i++) {
        if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === ' ') {
            listItems[i].style.display = 'none';
            continue;
        }
        else {
            listItems[i].style.display = "flex";
            noResoluts = false;
        }
    }
    if (noResoluts === true) {
        list.style.display = 'none';
    }
    else {
        list.style.display = 'block';
    } 
}