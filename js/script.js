const title = document.getElementById('title');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');
const nav6 = document.getElementById('nav6');
const nav7 = document.getElementById('nav7');
const nav8 = document.getElementById('nav8');
const nav9 = document.getElementById('nav9');
const nav10 = document.getElementById('nav10');
const heading = document.getElementById('heading');



const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
const h8 = document.getElementById('h8');


const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');
const a6 = document.getElementById('a6');
const a7 = document.getElementById('a7');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');
const s13 = document.getElementById('s13');
const s14 = document.getElementById('s14');
const s15 = document.getElementById('s15');
const s16 = document.getElementById('s16');
const s17 = document.getElementById('s17');
const s18 = document.getElementById('s18');
const s19 = document.getElementById('s19');

const fe0 = document.getElementById('fe0');
const fe1 = document.getElementById('fe1');
const fe2 = document.getElementById('fe2');
const fe3 = document.getElementById('fe3');
const fe4 = document.getElementById('fe4');
const fe5 = document.getElementById('fe5');
const fe6 = document.getElementById('fe6');
const fe7 = document.getElementById('fe7');
const fe8 = document.getElementById('fe8');
const fe9 = document.getElementById('fe9');
const fe10 = document.getElementById('fe10');

const te0 = document.getElementById('te0');
const te1 = document.getElementById('te1');
const te2 = document.getElementById('te2');
const te3 = document.getElementById('te3');
const te4 = document.getElementById('te4');
const te5 = document.getElementById('te5');
const te6 = document.getElementById('te6');
const te7 = document.getElementById('te7');
const te8 = document.getElementById('te8');
const te9 = document.getElementById('te9');



const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');

const t0 =document.getElementById('t1');
const t1 =document.getElementById('t2');
const t2 =document.getElementById('t2');
const t3 =document.getElementById('t3');
const t4 =document.getElementById('t4');
const t5 =document.getElementById('t5');
const t6 =document.getElementById('t6');
const t7 =document.getElementById('t7');
const t8 =document.getElementById('t8');
const t9 =document.getElementById('t9');
const t10 =document.getElementById('t10');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');
const f10 = document.getElementById('f10');
const f11 = document.getElementById('f11');
const f12 = document.getElementById('f12');
const f13 = document.getElementById('f13');
const f14 = document.getElementById('f14');
const f15 = document.getElementById('f15');
const f16 = document.getElementById('f16');
const f17 = document.getElementById('f17');
const f18 = document.getElementById('f18');




const p0 =document.getElementById('p0');
const p1 =document.getElementById('p1');
const p2 =document.getElementById('p2');
const p3 =document.getElementById('p3');


const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');

const g0 = document.getElementById('topbar');
const g1 = document.getElementById('nav');
const g2 = document.getElementById('header');
const g3 = document.getElementById('about');
const g4 = document.getElementById('service');
const g5 = document.getElementById('feature');
const g6 = document.getElementById('team');
const g7 = document.getElementById('appointment');
const g8 = document.getElementById('testimonial');
const g9 = document.getElementById('footer');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');

const paragraph1 = document.getElementById('paragraph1');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}
function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);

            // Update content based on the current page
            updateContent(title, mergedData.title.title);

            updateLinkContent(nav0, mergedData.nav.nav0);
            updateLinkContent(nav1, mergedData.nav.nav1);
            updateLinkContent(nav2, mergedData.nav.nav2);
            updateLinkContent(nav3, mergedData.nav.nav3);
            updateLinkContent(nav4, mergedData.nav.nav4);
            updateLinkContent(nav5, mergedData.nav.nav5);
            updateLinkContent(nav6, mergedData.nav.nav6);
            updateLinkContent(nav7, mergedData.nav.nav7);
            updateLinkContent(nav8, mergedData.nav.nav8);
            updateLinkContent(nav9, mergedData.nav.nav9);
            updateLinkContent(nav10, mergedData.nav.nav10);

            updateContent(h0, mergedData.header.h0);
            updateContent(h1, mergedData.header.h1);
            updateContent(h2, mergedData.header.h2);
            updateContent(h3, mergedData.header.h3);
            updateContent(h4, mergedData.header.h4);
            updateContent(h5, mergedData.header.h5);
            updateContent(h6, mergedData.header.h6);
            updateContent(h7, mergedData.header.h7);
            updateContent(h8, mergedData.header.h8);
            
            updateContent(a0, mergedData.about.a0);
            updateContent(a1, mergedData.about.a1);
            updateContent(a2, mergedData.about.a2);
            updateContent(a3, mergedData.about.a3);
            updateContent(a4, mergedData.about.a4);
            updateContent(a5, mergedData.about.a5);
            updateContent(a6, mergedData.about.a6);
            updateContent(a7, mergedData.about.a7);

            updateContent(s0, mergedData.service.s0);
            updateContent(s1, mergedData.service.s1);
            updateContent(s2, mergedData.service.s2);
            updateContent(s3, mergedData.service.s3);
            updateContent(s4, mergedData.service.s4);
            updateContent(s5, mergedData.service.s5);
            updateContent(s6, mergedData.service.s6);
            updateContent(s7, mergedData.service.s7);
            updateContent(s8, mergedData.service.s8);
            updateContent(s9, mergedData.service.s9);
            updateContent(s10, mergedData.service.s10);
            updateContent(s11, mergedData.service.s11);
            updateContent(s12, mergedData.service.s12);
            updateContent(s13, mergedData.service.s13);
            updateContent(s14, mergedData.service.s14);
            updateContent(s15, mergedData.service.s15);
            updateContent(s16, mergedData.service.s16);
            updateContent(s17, mergedData.service.s17);
            updateContent(s18, mergedData.service.s18);
            updateContent(s19, mergedData.service.s19);

            updateContent(fe0, mergedData.feature.fe0);
            updateContent(fe1, mergedData.feature.fe1);
            updateContent(fe2, mergedData.feature.fe2);
            updateContent(fe3, mergedData.feature.fe3);
            updateContent(fe4, mergedData.feature.fe4);
            updateContent(fe5, mergedData.feature.fe5);
            updateContent(fe6, mergedData.feature.fe6);
            updateContent(fe7, mergedData.feature.fe7);
            updateContent(fe8, mergedData.feature.fe8);
            updateContent(fe9, mergedData.feature.fe9);
            updateContent(fe10, mergedData.feature.fe10);

            updateContent(te0, mergedData.team.te0);
            updateContent(te1, mergedData.team.te1);
            updateContent(te2, mergedData.team.te2);
            updateContent(te3, mergedData.team.te3);
            updateContent(te4, mergedData.team.te4);
            updateContent(te5, mergedData.team.te5);
            updateContent(te6, mergedData.team.te6);
            updateContent(te7, mergedData.team.te7);
            updateContent(te8, mergedData.team.te8);
            updateContent(te9, mergedData.team.te9);

            updateContent(b0, mergedData.appointment.b0);
            updateContent(b1, mergedData.appointment.b1);
            updateContent(b2, mergedData.appointment.b2);
            updateContent(b3, mergedData.appointment.b3);
            updateContent(b4, mergedData.appointment.b4);
            updateContent(b5, mergedData.appointment.b5);
            updateContent(b6, mergedData.appointment.b6);

            updateContent(t0, mergedData.testimonial.t0);
            updateContent(t1, mergedData.testimonial.t1);
            updateContent(t2, mergedData.testimonial.t2);
            updateContent(t3, mergedData.testimonial.t3);
            updateContent(t4, mergedData.testimonial.t4);
            updateContent(t5, mergedData.testimonial.t5);
            updateContent(t6, mergedData.testimonial.t6);
            updateContent(t7, mergedData.testimonial.t7);
            updateContent(t8, mergedData.testimonial.t8);
            updateContent(t9, mergedData.testimonial.t9);
            updateContent(t10, mergedData.testimonial.t10);

            updateContent(f0, mergedData.footer.f0);
            updateContent(f1, mergedData.footer.f1);
            updateContent(f2, mergedData.footer.f2);
            updateContent(f3, mergedData.footer.f3);
            updateContent(f4, mergedData.footer.f4);
            updateContent(f5, mergedData.footer.f5);
            updateContent(f6, mergedData.footer.f6);
            updateContent(f7, mergedData.footer.f7);
            updateContent(f8, mergedData.footer.f8);
            updateContent(f9, mergedData.footer.f9);
            updateContent(f10, mergedData.footer.f10);
            updateContent(f11, mergedData.footer.f11);
            updateContent(f12, mergedData.footer.f12);
            updateContent(f13, mergedData.footer.f13);
            updateContent(f14, mergedData.footer.f14);
            updateContent(f15, mergedData.footer.f15);
            updateContent(f16, mergedData.footer.f16);
            updateContent(f17, mergedData.footer.f17);
            updateContent(f18, mergedData.footer.f18);
          
            
            

            
            updateBackgroundColor(g0, mergedData.color.topbar);
            updateBackgroundColor(g1, mergedData.color.nav);
            updateBackgroundColor(g2, mergedData.color.header);
            updateBackgroundColor(g3, mergedData.color.about);
            updateBackgroundColor(g4, mergedData.color.service);
            updateBackgroundColor(g5, mergedData.color.feature);
            updateBackgroundColor(g6, mergedData.color.team);
            updateBackgroundColor(g7, mergedData.color.appointment);
            updateBackgroundColor(g8, mergedData.color.testimonial);
            updateBackgroundColor(g9, mergedData.color.footer);
        

            updateImageSrc(img1, mergedData.images.img1);
            updateImageSrc(img2, mergedData.images.img2);
            updateImageSrc(img3, mergedData.images.img3);
            updateImageSrc(img4, mergedData.images.img4);
            updateImageSrc(img5, mergedData.images.img5);
            updateImageSrc(img6, mergedData.images.img6);
            updateImageSrc(img7, mergedData.images.img7);
            updateImageSrc(img8, mergedData.images.img8);
            updateImageSrc(img9, mergedData.images.img9);
            updateImageSrc(img10, mergedData.images.img10);
            updateImageSrc(img11, mergedData.images.img11);
            updateImageSrc(img12, mergedData.images.img12);
            updateImageSrc(img13, mergedData.images.img13);

            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'contact.html') {
              updateContent(c1, mergedData.conatct.c1);
            updateContent(c2, mergedData.conatct.c2);
            updateContent(c3, mergedData.conatct.c3);
            updateContent(c4, mergedData.conatct.c4);
            updateContent(c5, mergedData.conatct.c5);
            updateContent(c6, mergedData.conatct.c6);
            updateContent(c7, mergedData.conatct.c7);
            updateContent(c8, mergedData.conatct.c8);
               
            } else if (fileName === 'about.html') {

            } else if (fileName === '404.html') {
              updateContent(p0, mergedData.page.p0);
              updateContent(p1, mergedData.page.p1);
              updateContent(p2, mergedData.page.p2);
              updateContent(p3, mergedData.page.p3);

            } else if (fileName === 'appointment.html') {

            }else if (fileName === 'feature.html') {

            }else if (fileName === 'service.html') {

            }else if (fileName === 'team.html') {

            }else if (fileName === 'testimonial.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});