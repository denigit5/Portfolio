document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.add('navbar-links-active');
    document.querySelector('.navbar-links').classList.remove('navbar-links-inactive');
  });
  document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link1').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link2').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });
  document.querySelector('.nav-link3').addEventListener('click', () => {
    document.querySelector('.navbar-links').classList.remove('navbar-links-active');
    document.querySelector('.navbar-links').classList.add('navbar-links-inactive');
  });

  const works = [
    {
      title: 'Tonic',
      popupimage2: 'Assets/files/Snapshoot2.png',
      popupimage3: 'Assets/files/Snapshoot3.png',
      popupimage4: 'Assets/files/Snapshoot4.png',
      popupimage: 'Assets/files/Snapshoot popuo desktop 1.png',
      mobiledescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      popupmobiledescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      popupdeskdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      title: 'Multi-Post Stories',
      popupimage2: 'Assets/files/Snapshoot2.png',
      popupimage3: 'Assets/files/Snapshoot3.png',
      popupimage4: 'Assets/files/Snapshoot4.png',
      popupimage: 'Assets/files/Snapshoot popuo desktop 1.png',
      mobiledescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      deskdescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      popupmobiledescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      popupdeskdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      title: 'Tonic',
      worksmobileimage: 'Assets/files/Snapshoot.png',
      popupimage2: 'Assets/files/Snapshoot2.png',
      popupimage3: 'Assets/files/Snapshoot3.png',
      popupimage4: 'Assets/files/Snapshoot4.png.png',
      popupimage: 'Assets/files/Snapshoot popuo desktop 1.png',
      mobiledescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      deskdescription: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
      popupmobiledescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      popupdeskdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
    {
      title: 'Multi-Post Stories',
      popupimage2: 'Assets/files/Snapshoot2.png',
      popupimage3: 'Assets/files/Snapshoot3.png',
      popupimage4: 'Assets/files/Snapshoot4.png.png',
      workdeskimage: 'Assets/files/Snapshoot-Desktop1.png',
      popupimage: 'Assets/files/Snapshoot popuo desktop 1.png',
      mobiledescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      deskdescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      popupmobiledescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
      popupdeskdescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      linklive: '#',
      linksource: '#',
    },
  ];
  const worksection = document.getElementById('works');
  for (let i = 0; i < works.length; i += 1) {
    const container01 = `<ul class="container1 containerx"><li><div class="works-pic img"><img src="Assets/files/Snapshoot.png" alt=""></div><div class="responsive-image1"><img class="img-fluid" src="${works[i].workdeskimage}" alt="Responsive Image"></div></li><li><h2 class="works-heading deskheading1 ton">Tonic</h2><div class="canopy canopy1"><div class="canop">CANOPY</div><div class="circle"><i class="fa fa-circle"></i></div>Back End Dev<div class="circle"><i class="fa fa-circle"></i></div>2015</div><p class="works-paragraph deskpar1">${works[i].mobiledescription}</p><ul class="languages languages-1"><li>html</li><li>css</li><li>Javascript</li></ul><button id="project" class="project-1">See project</button></li></ul>
                         <section class="popup popup1 popup-inactive"><div class="popup one-content"><span class="close close1 close01">&times</span><div class="object-details"><h2 class="works-heading popheading">Tonic</h2><div class="canopy popcanopy"><img src="Assets/files/Frame 2.png" alt="Loading"></div><div class="works-pic popupimg1"><img src="Assets/files/Snapshoot.png" alt="Loading"></div><div class="deskpop one"><img class="img-fluid" src="${works[i].popupimage}" alt=""></div><p class="works-paragraph poparagraph1">${works[i].popupmobiledescription}</p><p class="works-paragraph poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="languages poplist desklist"><li>html</li><li>css</li><li>Javascript</li> </ul><ul class="languages lang1"><li>Ruby</li><li>Bootstrap</li></ul></div><div><ul class="live-links"><li><button class="live-link1">See live</button></li><li><button  class="live-link2">See source</button></li></ul></div></div></div><div class="overlay"></div></section>`;
    const container02 = `<ul class="container2 containery"><li><div class="works-pic"><img src="Assets/files/Snapshoot2.png" alt=""></div><div class="responsive-image2"><img class="img-fluid" src="Assets/files/Snapshoot desktop2.jpg" alt="Responsive Image"></div></li><li><h2 class="works-heading deskheading2">${works[i].title}</h2><div class="canopy canopy2 canopyX"><div class="canop">CANOPY</div><div class="circle"></i></div>Back End Dev<div class="circle"><i class="fa fa-circle"></i></div>2015</div></div><div class="canopyX10"><img src="Assets/files/Frame facebook.jpg" alt=""></div><p class="works-paragraph deskpar2 deskparY">${works[i].mobiledescription}</p><p class="deskpar3">Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.</p><ul class="languages languages-2"><li>html</li><li class="ruby">Ruby on rails</li><li>css</li><li>Javascript</li></ul><button class="project project-2">See project</button></li></ul>
                         <section class="popup popup2 popup-inactive"><div class="popup one-content"><span class="close close1 close2">&times</span><div class="object-details"><h2 class="works-heading popheading">Multi-Post Stories</h2><div class="canopy popcanopy"><img src="Assets/files/Frame 2.png" alt="Loading"></div><div class="works-pic popupimg1"><img src="Assets/files/Snapshoot2.png" alt="Loading"></div><div class="deskpop one"><img class="img-fluid" src="Assets/files/Snapshoot desktop2.jpg" alt=""></div><p class="works-paragraph poparagraph1">${works[i].popupmobiledescription}</p><p class="works-paragraph poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="languages poplist desklist"><li>html</li><li>css</li><li>Javascript</li> </ul><ul class="languages lang1"><li>Ruby</li><li>Bootstrap</li></ul></div><div><ul class="live-links"><li><button class="live-link1">See live</button></li><li><button  class="live-link2">See source</button></li></ul></div></div></div><div class="overlay"></div></section>`;
    const container03 = `<ul class="container1 containerx"><li><div class="works-pic"><img src="Assets/files/Snapshoot3.png" alt=""></div><div class="responsive-image3"><img class="img-fluid" src="Assets/files/Snapshoot desktop Portfolio3.jpg" alt="Responsive Image"></div></li><li><h2 class="works-heading tonic">Tonic</h2><h2 class="works-heading facebook">Facebook 360</h2><div class="canopy canopy1 canopyX"><img src="Assets/files/Frame 2.png" alt=""></div><div class="canopyX1 canopy-facebook"><div class="faceB">FACEBOOK</div><div class="circle"><i class="fa fa-circle"></i></div>Back End Dev<div class="circle"><i class="fa fa-circle"></i></div>2015</div></div><p class="works-paragraph deskpar1 deskparY">${works[i].mobiledescription}</p><p class="deskpar4">Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.</p><ul class="languages languages-1"><li>html</li><li class="ruby">Ruby on rails</li><li>css</li><li>Javascript</li></ul><button class="project project-3 project-33">See project</button></li></ul> 
                         <section class="popup popup3 popup-inactive"><div class="popup one-content"><span class="close close1 close3">&times</span><div class="object-details"><h2 class="works-heading popheading">Tonic</h2><div class="canopy popcanopy"><img src="Assets/files/Frame 2.png" alt="Loading"></div><div class="works-pic popupimg1"><img src="Assets/files/Snapshoot3.png" alt="Loading"></div><div class="deskpop one"><img class="img-fluid" src="Assets/files/Snapshoot desktop Portfolio3.jpg" alt=""></div><p class="works-paragraph poparagraph1">${works[i].popupmobiledescription}</p><p class="works-paragraph poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="languages poplist desklist"><li>html</li><li>css</li><li>Javascript</li> </ul><ul class="languages lang1"><li>Ruby</li><li>Bootstrap</li></ul></div><div><ul class="live-links"><li><button class="live-link1">See live</button></li><li><button  class="live-link2">See source</button></li></ul></div></div></div><div class="overlay"></div></section>`;
    const container04 = `<ul class="container2 containery"><li><div class="works-pic"><img src="Assets/files/Snapshoot4.png" alt=""></div><div class="responsive-image2"><img class="img-fluid" src="Assets/files/Snapshoot desktop4.jpg" alt="Responsive Image"></div></li><li><h2 class="works-heading multi">${works[i].title}</h2><h2 class="works-heading uberheading">Uber Navigation</h2><div class="canopy canopy2 canopyX"><img src="Assets/files/Frame 2.png" alt=""></div><div class="canopyuber"><img src="Assets/files/Frame uber.jpg" alt=""></div><p class="works-paragraph deskpar2 deskparY">${works[i].mobiledescription}</p><p class="deskpar5">A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.</p><ul class="languages languages-2 languages22"><li>html</li><li class="ruby">Ruby on rails</li><li>css</li><li>Javascript</li></ul><button class="project project-4">See project</button></li></ul>
                         <section class="popup popup4 popup-inactive"><div class="popup one-content"><span class="close close1 close4">&times</span><div class="object-details"><h2 class="works-heading popheading">Uber Navigation</h2><div class="canopy popcanopy"><img src="Assets/files/Frame uber.jpg" alt="Loading"></div><div class="works-pic popupimg1"><img src="Assets/files/Snapshoot4.png" alt="Loading"></div><div class="deskpop one"><img class="img-fluid" src="Assets/files/Snapshoot desktop4.jpg" alt=""></div><p class="works-paragraph poparagraph1">${works[i].popupmobiledescription}</p><p class="works-paragraph poparagraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br> <br> <br> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.</p><div class="technologies"><ul class="languages poplist desklist"><li>html</li><li>css</li><li>Javascript</li> </ul><ul class="languages lang1"><li>Ruby</li><li>Bootstrap</li></ul></div><div><ul class="live-links"><li><button class="live-link1">See live</button></li><li><button  class="live-link2">See source</button></li></ul></div></div></div><div class="overlay"></div></section>`;
    worksection.innerHTML = container01 + container02 + container03 + container04;
  }
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('popup-inactive');
    document.querySelector('.popup').classList.remove('popup');
  });
  document.querySelector('.project-1').addEventListener('click', () => {
    document.querySelector('.popup1').classList.remove('popup-inactive');
    document.querySelector('.popup1').classList.add('popup1');
  });
  document.querySelector('.close2').addEventListener('click', () => {
    document.querySelector('.popup2').classList.add('popup-inactive');
    document.querySelector('.popup2').classList.remove('popup');
  });
  document.querySelector('.project-2').addEventListener('click', () => {
    document.querySelector('.popup2').classList.remove('popup-inactive');
    document.querySelector('.popup2').classList.add('popup2');
  });
  document.querySelector('.close3').addEventListener('click', () => {
    document.querySelector('.popup3').classList.add('popup-inactive');
    document.querySelector('.popup3').classList.remove('popup');
  });
  document.querySelector('.project-3').addEventListener('click', () => {
    document.querySelector('.popup3').classList.remove('popup-inactive');
    document.querySelector('.popup3').classList.add('popup3');
  });
  document.querySelector('.close4').addEventListener('click', () => {
    document.querySelector('.popup4').classList.add('popup-inactive');
    document.querySelector('.popup4').classList.remove('popup');
  });
  document.querySelector('.project-4').addEventListener('click', () => {
    document.querySelector('.popup4').classList.remove('popup-inactive');
    document.querySelector('.popup4').classList.add('popup4');
  });
  // data preservation //
  const form = document.getElementById('form');
  const namefield = document.getElementById('name');
  const emailfield = document.getElementById('email');
  const messagefield = document.getElementById('text');
  if (localStorage.getItem('formData')) {
    const formData = JSON.parse(localStorage.getItem('formData'));
    namefield.value = formData.name;
    emailfield.value = formData.email;
    messagefield.value = formData.message;
  }
  form.addEventListener('input', () => {
    const formData = {
      name: namefield.value,
      email: emailfield.value,
      message: messagefield.value,
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    const formInfo = document.getElementById('form');
    const submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', () => {
      formInfo.submit();
    });
  });
  // End of data preservation //

  // Form validation //
  form.addEventListener('submit', (event) => {
    const emailInput = document.querySelector('#email').value;
    const SubmitEmail = emailInput.toLowerCase();
    if ((emailInput !== SubmitEmail)) {
      document.querySelector('.failed').classList.add('failed');
      document.querySelector('.failed').classList.remove('validate-email-disabled');
      event.preventDefault();
    } else {
      document.querySelector('.failed').classList.add('validate-email-disabled');
      document.querySelector('.failed').classList.remove('failed');
      form.onSubmit();
    }
  });
  // end of form validation//
});