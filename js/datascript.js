fetch("../postscrape/output.json")
    .then(res => res.json())
    .then(data => {
        document.getElementById('pro-name').innerHTML = data[0].name;
        document.querySelector('title').innerHTML = data[0].name;
        document.getElementById('position').innerHTML = (data[0].position).slice(0, -2);
        profile_image = document.getElementById('pro-image').innerHTML = data[0].image;
        document.querySelector("#gsc_prf_pup-img").className = 'rounded-circle mb-5';

        document.querySelector('a.navbar-brand').innerHTML = data[0].place;

        let src = [];
        for (let i = 0; i < data[0].interest.length; i++) {
            src[i] = 'https://en.wikipedia.org/wiki/'+data[0].interest[i].replaceAll(' ','_');
            
            document.getElementById('skills').innerHTML += "<div class='col-md-6 col-lg-4 mb-5'><div class='portfolio-item mx-auto d-flex align-items-center justify-content-center' data-bs-toggle='modal' data-bs-target='#portfolioModal"+i+"'><div class='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'><div class='portfolio-item-caption-content text-center text-white'><iclass='fas fa-plus fa-3x'></iclass=></div></div><h4>" + data[0].interest[i] + "</h4></div></div>" + 
            "<div class='portfolio-modal modal fade' id='portfolioModal"+i+"' tabindex='-1' aria-labelledby='portfolioModal"+i+"' aria-hidden='true'><div class='modal-dialog modal-xl'><div class='modal-content' style='height: 80vh;'><div class='modal-header border-0'><button class='btn-close' type='button' data-bs-dismiss='modal' aria-label='Close'></button></div><div class='modal-body text-center pb-5'><div class='container'><div class='row justify-content-center'><iframe src="+src[i]+ " height='400'></iframe></div></div></div></div></div></div>";
        }
        const contant_info = data[0].contact;

        const email = document.createTextNode(contant_info.substring(contant_info.indexOf('E'), contant_info.indexOf('P')));
        const email_div = document.createElement('div');
        email_div.innerHTML = '<i class="fa-solid fa-envelope"></i> ';
        email_div.appendChild(email);
        document.querySelector('.contact-info').appendChild(email_div);

        const tel = document.createTextNode(contant_info.substring(contant_info.indexOf('P'), contant_info.indexOf(')')));
        const tel_div = document.createElement('div');
        tel_div.innerHTML = '<i class="fa-solid fa-phone"></i> ';
        tel_div.appendChild(tel);
        document.querySelector('.contact-info').appendChild(tel_div);


        document.querySelector('#about > div > div.row').innerHTML = "<div class='col-lg-4 ms-auto'><p class='lead'>Ali Bohlooli is a professor and academic researcher at University of Isfahan who has co-authored 40 publication(s) receiving 226 citation(s).</p></div><div class='col-lg-4 me-auto'><p class='lead'>The author has an hindex of 8. The author has done significant research in the topic(s): Network packet & Routing protocol.</p></div>";

        nr_of_pub = data[0].publication_title.length;

        for (let i = 0; i < nr_of_pub; i++) {

            t_row = document.createElement("tr");
            document.getElementById('table_body').appendChild(t_row);
            t_header = document.createElement('th');
            t_header.appendChild(document.createTextNode(i + 1));
            t_row.appendChild(t_header);

            t_publication_title = document.createElement('td');
            t_publication_title.appendChild(document.createTextNode(data[0].publication_title[i]));
            t_row.appendChild(t_publication_title);

            t_publication_author = document.createElement('td');
            t_publication_author.appendChild(document.createTextNode(data[0].publication_author[i]));
            t_row.appendChild(t_publication_author);

            t_citations = document.createElement('td');
            t_citations.appendChild(document.createTextNode(data[0].citations[i]));
            t_row.appendChild(t_citations);

            t_pub_year = document.createElement('td');
            t_pub_year.appendChild(document.createTextNode(data[0].pub_year[i]));
            t_row.appendChild(t_pub_year);

        }

    document.querySelector("#page-top > footer > div > div > div > a:nth-child(2)").href = 'https://publons.com/search/?search='+data[0].name;
    document.querySelector("#page-top > footer > div > div > div > a:nth-child(3)").href = 'https://typeset.io/authors?authors_q='+data[0].name;
    document.querySelector("#page-top > footer > div > div > div > a:nth-child(4)").href = 'https://www.researchgate.net/search?q='+data[0].name;

    
    
    });
