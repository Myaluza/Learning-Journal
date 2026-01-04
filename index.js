const bodyEl = document.getElementById("bodyEl")
const aboutEl = document.getElementById("about")

function renderHomePage() {
    bodyEl.innerHTML = `<nav>
                            <img src="images/headerImage.png" id="headerImg">
                            <h1>My Learning Journal</h1>
                            <a id="home"><p>HOME</p></a>
                            <a id="about"><p>ABOUT ME</p></a>
                        </nav>
                        <main>
                            <article id="mainArticle">
                                <time>January 3, 2026</time>
                                <h2>My new journey as a bootcamp student</h2>
                                <p>After several months of learning in the Full Stack Developer Career Path, 
                                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                    Solo Projects projects and meet like-minded peers.</p>
                            </article>
                            <section>
                                <article class="blogArticle">
                                    <img src="images/article1.png" class="articleImg">
                                    <time class="articleDate">January 3, 2026</time>
                                    <h2 class="articleHeading">Blog 1</h2>
                                    <p class="articleText">After several months of learning in the Full Stack Developer Career Path, 
                                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                    Solo Projects projects and meet like-minded peers.</p>
                                </article>
                                <article class="blogArticle">
                                    <img src="images/article1.png" class="articleImg">
                                    <time class="articleDate">January 3, 2026</time>
                                    <h2 class="articleHeading">Blog 2</h2>
                                    <p class="articleText">After several months of learning in the Full Stack Developer Career Path, 
                                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                    Solo Projects projects and meet like-minded peers.</p>
                                </article>
                                <article class="blogArticle">
                                    <img src="images/article1.png" class="articleImg">
                                    <time class="articleDate">January 3, 2026</time>
                                    <h2 class="articleHeading">Blog 2</h2>
                                    <p class="articleText">After several months of learning in the Full Stack Developer Career Path, 
                                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                    Solo Projects projects and meet like-minded peers.</p>
                                </article>
                            </section>
                        </main>`
}

function renderMainArticle() {
    bodyEl.innerHTML = `<nav>
                            <img src="images/headerImage.png" id="headerImg">
                            <h1>My Learning Journal</h1>
                            <a id="home"><p>HOME</p></a>
                            <a id="about"><p>ABOUT ME</p></a>
                        </nav>
                        <main>
                            <article id="mainArticle">
                                <div class="image-container">
                                    <img src="images/main-article.png" class="articleImg">
                                    <div class="text-overlay">
                                        <time class="articleDate">January 3, 2026</time>
                                        <h2 class="articleHeading">My new journey as a bootcamp student</h2>
                                    </div>
                                </div>
                                <p class="articleText">I like to think of myself as a lifelong learner. I used to 
                                    spend hours and hours learning, then try to create simple 
                                    projects using what I learned or work new techniques into 
                                    existing projects.<br><br>
                                    While that was fun, I felt like it would be helpful to 
                                    share what I was learning and most things about my journey 
                                    with the world. I started simple and gradually grew my 
                                    learning journal site. I would take notes about what I was 
                                    learning. After each learning session, I'd use my notes to 
                                    not only reflect on what I learned but also write short 
                                    summaries of what I learned using my own words.<br><br>
                                    That helped me grok what I was learning, and I realized 
                                    that posting my learning summaries was also helping others 
                                    learn and stay motivated.</p>
                            </article>
                            <h3 id="recentPostHeading">Recent Posts</h3>
                            <section>
                                <article class="blogArticle">
                                    <img src="images/article1.png" class="articleImg">
                                    <time class="articleDate">January 3, 2026</time>
                                    <h2 class="articleHeading">Blog 1</h2>
                                    <p class="articleText">After several months of learning in the Full Stack Developer Career Path, 
                                        I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                        Solo Projects projects and meet like-minded peers.</p>
                                </article>
                                <article class="blogArticle">
                                    <img src="images/article1.png" class="articleImg">
                                    <time class="articleDate">January 3, 2026</time>
                                    <h2 class="articleHeading">Blog 2</h2>
                                    <p class="articleText">After several months of learning in the Full Stack Developer Career Path, 
                                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                                    Solo Projects projects and meet like-minded peers.</p>
                                </article>
                            </section>
                        </main>`
}

function renderAboutMePage() {
    bodyEl.innerHTML = `<nav>
            <img src="images/headerImage.png" id="headerImg">
            <h1>My Learning Journal</h1>
            <a id="home"><p>HOME</p></a>
            <a id="about"><p>ABOUT ME</p></a>
        </nav>
        <main>
            <img src="images/aboutmeimg.jpeg" id="aboutImg">
            <h2 class="articleHeading">Hi there! My name is Thuthu and welcome to my learning journal.</h2>
            <p class="articleText">
                I like to think of myself as a lifelong learner. I used to 
                spend hours and hours learning, then try to create simple 
                projects using what I learned or work new techniques into 
                existing projects.<br><br>
                While that was fun, I felt like it would be helpful to 
                share what I was learning and most things about my journey 
                with the world. I started simple and gradually grew my 
                learning journal site. I would take notes about what I was 
                learning. After each learning session, I'd use my notes to 
                not only reflect on what I learned but also write short 
                summaries of what I learned using my own words.<br><br>
                That helped me grok what I was learning, and I realized 
                that posting my learning summaries was also helping others 
                learn and stay motivated.
            </p>
            <h3 id="recentPostHeading">Recent Posts</h3>
            <section>
                <article class="blogArticle">
                    <img src="images/article1.png" class="articleImg">
                    <time class="articleDate">January 3, 2026</time>
                    <h2 class="articleHeading">Blog 1</h2>
                    <p class="articleText">
                    After several months of learning in the Full Stack Developer Career Path, 
                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                    Solo Projects projects and meet like-minded peers.
                    </p>
                </article>
                <article class="blogArticle">
                    <img src="images/article1.png" class="articleImg">
                    <time class="articleDate">January 3, 2026</time>
                    <h2 class="articleHeading">Blog 2</h2>
                    <p class="articleText">
                    After several months of learning in the Full Stack Developer Career Path, 
                    I've made the big jump over to the Bootcamp to get expert code reviews of my 
                    Solo Projects projects and meet like-minded peers.
                    </p>
                </article>
            </section>
        </main>`
}

renderHomePage()

document.addEventListener("click", function(e) {
    if (e.target.closest("#about")) {
        renderAboutMePage();
    }
    
    if (e.target.closest("#home")) {
        renderHomePage();
    }

    if (e.target.closest("#mainArticle")) {
        renderMainArticle()
    }
});