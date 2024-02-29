//Background Color
const body = document.getElementsByTagName('body')[0].style = 'background-color:plum';
//Sets nav bar
const nav = document.createElement("div");
nav.style.backgroundColor = "black";
nav.style.padding = "30px";
nav.style.borderRadius = "25px"
nav.style.fontFamily = "Consolas";
document.body.append(nav);
//Home link
const home = document.createElement("a");
home.href = "https://www.figma.com/";
home.textContent = "Home";
home.style.color = "white";
home.style.paddingLeft = "23%";
nav.append(home);
//Gallery link
const gallery = document.createElement("a");
gallery.href = "https://www.figma.com/";
gallery.textContent = "Gallery";
gallery.style.color = "white";
gallery.style.paddingLeft = "23%";
nav.append(gallery);
//Blog link
const blog = document.createElement("a");
blog.href = "https://www.figma.com/";
blog.textContent = "Blog";
blog.style.color = "white";
blog.style.paddingLeft = "23%";
nav.append(blog);
//Main div
const div = document.createElement('div');
div.style.padding = "100px";
div.style.background = "beige";
div.style.marginTop = "25px";
div.style.borderRadius = "25px"
document.body.append(div);;
//Header
const header = document.createElement('h1');
header.style.fontFamily = "Consolas";
header.textContent = "About Messi";
header.style.display = "flex";
header.style.justifyContent = "center";
div.append(header);
//Photo of Messi
const img = document.createElement('img');
img.src = "./lionel-messi_imago1019567000h.jpg";
img.alt = "Messi Photo";
img.style.width = "150px";
img.style.height = "auto";
img.style.float = "left";
img.style.padding = "15px";
div.append(img);
//Paragraph about Messi
const content = document.createElement('p');
content.textContent = "Lionel Messi: The Maestro of Football. Born on June 24, 1987, in Rosario, Argentina, Lionel Messi has carved out a legacy as one of the greatest footballers of all time. From his humble beginnings to his record-breaking achievements, Messi's journey is a testament to his unparalleled talent and unwavering dedication to the sport. Messi's rise to stardom began at a young age when he joined FC Barcelona's youth academy, La Masia. He made his first-team debut for Barcelona at just 17 years old, showcasing his incredible skills and footballing IQ. Messi's ability to dribble past defenders with ease, score goals from impossible angles, and create scoring opportunities for his teammates has earned him numerous accolades, including an unprecedented seven FIFA Ballon d'Or awards. One of Messi's most remarkable qualities is his humility and team-first mentality. Despite his individual brilliance, Messi has always prioritized the success of the team over personal accolades. His selfless play and work ethic have endeared him to fans and teammates alike. In 2021, Messi made headlines when he left Barcelona, his club of over 20 years, and joined Paris Saint-Germain (PSG). The move marked the end of an era at Barcelona and signaled a new chapter in Messi's career. Despite the change, Messi has continued to dazzle fans with his performances on the field, proving that his talent knows no bounds. Off the field, Messi is known for his charitable work through his foundation, the Leo Messi Foundation, which supports causes such as providing access to education and healthcare for children in need. In conclusion, Lionel Messi's impact on the world of football is unparalleled. His talent, dedication, and humility have made him a role model for aspiring footballers around the world. Messi's legacy will endure for generations to come, cementing his status as a true maestro of the beautiful game.";
content.style.fontFamily = "Consolas";
div.append(content);
//Footer
const footer = document.createElement('footer');
footer.style.padding = "15px";
footer.style.backgroundColor = "black";
footer.style.borderRadius = "25px";
footer.style.marginTop = "25px";
footer.style.fontFamily = "Consolas";
document.body.append(footer);
//Author
const foot = document.createElement('p');
foot.textContent = "Author: Daniel Freeman";
foot.style.color = "white";
foot.style.paddingLeft = "30%";
footer.append(foot);
//Email
const email = document.createElement('a');
email.textContent = "danielfree756@gmail.com";
email.href = "mailto:danielfree756@gmail.com";
email.style.color = "white";
email.style.paddingLeft = "30%";
foot.append(email);